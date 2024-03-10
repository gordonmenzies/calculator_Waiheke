import "./style.scss";

/*
 BUTTON AND DISPLAY SELECTORS
 */

const display = document.querySelector<HTMLParagraphElement>(
  ".calculator__displayContent"
);
const numbers = document.querySelectorAll<HTMLDivElement>(".number");
const operators = document.querySelectorAll<HTMLDivElement>(".operator");

/*
  NULL CHECK DISPLAY VALIDATOR
*/
if (!display) {
  throw new Error("display is null");
}

/*
  GLOBAL VALUES
*/

let firstNumberSet: number = 0;
let mathmaticalOperatorsApplyEquals: boolean = false;
let storedOperator = "";

/*
  OPERATOR FUNCTIONS
*/
const plusMinus = (): void => {
  let displayNumber: number = 0;

  // Catch possible Null Values
  if (!display.textContent) {
    display.textContent = "-";
  }
  // primary functionality
  else if (displayNumber > 0) {
    displayNumber = 0 - displayNumber;
  } else {
    displayNumber = Math.abs(displayNumber);
  }
  console.log(displayNumber);
  display.textContent = String(displayNumber);
};

const plus = (): void => {
  // store firstNumberSet
  // reset display to empty
  // activate equals
  firstNumberSet = Number(display.textContent);
  display.textContent = "";
  mathmaticalOperatorsApplyEquals = true;
  storedOperator = "+";

  console.log("firstNumberSet " + firstNumberSet);
  console.log(
    "mathmatialOperatorsApplyEquals " + mathmaticalOperatorsApplyEquals
  );
};

const equals = (): void => {
  let secondNumberset = Number(display.textContent);
  switch (storedOperator) {
    case "/":
      // button.addEventListener("click", acceptButton);
      break;
    case "X":
      // button.addEventListener("click", acceptButton);
      break;
    case "-":
      // button.addEventListener("click", acceptButton);
      break;
    case "+":
      display.textContent = String(firstNumberSet + secondNumberset);
      break;
    case "C":
      // button.addEventListener("click", acceptButton);
      break;
    case "+/-":
      // button.addEventListener("click", plusMinus);
      break;
    case "%":
      // button.addEventListener("click", acceptButton);
      break;
    case "=":
      // button.addEventListener("click", equals);
      break;
  }
};

console.log(numbers);
console.log(operators);

// function is called when a number is pressed, the function adds
// the value of the button to the display.
const acceptButton = (event: Event) => {
  if (!event.target) {
    throw new Error("button has no value");
  }
  console.log(event.target.textContent);
  display.textContent += String(event.target.textContent);
};

// apply the accept button functionality to all of the number buttons
numbers.forEach((button) => {
  button.addEventListener("click", acceptButton);
});

// operators.forEach((button) => {
//   button.addEventListener("click", acceptButton);
// });

operators.forEach((button) => {
  switch (button.innerHTML) {
    case "/":
      button.addEventListener("click", acceptButton);
      break;
    case "X":
      button.addEventListener("click", acceptButton);
      break;
    case "-":
      button.addEventListener("click", acceptButton);
      break;
    case "+":
      button.addEventListener("click", plus);
      break;
    case "C":
      button.addEventListener("click", acceptButton);
      break;
    case "+/-":
      button.addEventListener("click", plusMinus);
      break;
    case "%":
      button.addEventListener("click", acceptButton);
      break;
    case "=":
      button.addEventListener("click", equals);
      break;
  }
});

// PSEUDO CODE FUNCTIONALITY
// BUTTON PRESS +/-
// BUTTON PRESS DECIMAL
// BUTTON PRESS FIRSTNUMBERSET DISPLAY

// BUTTON PRESS STORE OPERATOR STORE FIRST NUMBER
// BUTTON PRESS OPERATOR CHANGE OPERATOR TO NEW OPERATOR
// BUTTON PRESS SECONDNUMBERSET DISPLAY
// BUTTON PRESS CANCEL

// BUTTON PRESS +/-
// BUTTON PRESS PERCENTAGE (/10)
// BUTTON PRESS EQUALS GET RESULT
