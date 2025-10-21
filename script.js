function calculate() {
  const age = Number(document.getElementById("age").value);
  let price;

  if (age <= 12) {
    price = 7;
  } else if (age <= 17) {
    price = 12;
  } else if (age <= 64) {
    price = 20;
  } else {
    price = 12;
  }

  document.getElementById("priceOutput").textContent = "$" + price;
}