const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks for reaching out! Our concierge will contact you shortly.');
    contactForm.reset();
  });
}
