function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency",
  });
  return formatter.format(value);
}

let exRate = {
  USD: 23240,
  EUR: 27695,
  AUD: 17091,
  MYR: 5580,
  GBP: 30915,
  SGD: 17077,
};

let amount = prompt("How much money you want exchange?");
let fromCurrency;
let toCurrency;

let value = isNaN(amount);

if (value == true) {
  alert("Please input number only");
} else {
  fromCurrency = prompt("from what currency").toUpperCase();
  toCurrency = prompt("to what currency").toUpperCase();

  if (toCurrency === "VND") {
    result = amount * exRate[fromCurrency];
    let newResult = formatCurrency(toCurrency, result);
    result = newResult;
  } else if (fromCurrency === "VND") {
    result = amount / exRate[toCurrency];
    let newResult = formatCurrency(toCurrency, result);
    result = newResult;
  } else {
    result = amount * (exRate[fromCurrency] / exRate[toCurrency]);
    let newResult = formatCurrency(toCurrency, result);
    result = newResult;
  }
}

console.log(amount, fromCurrency, "is", result, toCurrency);
