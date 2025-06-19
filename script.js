class InstagramUnfollowersChecker {
    constructor() {
        this.followersData = null;
        this.followingData = null;
        this.results = null;
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.getElementById('followersFile').addEventListener('change', (e) => {
            this.handleFileUpload(e, 'followers');
        });

        document.getElementById('followingFile').addEventListener('change', (e) => {
            this.handleFileUpload(e, 'following');
        });

        document.getElementById('analyzeBtn').addEventListener('click', () => {
            this.analyzeData();
        });

        document.getElementById('exportJson').addEventListener('click', () => {
            this.exportToJSON();
        });

        document.getElementById('exportCsv').addEventListener('click', () => {
            this.exportToCSV();
        });
    }

    handleFileUpload(event, type) {
        const file = event.target.files[0];
        if (!file) return;

        const fileNameElement = document.getElementById(`${type}FileName`);
        fileNameElement.textContent = file.name;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (type === 'followers') {
                    this.followersData = data;
                } else {
                    this.followingData = data;
                }
                this.checkFilesReady();
            } catch (error) {
                this.showError(`Error membaca file ${file.name}: ${error.message}`);
            }
        };
        reader.readAsText(file);
    }

    checkFilesReady() {
        const analyzeBtn = document.getElementById('analyzeBtn');
        if (this.followersData && this.followingData) {
            analyzeBtn.disabled = false;
        } else {
            analyzeBtn.disabled = true;
        }
    }

    extractUsernames(data, type) {
        const usernames = new Set();
        
        if (type === 'following' && data.relationships_following) {
            data = data.relationships_following;
        }

        if (Array.isArray(data)) {
            data.forEach(item => {
                if (item && item.string_list_data && Array.isArray(item.string_list_data)) {
                    item.string_list_data.forEach(stringData => {
                        if (stringData && stringData.value) {
                            usernames.add(stringData.value);
                        }
                    });
                }
            });
        }

        return usernames;
    }

    async analyzeData() {
        if (!this.followersData || !this.followingData) {
            this.showError('Silakan upload kedua file JSON terlebih dahulu');
            return;
        }

        this.showLoading(true);
        this.hideResults();

        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            const followersUsernames = this.extractUsernames(this.followersData, 'followers');
            const followingUsernames = this.extractUsernames(this.followingData, 'following');

            const unfollowers = new Set([...followingUsernames].filter(x => !followersUsernames.has(x)));
            const mutualFollowers = new Set([...followersUsernames].filter(x => followingUsernames.has(x)));
            const notFollowingBack = new Set([...followersUsernames].filter(x => !followingUsernames.has(x)));

            this.results = {
                unfollowers: Array.from(unfollowers).sort(),
                mutualFollowers: Array.from(mutualFollowers).sort(),
                notFollowingBack: Array.from(notFollowingBack).sort(),
                totalFollowers: followersUsernames.size,
                totalFollowing: followingUsernames.size,
                totalUnfollowers: unfollowers.size,
                totalMutual: mutualFollowers.size,
                totalNotFollowingBack: notFollowingBack.size
            };

            this.displayResults();
            this.showLoading(false);

        } catch (error) {
            this.showError(`Error saat menganalisis data: ${error.message}`);
            this.showLoading(false);
        }
    }

    displayResults() {
        document.getElementById('totalFollowers').textContent = this.results.totalFollowers;
        document.getElementById('totalFollowing').textContent = this.results.totalFollowing;
        document.getElementById('totalMutual').textContent = this.results.totalMutual;
        document.getElementById('totalUnfollowers').textContent = this.results.totalUnfollowers;
        document.getElementById('totalNotFollowing').textContent = this.results.totalNotFollowingBack;

        this.displayUsernameList('unfollowersList', this.results.unfollowers);
        this.displayUsernameList('mutualList', this.results.mutualFollowers);
        this.displayUsernameList('notFollowingList', this.results.notFollowingBack);

        document.getElementById('results').style.display = 'block';
    }

    displayUsernameList(elementId, usernames) {
        const container = document.getElementById(elementId);
        container.innerHTML = '';

        if (usernames.length === 0) {
            container.innerHTML = '<div style="text-align: center; color: #666; padding: 20px;">Tidak ada data</div>';
            return;
        }

        usernames.forEach(username => {
            const item = document.createElement('div');
            item.className = 'username-item';
            item.innerHTML = `
                <span class="username">@${username}</span>
                <button class="copy-btn" onclick="copyToClipboard('${username}')">
                    <i class="fas fa-copy"></i>
                </button>
            `;
            container.appendChild(item);
        });
    }

    showLoading(show) {
        const loading = document.getElementById('loading');
        loading.style.display = show ? 'block' : 'none';
    }

    hideResults() {
        document.getElementById('results').style.display = 'none';
    }

    showError(message) {
        this.removeMessages();
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${message}`;
        document.querySelector('.main-content').insertBefore(errorDiv, document.querySelector('.upload-section').nextSibling);
    }

    showSuccess(message) {
        this.removeMessages();
        const successDiv = document.createElement('div');
        successDiv.className = 'success';
        successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
        document.querySelector('.main-content').insertBefore(successDiv, document.querySelector('.upload-section').nextSibling);
    }

    removeMessages() {
        const messages = document.querySelectorAll('.error, .success');
        messages.forEach(msg => msg.remove());
    }

    exportToJSON() {
        if (!this.results) {
            this.showError('Tidak ada data untuk diexport');
            return;
        }

        const dataStr = JSON.stringify(this.results, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `instagram_unfollowers_${new Date().toISOString().split('T')[0]}.json`;
        link.click();

        this.showSuccess('File JSON berhasil didownload!');
    }

    exportToCSV() {
        if (!this.results) {
            this.showError('Tidak ada data untuk diexport');
            return;
        }

        let csvContent = 'data:text/csv;charset=utf-8,';
        
        csvContent += 'Kategori,Username\n';
        
        this.results.unfollowers.forEach(username => {
            csvContent += `Unfollowers,${username}\n`;
        });
        
        this.results.mutualFollowers.forEach(username => {
            csvContent += `Mutual Followers,${username}\n`;
        });
        
        this.results.notFollowingBack.forEach(username => {
            csvContent += `Tidak Follow Back,${username}\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `instagram_unfollowers_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        this.showSuccess('File CSV berhasil didownload!');
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = event.target.innerHTML;
        event.target.innerHTML = '<i class="fas fa-check"></i>';
        event.target.style.background = '#28a745';
        
        setTimeout(() => {
            event.target.innerHTML = originalText;
            event.target.style.background = '#667eea';
        }, 1000);
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    new InstagramUnfollowersChecker();
});

document.addEventListener('DOMContentLoaded', () => {
    const uploadSection = document.querySelector('.upload-section');
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadSection.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadSection.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadSection.addEventListener(eventName, unhighlight, false);
    });

    function highlight(e) {
        uploadSection.style.borderColor = '#667eea';
        uploadSection.style.background = '#f0f2ff';
    }

    function unhighlight(e) {
        uploadSection.style.borderColor = '#dee2e6';
        uploadSection.style.background = '#f8f9fa';
    }

    uploadSection.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;

        if (files.length === 2) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        if (data.relationships_following) {
                            document.getElementById('followingFile').files = new DataTransfer().files;
                            const input = document.getElementById('followingFile');
                            const dt = new DataTransfer();
                            dt.items.add(file);
                            input.files = dt.files;
                            input.dispatchEvent(new Event('change'));
                        } else if (Array.isArray(data) && data.length > 0 && data[0].string_list_data) {
                            document.getElementById('followersFile').files = new DataTransfer().files;
                            const input = document.getElementById('followersFile');
                            const dt = new DataTransfer();
                            dt.items.add(file);
                            input.files = dt.files;
                            input.dispatchEvent(new Event('change'));
                        }
                    } catch (error) {
                        console.error('Error parsing dropped file:', error);
                    }
                };
                reader.readAsText(file);
            });
        }
    }
}); 