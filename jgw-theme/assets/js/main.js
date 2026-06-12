/* JGW Dietetics — Theme JS */
(function () {
  'use strict';

  // ── Sticky header scroll class ────────────────────────────
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile menu toggle ────────────────────────────────────
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // ── FAQ accordion ─────────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(function (el) { el.classList.remove('open'); });
      // Open clicked (unless it was already open)
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Contact form ──────────────────────────────────────────
  var contactForm = document.getElementById('jgw-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // If using Contact Form 7 or a WP form plugin, remove this handler.
      // This is a fallback notice until the form is wired up.
      e.preventDefault();
      var notice = document.getElementById('form-notice');
      if (notice) {
        notice.textContent = 'Thank you — Jackie will be in touch within 1–2 working days.';
        notice.style.display = 'block';
        contactForm.style.display = 'none';
      }
    });
  }

  // ── Smooth scroll for anchor links ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
