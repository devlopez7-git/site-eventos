document.addEventListener('DOMContentLoaded', () => {
    // Animações de entrada
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      section.classList.add('hidden');
      observer.observe(section);
    });
  });

  // Adicionar classe para animação
  const style = document.createElement('style');
  style.innerHTML = `
    .hidden {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);