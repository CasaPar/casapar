// =============================================================================
// navbar.js — Comportamento da Navbar · CasaPar
// =============================================================================

// Navbar scroll behavior
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.querySelector('.navbar').classList.add('scrolled');
  } else {
    navbar.querySelector('.navbar').classList.remove('scrolled');
  }
}, { passive: true });


// Mobile menu toggle
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger?.addEventListener('click', () => {
  const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu.hidden = isOpen;
});


// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.hidden = true;
    hamburger.setAttribute('aria-expanded', 'false');
  });
});
