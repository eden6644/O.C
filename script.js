// // 
// // setTimeout(function() {
// //     window.addEventListener('scroll', function() {
// //         let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// //         if (scrollTop > lastScrollTop) {
// //             navbar.style.top = '-100px'; // Adjust the value based on your navbar height
// //         } else {
// //             navbar.style.top = '0';
// //         }
// //         lastScrollTop = scrollTop;
// //     });
// // }, 1000);
// let lastScrollTop = 0;
// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//         this.setTimeout(function() {
//             navbar.style.top = '-100px'; // Adjust the value based on your navbar height
//         }, 5000);
//     } else {
//         navbar.style.top = '0';
//     }
//     lastScrollTop = scrollTop;
// });

// if i click to the body the nav back to normal

    document.body.addEventListener('click', function(event) {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });

// Contact us map

// function initMap() {
//     // Coordonnées pour 11°38'21.3"S 27°26'10.9"E
//     var location = { lat: -11.63925, lng: 27.43635 };

//     // Initialiser la carte
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 10,
//         center: location
//     });

//     // Ajouter un marqueur à l'emplacement
//     var marker = new google.maps.Marker({
//         position: location,
//         map: map
//     });
// }


// lien active en fonction de la div sur écran

    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const id = section.getAttribute('id');

            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
// Liste des vidéos dans votre dossier 'img'
const videos = ['vid.mp4', 'vid2.mp4']; // Remplacez par les noms de vos vidéos

// Fonction pour choisir une vidéo aléatoire
function getRandomVideo() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    return `img/${videos[randomIndex]}`;
}

// Sélectionner directement le premier élément <video> de votre HTML
const videoElement = document.querySelector('.background-clip');
videoElement.src = getRandomVideo();
