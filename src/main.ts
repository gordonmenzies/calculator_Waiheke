import "./style.scss";

// const cancel = document.querySelector("#cancel");
// //const ______
// const percentage = document.querySelector<HTMLDivElement>("#percentage");
// const divide = document.querySelector<HTMLDivElement>("#divide");
// const seven = document.querySelector<HTMLDivElement>("#seven");
// const eight = document.querySelector<HTMLDivElement>("#eight");
// const nine = document.querySelector<HTMLDivElement>("#nine");
// const multiply = document.querySelector<HTMLDivElement>("#multiply");
// const four = document.querySelector<HTMLDivElement>("#four");
// const five = document.querySelector<HTMLDivElement>("#five");
// const six = document.querySelector<HTMLDivElement>("#six");
// const minus = document.querySelector<HTMLDivElement>("#minus");
// const one = document.querySelector<HTMLDivElement>("#one");
// const two = document.querySelector<HTMLDivElement>("#two");
// const three = document.querySelector<HTMLDivElement>("#three");
// const plus = document.querySelector<HTMLDivElement>("#plus");
// const zeroButton = document.querySelector<HTMLDivElement>("#zeroButton");
// const decimal = document.querySelector<HTMLDivElement>("#decimal");
// const equal = document.querySelector<HTMLDivElement>("#equal");

// if (
//   //   !cancel ||
//   //   !percentage ||
//   //   !divide ||
//   //   !seven ||
//   //   !eight ||
//   //   !nine ||
//   //   !multiply ||
//   //   !four ||
//   //   !five ||
//   //   !six ||
//   //   !minus ||
//   //   !one ||
//   //   !two ||
//   //   !three ||
//   //   !plus ||
//   //   !zeroButton ||
//   //   !decimal ||
//   //   !equal
//   // ) {
//   //   throw new Error("item was null");
//   // }

const display = document.querySelector<HTMLParagraphElement>(
  ".calculator__displayContent"
);

const numbers = document.querySelectorAll<HTMLDivElement>(".number");

const operators = document.querySelectorAll<HTMLDivElement>(".operator");

if (!display) {
  throw new Error("display is null");
}

// functionality for plus minus button
const plusMinus = (): void => {
  let displayNumber: number = 0;

  // Catch possible Null Values
  if (!display.textContent) {
    display.textContent = "-";
  } else {
    displayNumber = parseFloat(display.textContent);
  }

  // primary functionality
  if (displayNumber > 0) {
    displayNumber = 0 - displayNumber;
  } else {
    displayNumber = Math.abs(displayNumber);
  }
  console.log(displayNumber);
  display.textContent = String(displayNumber);
};

console.log(numbers);
console.log(operators);

const acceptButton = (event: Event) => {
  if (!event.target) {
    throw new Error("button has no value");
  }
  console.log(event.target.textContent);
  display.textContent += String(event.target.textContent);
};

//
// Write a function that takes in the value of the node that calls it
//

numbers.forEach((button) => {
  button.addEventListener("click", acceptButton);
});

//numbers[0].addEventListener("click", acceptButton);

//operators[1].addEventListener("click", plusMinus);

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
