let numContainer = document.getElementById("num");
let value = 0;
let btnAgg = document.querySelector(".aggiungi");
let btnSot = document.querySelector(".sottrai");
let btnReset = document.querySelector(".reset");
btnAgg.addEventListener("click", () => {
  value++;
  numContainer.textContent = value;
});
btnSot.addEventListener("click", () => {
  value--;
  numContainer.textContent = value;
});
btnReset.addEventListener("click", () => {
  value = 0;
  numContainer.textContent = value;
});

