// Intersection Observer for scroll-triggered fade-up animations
// Exposed on window so the Firebase module script can call it safely
window.siteObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      window.siteObserver.unobserve(entry.target); // stop watching once visible
    }
  });
}, { threshold: 0.15 });

// Observe all static fade-up elements present at page load
document.querySelectorAll('.fade-up').forEach(el => window.siteObserver.observe(el));
