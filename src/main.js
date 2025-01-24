window.addEventListener('DOMContentLoaded', () => {
    const pillDivs = document.querySelectorAll('.group.absolute.z-20');
    const morpheusImg = document.querySelector('img[alt="morpheus"]');

    if (!morpheusImg) return;

    function updatePositions() {
      const rect = morpheusImg.getBoundingClientRect();

      if (pillDivs[0]) {
        const topRatio = 0.67;
        const leftRatio = 0.22;
        pillDivs[0].style.top  = (rect.top  + rect.height * topRatio) + 'px';
        pillDivs[0].style.left = (rect.left + rect.width  * leftRatio) + 'px';
        pillDivs[0].style.width  = '50px'; 
        pillDivs[0].style.height = '50px';
      }

      if (pillDivs[1]) {
        const topRatio = 0.67;
        const leftRatio = 0.74;
        pillDivs[1].style.top  = (rect.top  + rect.height * topRatio) + 'px';
        pillDivs[1].style.left = (rect.left + rect.width  * leftRatio) + 'px';
        pillDivs[1].style.width  = '50px';
        pillDivs[1].style.height = '50px';
      }
    }

    window.addEventListener('resize', updatePositions);
    updatePositions();
});
  
document.addEventListener('DOMContentLoaded', () => {
  const portfolioLink = document.querySelector('a[href="/portfolio"]');
  if (portfolioLink) {
    portfolioLink.addEventListener('click', function(e) {
      e.preventDefault();  // Verhindere sofortiges Navigieren

      // Klasse an body anfügen -> CSS-Transitionen starten
      document.body.classList.add('zoom-out');

      // Nach der Animationsdauer (700ms) wirklich wechseln
      setTimeout(() => {
        window.location.href = this.href;
      }, 700);
    });
  }
});