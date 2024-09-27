// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
});
