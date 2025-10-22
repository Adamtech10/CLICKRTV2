let count = 0;
const countEl = document.getElementById("count");
const cookieBtn = document.getElementById("cookie");

cookieBtn.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});
