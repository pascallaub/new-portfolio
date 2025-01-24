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
        pillDivs[0].style.width  = '50px'; // Du kannst hier ebenfalls skalieren
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