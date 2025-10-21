function calculate() {
  const age = Number(document.getElementById("age").value);
  let price;

  if (age <= 12) {
    price = 7;
  } else if (age <= 17) {
    price = 312;
  } else if (age <= 64) {
    price = 20;
  } else {
    price = 312;
  }

  document.getElementById("priceOutput").textContent = "$" + price;
}