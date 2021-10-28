window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentInputValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 20000, years: 5, rate: 5}
  const amountInput = document.getElementById("loan-amount");
  amountInput.value = values.amount;
  const yearsInput = document.getElementById("loan-years");
  yearsInput.value = values.years;
  const rateInput = document.getElementById("loan-rate");
  rateInput.value = values.rate;
  update();
}

 // Get the current values from the UI
// Update the monthly payment
function update() {
  const currentInputValues = getCurrentInputValues();
  updateMonthly(calculateMonthlyPayment(currentInputValues));
}



// let monthlyRate = 0;
// function currentMonthlyPayment() {
//   let n = document.getElementById("loan-years").value * 12;
//   let i = document.getElementById("loan-rate").value / 100 / 12;
//   let loanAmount = document.getElementById("loan-amount").value;
//   let monthlyRate = (loanAmount * i * (Math.pow((1 + i), n))) / (Math.pow((1 + i), n) - 1);
//   return monthlyRate;
// }



// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (i * values.amount) /
    (1 - Math.pow((1 + i), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyResult = document.getElementById("monthly-payment");
  monthlyResult.innerText = "$" + monthly;
}


// function calculateMonthlyPayment() {
//   monthlyRateRounded = monthlyRate.toFixed(2);
//   monthlyRateStr = monthlyRateRounded.toString();
//   return monthlyRateStr;
// }


