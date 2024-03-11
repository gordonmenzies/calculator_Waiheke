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
let secondNumberSet: number = 0;
let storedOperator: string = "";
let showingCalculation: boolean = false;

/*
  OPERATOR FUNCTIONS
*/
const plusMinus = (): void => {
  if (!display.textContent) {
    throw new Error("display is empty");
  }

  let displayContent: number = Number(display.textContent);
  // Catch possible Null Values
  if (display.textContent === "0") {
    display.textContent = "-0";
    console.log(display.textContent);
  } else if (displayContent > 0) {
    displayContent = 0 - displayContent;
    display.textContent = String(displayContent);
  } else if (displayContent < 0) {
    displayContent = Math.abs(displayContent);
    display.textContent = String(displayContent);
  } else {
    display.textContent = "0";
  }
};

const clear = (): void => {
  if (!display.textContent) {
    throw new Error("display is empty");
  }

  display.textContent = "";
  firstNumberSet = 0;
};

const percentage = (): void => {
  let displayNumber = Number(display.textContent);
  display.textContent = String(displayNumber / 10);
};

const decimal = (): void => {
  display.textContent += ".";
};

const acceptOperator = (event: Event): void => {
  if (!event.target) {
    throw new Error("button has no value");
  }

  if (storedOperator === "") {
    firstNumberSet = Number(display.textContent);
    display.textContent = "";
  } else {
    secondNumberSet = Number(display.textContent);
    equals(storedOperator);
  }

  storedOperator = event.target.textContent;

  console.log("firstNumberSet " + firstNumberSet);
  console.log("secondNumberSet " + secondNumberSet);
  console.log("stored Operator " + storedOperator);
};

const equals = (passedOperator: string): void => {
  let secondNumberset = Number(display.textContent);
  switch (passedOperator) {
    case "/":
      display.textContent = String(firstNumberSet / secondNumberset);
      firstNumberSet = Number(display.textContent);
      storedOperator = "";
      secondNumberSet = 0;
      break;
    case "X":
      display.textContent = String(firstNumberSet * secondNumberset);
      firstNumberSet = Number(display.textContent);
      secondNumberSet = 0;
      storedOperator = "";
      break;
    case "-":
      display.textContent = String(firstNumberSet - secondNumberset);
      firstNumberSet = Number(display.textContent);
      storedOperator = "";
      secondNumberSet = 0;
      break;
    case "+":
      display.textContent = String(firstNumberSet + secondNumberset);
      firstNumberSet = Number(display.textContent);
      storedOperator = "";
      secondNumberSet = 0;
      break;
    case "=":
      switch (storedOperator) {
        case "/":
          display.textContent = String(firstNumberSet / secondNumberset);
          firstNumberSet = Number(display.textContent);
          storedOperator = "";
          secondNumberSet = 0;
          break;
        case "X":
          display.textContent = String(firstNumberSet * secondNumberset);
          firstNumberSet = Number(display.textContent);
          secondNumberSet = 0;
          storedOperator = "";
          break;
        case "-":
          display.textContent = String(firstNumberSet - secondNumberset);
          firstNumberSet = Number(display.textContent);
          storedOperator = "";
          secondNumberSet = 0;
          break;
        case "+":
          display.textContent = String(firstNumberSet + secondNumberset);
          firstNumberSet = Number(display.textContent);
          storedOperator = "";
          secondNumberSet = 0;
          break;
      }
      break;
  }
  showingCalculation = true;
  console.log("showingCalculation");
};

/* function that ajudicates what should be 
   displayed on screen when a button is pressed
 */
const acceptNumber = (event: Event) => {
  if (!event.target) {
    throw new Error("button has no value");
  }
  if (showingCalculation === true) {
    display.textContent = String(event.target.textContent);
    showingCalculation = false;
  } else if (display.textContent === "0") {
    display.textContent = String(event.target.textContent);
  } else {
    display.textContent += String(event.target.textContent);
  }
};

/*
  NUMBER EVENT LISTENERS
*/
numbers.forEach((button) => {
  button.addEventListener("click", acceptNumber);
});

operators.forEach((button) => {
  switch (button.innerHTML) {
    case "/":
      button.addEventListener("click", acceptOperator);
      break;
    case "X":
      button.addEventListener("click", acceptOperator);
      break;
    case "-":
      button.addEventListener("click", acceptOperator);
      break;
    case "+":
      button.addEventListener("click", acceptOperator);
      break;
    case "C":
      button.addEventListener("click", clear);
      break;
    case "+/-":
      button.addEventListener("click", plusMinus);
      break;
    case "%":
      button.addEventListener("click", percentage);
      break;
    case "=":
      button.addEventListener("click", acceptOperator);
      break;
    case ".":
      button.addEventListener("click", decimal);
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
