// get submit button
var MysubmitBtn = document.getElementById("loan-form");
MysubmitBtn.addEventListener("submit", calculateResult);

// calculate the resu;t
function calculateResult(e) {
    e.preventDefault();

    // get the id input field
    const Loanamount = document.getElementById("amount");
    const Loaninterest = document.getElementById("interest");
    const Loanyears = document.getElementById("years");

    // result field get id

    const montlypayment = document.getElementById("monthly-payment");
    const totalpayment = document.getElementById("total-payment");
    const totalinterest = document.getElementById("total-interest");


    // get the input value
    const amountvalue = parseFloat(Loanamount.value);
    const interestvalueCalculate = parseFloat(Loaninterest.value) / 100 / 12;
    const yearsvalueCalculate = parseFloat(Loanyears.value) * 12;

    // calculate the montly payment

    const calcaulateMontly = Math.pow(1 + interestvalueCalculate, yearsvalueCalculate);
    const montly = (amountvalue * calcaulateMontly * interestvalueCalculate) / (calcaulateMontly - 1);

    if (isFinite(montly)) {
        montlypayment.value = montly.toFixed(2);
        totalpayment.value = (montly * yearsvalueCalculate).toFixed(2);
        totalinterest.value = ((montly * yearsvalueCalculate) - amountvalue).toFixed(2);
    } else {
        showError(" Please Insert A Correct Number");
    }
}

// error message show
function showError(message) {
    // create a div
    const errorDiv = document.createElement('div');

    // get element
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
    // add clases
    errorDiv.className = 'alert alert-danger';
    // create text node append to div
    errorDiv.appendChild(document.createTextNode(message));
    // insert error message
    card.insertBefore(errorDiv, heading);

    // clear error message
    setTimeout(clearMessage, 2000);
}
// clear error message
function clearMessage() {
    document.querySelector('.alert').remove();
}