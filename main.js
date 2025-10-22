let cookies = 0;
let cps = 0;
let cursors = 0;

const elCookies = document.getElementById("cookies");
const elCps = document.getElementById("cps");
const cookie = document.getElementById("cookie");
const buyCursor = document.getElementById("buyCursor");
const shopStatus = document.getElementById("shopStatus");

// Effet sonore de clic
const clickSound = new Audio('click-sound.mp3');  // Assurez-vous d'avoir ce fichier

// Charger sauvegarde
if (localStorage.getItem("cookies")) {
  cookies = parseInt(localStorage.getItem("cookies"));
  cursors = parseInt(localStorage.getItem("cursors") || 0);
  cps = parseFloat(localStorage.getItem("cps") || 0);
  updateStats();
}

// Mise à jour des statistiques
function updateStats() {
  elCookies.textContent = Math.floor(cookies);
  elCps.textContent = cps.toFixed(1);
  shopStatus.textContent = `${cursors} curseur(s) acheté(s)`;
}

// Gestion du clic sur le cookie
cookie.addEventListener("click", () => {
  cookies++;
  clickSound.play();
  cookies += cursors * 0.1;  // Gain automatique par curseur
  updateStats();
  saveData();

  // Animation du cookie
  cookie.style.transform = 'scale(1.2)';
  setTimeout(() => {
    cookie.style.transform = 'scale(1)';
  }, 100);
});

// Achat du curseur
buyCursor.addEventListener("click", () => {
  const price = 15;
  if (cookies >= price) {
    cookies -= price;
    cursors++;
    cps += 0.1;  // Chaque curseur ajoute 0.1 cookies/s
    updateStats();
    saveData();
  }
});

// Sauvegarde automatique
function saveData() {
  localStorage.setItem("cookies", cookies);
  localStorage.setItem("cursors", cursors);
  localStorage.setItem("cps", cps);
}

// Production automatique (par secondes)
setInterval(() => {
  cookies += cps / 10;
  updateStats();
  saveData();
}, 1000);