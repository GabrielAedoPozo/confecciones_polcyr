// Scripts adicionales para funcionalidades específicas

// Intersection Observer para animaciones
function initScrollAnimations() {
  if (!window.IntersectionObserver) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  // Observar elementos que necesitan animación
  document.querySelectorAll('.tech-card, .why-card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Mejorar el contador de estadísticas con animación
function animateStats() {
  const statNumber = document.querySelector('.stat-number');
  if (!statNumber) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.textContent.replace(/[^\d]/g, ''));
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            clearInterval(timer);
            current = target;
          }
          entry.target.textContent = Math.floor(current).toLocaleString() + '+';
        }, 20);
        observer.unobserve(entry.target);
      }
    });
  });
  
  observer.observe(statNumber);
}

// Inicializar funciones adicionales
function initAdditionalFeatures() {
  initScrollAnimations();
  animateStats();
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdditionalFeatures);
} else {
  initAdditionalFeatures();
}

// Exportar para uso global
window.AdditionalFeatures = {
  initScrollAnimations,
  animateStats
};
