let subTotal = document.getElementById("subtotal-input");
let customTip = document.getElementById("custom-tip-input");
let calculateBtn = document.getElementById("calculate-btn");
let calculatedTip = document.getElementById("calculated-tip");
let totalAndTip = document.getElementById("total-and-tip");
let dropdown = document.querySelector(".dropdown");

const calculatePercentage = (subtotal, percentage) => {
    let totalWithTip = subtotal * percentage;
    calculatedTip.textContent = parseFloat(totalWithTip).toFixed(2);
}

calculateBtn.onclick = () => {
    if(dropdown.value == "") {
        return false
    }

    if (!isNaN(subTotal.value) && subTotal.value !== "") {
        let subTotalParse = parseFloat(subTotal.value);
        let dropdownParse = parseFloat(dropdown.value);
        calculatePercentage(subTotalParse, dropdownParse);
        totalAndTip.textContent = (subTotalParse + parseFloat(calculatedTip.textContent)).toFixed(2);
    }
}
