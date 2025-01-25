var typemd = new Typed(".text", {
    strings: ["Développeur Frontend", "Développeur Backend", "Administrateur Système", "Graphiste", "Développeur web", "Développeur Mobile","Technicien en sécurité","Technicien réseau"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true // Pour que l'animation continue en boucle
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

document.getElementById('more-about-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Evite que le lien recharge la page
    document.getElementById('more-about-section').style.display = 'block'; // Affiche la section
});

document.getElementById('close-about-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('more-about-section').style.display = 'none'; // Cache la section
});

document.getElementById('more-about-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Evite que le lien recharge la page
    document.getElementById('more-about-section').style.display = 'block'; // Affiche la section
});

document.getElementById('close-about-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('more-about-section').style.display = 'none'; // Cache la section
});
// Clic sur le bouton "More About Me"
function toggleAboutSection(btnId, sectionId, closeBtnId) {
    document.getElementById(btnId).addEventListener('click', function(event) {
        event.preventDefault(); // Empêche l'action par défaut
        let section = document.getElementById(sectionId);
        section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none'; // Toggle entre afficher/masquer
    });

    document.getElementById(closeBtnId).addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById(sectionId).style.display = 'none'; // Masque la section
    });
}

// Fonction pour afficher la section détaillée du service

// Fonction pour afficher/masquer les détails des services
function toggleServiceDetails(btnId, sectionId, closeBtnId) {
    document.getElementById(btnId).addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        let section = document.getElementById(sectionId);
        section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none'; // Toggle entre afficher/masquer
    });

    // Gestion du clic sur le bouton "Close"
    document.getElementById(closeBtnId).addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        document.getElementById(sectionId).style.display = 'none'; // Masquer la section
    });
}

// Initialisation pour chaque service
document.addEventListener('DOMContentLoaded', function() {
    toggleServiceDetails('more-about-btn-1', 'more-about-section-1', 'close-about-btn-1');
    toggleServiceDetails('more-about-btn-2', 'more-about-section-2', 'close-about-btn-2');
    toggleServiceDetails('more-about-btn-3', 'more-about-section-3', 'close-about-btn-3');
    toggleServiceDetails('more-about-btn-4', 'more-about-section-4', 'close-about-btn-4');
});
document.querySelectorAll('.line-externe').forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const moreInfo = document.querySelector(`#more-info-section-${index + 1}`);
        moreInfo.style.display = moreInfo.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.btn-close').forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const moreInfo = document.querySelector(`#more-info-section-${index + 1}`);
        moreInfo.style.display = 'none';
    });
});

