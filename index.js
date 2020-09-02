function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency",
  });
  return formatter.format(value);
}

let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");

function switchCurrency() {
  let newFromCurrency = toCurrency.value;
  let newToCurrency = fromCurrency.value;

  fromCurrency.value = newFromCurrency;
  toCurrency.value = newToCurrency;
}

function convert() {
  let amount = document.getElementById("amount").value;

  let result;

  let exRate = {
    VND: 1,
    USD: 23185.02,
    EUR: 27748.29,
    AUD: 17118.33,
    MYR: 5592.84,
    GBP: 31100.85,
    SGD: 17068.55,
  };

  if (toCurrency.value === "VND") {
    result = amount * exRate[fromCurrency.value];
    let newResult = formatCurrency(toCurrency.value, result);
    result = newResult;
    let formatAmount = formatCurrency(fromCurrency.value, amount);
    document.getElementById(
      "showResult"
    ).innerHTML = `${formatAmount} ${fromCurrency.value} is ${result} ${toCurrency.value}`;
  } else if (fromCurrency.value === "VND") {
    result = amount / exRate[toCurrency.value];
    let newResult = formatCurrency(toCurrency.value, result);
    result = newResult;
    let formatAmount = formatCurrency(fromCurrency.value, amount);
    document.getElementById(
      "showResult"
    ).innerHTML = `${formatAmount} ${fromCurrency.value} is ${result} ${toCurrency.value}`;
  } else {
    result = amount * (exRate[fromCurrency.value] / exRate[toCurrency.value]);
    let newResult = formatCurrency(toCurrency.value, result);
    result = newResult;
    let formatAmount = formatCurrency(fromCurrency.value, amount);
    document.getElementById(
      "showResult"
    ).innerHTML = `${formatAmount} ${fromCurrency.value} is ${result} ${toCurrency.value}`;
  }
}
