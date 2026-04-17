// =============================================================================
// main.js — Scripts Globais · CasaPar
// Scroll Reveal + Counters + FAQ Accordion + Smooth Scroll
// =============================================================================


// =============================================================================
// SCROLL REVEAL — IntersectionObserver
// Observa elementos .reveal e .reveal-stagger e adiciona .visible
// =============================================================================

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }
);

document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
  revealObserver.observe(el);
});


// =============================================================================
// COUNTERS — Animação dos números na seção #numeros
// =============================================================================

function animateCounter(el, target, suffix) {
  const duration = 2000;
  const start = performance.now();
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const raw = el.dataset.count;
        const suffix = el.dataset.suffix || '';
        animateCounter(el, parseInt(raw, 10), suffix);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-count]').forEach((el) => {
  counterObserver.observe(el);
});


// =============================================================================
// FAQ ACCORDION — Acessível, animado via max-height
// =============================================================================

// Inicializa respostas ocultas com max-height: 0
document.querySelectorAll('.faq__answer').forEach((answer) => {
  answer.style.maxHeight = '0';
  answer.style.overflow = 'hidden';
  answer.style.transition = 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
});

document.querySelectorAll('.faq__question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const answerId = btn.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);

    if (!answer) return;

    // Fecha todos os outros itens
    document.querySelectorAll('.faq__question').forEach((otherBtn) => {
      if (otherBtn !== btn) {
        const otherId = otherBtn.getAttribute('aria-controls');
        const otherAnswer = document.getElementById(otherId);
        if (otherAnswer) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAnswer.setAttribute('hidden', '');
          otherAnswer.style.maxHeight = '0';
        }
      }
    });

    // Toggle do item clicado
    if (isExpanded) {
      btn.setAttribute('aria-expanded', 'false');
      answer.setAttribute('hidden', '');
      answer.style.maxHeight = '0';
    } else {
      btn.setAttribute('aria-expanded', 'true');
      answer.removeAttribute('hidden');
      // Força reflow para animação funcionar corretamente
      answer.offsetHeight; // eslint-disable-line no-unused-expressions
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});


// =============================================================================
// HERO PARALLAX — imagem de fundo move levemente no scroll
// =============================================================================

(function () {
  const heroBgImg = document.querySelector('.hero__bg-img');
  const hero = document.getElementById('hero');
  if (!heroBgImg || !hero) return;

  // Respeita prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const heroH  = hero.offsetHeight;
      if (scrollY < heroH) {
        // Translação suave: 30% do scroll — imagem sobe devagar enquanto conteúdo sobe normal
        heroBgImg.style.transform = `translateY(${scrollY * 0.28}px) scale(1.0)`;
      }
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
})();


// =============================================================================
// SMOOTH SCROLL — Links âncora internos
// =============================================================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
