const categoryBtns = document.querySelectorAll('.category-btn');
const projects = document.querySelectorAll('.projects');

// عرض فئة واحدة عند الضغط
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    projects.forEach(p => {
      p.style.display = p.classList.contains(target) ? 'block' : 'none';
    });
  });
});

// عرض الفئة الأولى بشكل افتراضي
// <!-- Intersection Observer للـ fade-up animation -->

projects.forEach(p => p.style.display = p.classList.contains('video') ? 'block' : 'none');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

