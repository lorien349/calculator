// Program variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let isFirstNumber = true;


// DOM nodes
const btnContainer = document.querySelector("#btn-container");


// Functions
function getDigit(btn) {
    switch(isFirstNumber) {
        case true:
            switch(btn.getAttribute("id")) {
                case "dot-btn":
                    firstNumber += ".";
                    break;
                case "n0-btn":
                    firstNumber += "0";
                    break;
                case "n1-btn":
                    firstNumber += "1";
                    break;
                case "n2-btn":
                    firstNumber += "2";
                    break;
                case "n3-btn":
                    firstNumber += "3";
                    break;
                case "n4-btn":
                    firstNumber += "4";
                    break;
                case "n5-btn":
                    firstNumber += "5";
                    break;
                case "n6-btn":
                    firstNumber += "6";
                    break;
                case "n7-btn":
                    firstNumber += "7";
                    break;
                case "n8-btn":
                    firstNumber += "8";
                    break;
                case "n9-btn":
                    firstNumber += "9";
                    break;
            }
            break;
        case false:
            switch(btn.getAttribute("id")) {
                case "dot-btn":
                    secondNumber += ".";
                    break;
                case "n0-btn":
                    secondNumber += "0";
                    break;
                case "n1-btn":
                    secondNumber += "1";
                    break;
                case "n2-btn":
                    secondNumber += "2";
                    break;
                case "n3-btn":
                    secondNumber += "3";
                    break;
                case "n4-btn":
                    secondNumber += "4";
                    break;
                case "n5-btn":
                    secondNumber += "5";
                    break;
                case "n6-btn":
                    secondNumber += "6";
                    break;
                case "n7-btn":
                    secondNumber += "7";
                    break;
                case "n8-btn":
                    secondNumber += "8";
                    break;
                case "n9-btn":
                    secondNumber += "9";
                    break;
            }
            break;
    }
    console.log(firstNumber);
    console.log(secondNumber);
};

function getOperator(btn) {
    switch(btn.getAttribute("id")) {
        case "addition-btn":
            operator = "addition";
            isFirstNumber = false;
            break;
        case "substraction-btn":
            operator = "substraction";
            isFirstNumber = false;
            break;
        case "product-btn":
            operator = "product";
            isFirstNumber = false;
            break;
        case "division-btn":
            operator = "division";
            isFirstNumber = false;
            break;
    }
    console.log(operator);
};


// Event listeners
btnContainer.addEventListener("click", (event) => {
    switch(event.target.getAttribute("class")) {
        case "btn number-btn":
            getDigit(event.target);
            break;
        case "btn operator-btn":
            getOperator(event.target);
            break;
    }
});