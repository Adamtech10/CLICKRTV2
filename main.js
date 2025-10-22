let cookies = 0;
let perClick = 1;
let perSecond = 0;
let cursors = 0;
let grandmas = 0;

// Élément HTML
const elCookies = document.getElementById("cookies");
const elPerClick = document.getElementById("perClick");
const elPerSecond = document.getElementById("perSecond");
const elCookie = document.getElementById("cookie");
const elCursorCount = document.getElementById("cursorCount");
const elGrandmaCount = document.getElementById("grandmaCount");

// Mettre à jour l'affichage
function render() {
  elCookies.textContent = Math.floor(cookies);
  elPerClick.textContent = perClick;
  elPerSecond.textContent = perSecond.toFixed(1);
  elCursorCount.textContent = cursors;
  elGrandmaCount.textContent = grandmas;
}

// Fonction de clic sur le cookie
elCookie.addEventListener("click", () => {
  cookies += perClick;
  render();
});

// Acheter un curseur
document.getElementById("buyCursor").addEventListener("click", () => {
  if (cookies >= 15) {
    cookies -= 15;
    cursors++;
    perSecond += 0.1; // Chaque curseur produit 0.1 cookie par seconde
    render();
  }
});

// Acheter une mamie
document.getElementById("buyGrandma").addEventListener("click", () => {
  if (cookies >= 100) {
    cookies -= 100;
    grandmas++;
    perSecond += 1; // Chaque mamie produit 1 cookie par seconde
    render();
  }
});

// Production automatique (toutes les secondes)
setInterval(() => {
  cookies += perSecond;
  render();
}, 1000);

render(); // Initialiser l'affichage
