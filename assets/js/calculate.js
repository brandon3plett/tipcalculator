let subTotal = document.getElementById("subtotal-input");
let customTip = document.getElementById("custom-tip-input");
let calculateBtn = document.getElementById("calculate-btn");
let calculatedTip = document.getElementById("calculated-tip");
let totalAndTip = document.getElementById("total-and-tip");
let dropdown = document.querySelector(".dropdown");

const calculatePercentage = (subtotal, percentage) => {
    let totalWithTip = subtotal * percentage;
    //console.log(parseFloat(totalWithTip.toFixed(2)));
    calculatedTip.textContent = parseFloat(totalWithTip).toFixed(2);
}

calculateBtn.onclick = () => {
    //console.log(dropdown.value);
    if (!isNaN(subTotal.value) && subTotal.value != "") {
        //console.log(subTotal.value + dropdown.value);
        let subTotalParse = parseFloat(subTotal.value);
        let dropdownParse = parseFloat(dropdown.value);
        calculatePercentage(subTotalParse, dropdownParse);
        //console.log(subTotalParse + parseFloat(calculatedTip.textContent));
        totalAndTip.textContent = (subTotalParse + parseFloat(calculatedTip.textContent)).toFixed(2);
    }
}