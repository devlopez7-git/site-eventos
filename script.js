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
  
    // Música automática com início adiantado
    const audio = document.createElement('audio');
    audio.src = 'msc.mp3'; // Substitua pelo caminho do seu arquivo de áudio
    audio.loop = true;
    audio.style.display = 'none'; // Esconde o player para o usuário
  
    // Adiciona o elemento de áudio ao corpo da página
    document.body.appendChild(audio);
  
    // Quando o áudio estiver pronto para ser reproduzido
    audio.addEventListener('loadedmetadata', () => {
      // Adianta 20 segundos
      audio.currentTime = 14;
  
      // Tenta tocar automaticamente
      audio.play().catch((error) => {
        console.warn('O navegador bloqueou o autoplay:', error);
      });
    });
  });
  