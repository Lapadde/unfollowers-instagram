const ADMIN_CONFIG = {
    admin1: {
        number: "6281242818675",
        name: "Admin 1",
        description: "Untuk pertanyaan umum dan bantuan teknis",
        message: "Kiw, saya butuh bantuan untuk Instagram Unfollowers Checker"
    },
    admin2: {
        number: "6281242818675",
        name: "Admin 2", 
        description: "Untuk masalah khusus dan troubleshooting",
        message: "Kiw, saya mengalami masalah dengan Instagram Unfollowers Checker"
    },
    
    defaultMessage: "Kiw, saya butuh bantuan untuk Instagram Unfollowers Checker"
};

function createWhatsAppLink(number, message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${number}?text=${encodedMessage}`;
}

function updateWhatsAppLinks() {
    const admin1Links = document.querySelectorAll('[data-admin="1"]');
    admin1Links.forEach(link => {
        link.href = createWhatsAppLink(ADMIN_CONFIG.admin1.number, ADMIN_CONFIG.admin1.message);
    });
    
    const admin2Links = document.querySelectorAll('[data-admin="2"]');
    admin2Links.forEach(link => {
        link.href = createWhatsAppLink(ADMIN_CONFIG.admin2.number, ADMIN_CONFIG.admin2.message);
    });
    
    const floatingButton = document.querySelector('.whatsapp-fixed a');
    if (floatingButton) {
        floatingButton.href = createWhatsAppLink(ADMIN_CONFIG.admin1.number, ADMIN_CONFIG.defaultMessage);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateWhatsAppLinks();
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ADMIN_CONFIG, createWhatsAppLink, updateWhatsAppLinks };
} 