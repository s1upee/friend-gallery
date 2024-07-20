// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lightbox functionality
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

const lightboxContent = document.createElement('div');
lightboxContent.className = 'lightbox-content';
lightbox.appendChild(lightboxContent);

const closeButton = document.createElement('span');
closeButton.className = 'close';
closeButton.innerHTML = '&times;';
lightbox.appendChild(closeButton);

const lightboxImage = document.createElement('img');
lightboxContent.appendChild(lightboxImage);

function openLightbox(event) {
    lightboxImage.src = event.target.src;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', openLightbox);
});

closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Play background music
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.play();

function toggleMusic() {
    const musicControl = document.getElementById('music-control');
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicControl.textContent = 'Pause Music';
    } else {
        backgroundMusic.pause();
        musicControl.textContent = 'Play Music';
    }
}
