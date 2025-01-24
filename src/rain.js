function rain() {
    const cloud = document.querySelector('.cloud');
    const dropCount = 10;

    for (let i = 0; i < dropCount; i++) {
      const drop = document.createElement('div');
      drop.classList.add(
        'absolute',
        'text-[rgb(4,252,4)]',
        'font-mono',
        'animate-fall'
      );

      // Zufälliges Katakana-Zeichen
      drop.innerText = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));

      // Zufällige X-Position
      const left = Math.random() * window.innerWidth;
      drop.style.left = `${left}px`;

      // Zufällige Schriftgröße (zwischen 0.5em und 2em)
      const size = Math.random() * 1.5 + 0.5;
      drop.style.fontSize = `${size}em`;

      // Zufällige Fallzeit (zwischen 5s und 7s)
      const duration = Math.random() * 2 + 5;
      drop.style.animationDuration = `${duration}s`; // Überschreibt die Standard-Dauer

      cloud.appendChild(drop);

      // Nach Ablauf der Animationszeit entfernen
      setTimeout(() => {
        if (cloud.contains(drop)) {
          cloud.removeChild(drop);
        }
      }, duration * 1000);
    }
  }

  setInterval(rain, 100);