//Variables
let subTotal = document.getElementById("subtotal-input")
let customTip = document.getElementById("custom-tip-input")
let calculateBtn = document.getElementById("calculate-btn")
let calculatedTip = document.getElementById("calculated-tip")
let grandTotal = document.getElementById("grand-total")
let dropDown = document.getElementById("percentage-dropdown")


//Function to calculate the sub-total amount and multipy it with the chosen percentage
calculatePercentage = (subtotal, percentage) => {
    //Take the product of the subtotal and the chosen percentage and store in a variable
    let tipValue = Number(subtotal) * Number(percentage)
    //Take the variable tipValue and write to the DOM
    calculatedTip.textContent = tipValue.toFixed(2)
    //Take the total of the subtotal value and the tipValue and write to the DOM
    grandTotal.textContent = (Number(subTotal.value) + Number(tipValue)).toFixed(2)
}

//Function to calculate subtotal plus custom tip
calculateCustomTip = (subtotal, customNum) => {
    //Take the total of the subtotal and the custom number and store in a variable
    let tipValue = Number(subtotal) + Number(customNum)
    //Take the custom number and write it to the DOM
    calculatedTip.textContent = Number(customNum).toFixed(2)
    //Take the total of the subtotal value and the custom number and write to the DOM
    grandTotal.textContent = (Number(subTotal.value) + Number(customNum)).toFixed(2)
}

//Function that determines what happens upon Calculate button click
calculateBtn.onclick = () => {
    //If there's a value in the sub-total input field...
    if (Number(subTotal.value) && subTotal.value !== "") {
        //If there's a percentage selected AND a custom tip value input...
        if (dropDown.value && Number(customTip.value) && customTip.value !== "") {
            //console.log("Too many enteries.")
            return false
            //Else if only there's a percentage selected...
        } else if (dropDown.value) {
            calculatePercentage(subTotal.value, dropDown.value)
            //Else if there's only a custom tip value...
        } else if (Number(customTip.value) && customTip.value !== "") {
            calculateCustomTip(subTotal.value, customTip.value)
            //Else...
        } else {
            //console.log("Nope.  This won't do.")
            return false
        }
        //Else...
    } else {
        //console.log("Nope.  This won't do.")
        return false
    }
}