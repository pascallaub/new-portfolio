let intervalId = null;
let targetContainer = null; // Global reference, used for stopping and as a flag

// Modify createRaindrop to accept the container
function createRaindrop(container) {
  // Check the passed container directly
  if (!container) return;

  const drop = document.createElement("div");
  drop.classList.add(
    "absolute",
    "text-[rgb(4,252,4)]",
    "font-mono",
    "raindrop" // Eigene Klasse zum einfachen Entfernen
  );

  // Zufälliges Katakana-Zeichen
  drop.innerText = String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96));

  // Use the passed container for offsetWidth
  const left = Math.random() * container.offsetWidth;
  drop.style.left = `${left}px`;
  drop.style.top = "0px"; // Startet oben im Container

  // Zufällige Schriftgröße (zwischen 0.5em und 2em)
  const size = Math.random() * 1.5 + 0.5;
  drop.style.fontSize = `${size}em`;

  // Zufällige Fallzeit (zwischen 5s und 7s)
  const duration = Math.random() * 2 + 5;
  // Apply animation directly via style - ensures it uses the dynamic duration
  drop.style.animation = `fall ${duration}s linear 1 forwards`;

  // Append to the passed container
  container.appendChild(drop);

  // Nach Ablauf der Animationszeit entfernen
  setTimeout(() => {
    // Check if rain is still globally active AND this specific container still exists AND contains the drop
    if (targetContainer && container && container.contains(drop)) {
      container.removeChild(drop);
    }
    // If rain was stopped (targetContainer is null), the drop was likely already removed by stopRain.
  }, duration * 1000); // Use the same duration
}

export function startRain(containerId) {
  // Stop any previous rain first
  stopRain();

  // Find the container element for this specific call
  const currentContainer = document.getElementById(containerId);
  if (!currentContainer) {
    console.error(`Rain container #${containerId} not found.`);
    return;
  }
  // Set the global reference as well
  targetContainer = currentContainer;

  // Ensure container is positioned correctly
  const style = window.getComputedStyle(currentContainer);
  if (style.position === "static") {
    console.warn(
      `Rain container #${containerId} should have a relative or absolute position.`
    );
    currentContainer.style.position = "relative"; // Set position if static
  }
  currentContainer.style.overflow = "hidden"; // Prevent drops overflowing

  // Start the interval, passing the specific container element to createRaindrop
  intervalId = setInterval(() => createRaindrop(currentContainer), 100);
}

export function stopRain() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  // Use the global targetContainer reference for cleanup
  const containerToRemoveFrom = targetContainer;
  targetContainer = null; // Reset global reference immediately

  if (containerToRemoveFrom) {
    const existingDrops = containerToRemoveFrom.querySelectorAll(".raindrop");
    // Iterate backwards when removing nodes to avoid issues with live NodeList
    for (let i = existingDrops.length - 1; i >= 0; i--) {
      const drop = existingDrops[i];
      if (containerToRemoveFrom.contains(drop)) {
        containerToRemoveFrom.removeChild(drop);
      }
    }
  }
}

// Definiere die @keyframes fall Animation global oder in deinem CSS
// Beispiel (füge dies zu deiner globalen CSS-Datei hinzu):
/*
@keyframes fall {
  to {
    transform: translateY(100vh); // Oder die Höhe des Containers
  }
}
*/
// Stelle sicher, dass die Klasse 'animate-fall' in deinem CSS existiert
// und die 'fall' Animation verwendet. Beispiel Tailwind Konfiguration:
/*
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fall: {
          'to': { transform: 'translateY(100vh)' }, // Anpassen an Containerhöhe falls nötig
        }
      },
      animation: {
        fall: 'fall linear 1 forwards', // Dauer wird inline gesetzt
      }
    }
  }
}
*/
