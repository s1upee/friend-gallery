// Get the lightbox elements
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

// Function to open lightbox
function openLightbox(event) {
    lightboxImage.src = event.target.src;
    lightbox.style.display = 'block';
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Add event listeners
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', openLightbox);
});

closeButton.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside of the image
lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});
