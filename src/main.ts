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
//let negative: boolean = true;

/*
  function that modifies the displayed value to ensure when the 
  result of calculations is over a certain length the number is 
  displayed to the power of 10
*/
const lengthOfNumberModifier = (number: string): string => {
  if (number.length > 8) {
    const powerOf = number.length - 4 + 1;
    number = `${number[0]}${number[1]}${number[2]}`;
    return `${number}e${powerOf}`;
  } else if (number.length > 11) {
    return `no. 2 lrg`;
  } else {
    return number;
  }
};

/*
  OPERATOR FUNCTIONS
*/
const plusMinus = (): void => {
  let displayContent: number = Number(display.textContent);
  // Catch possible Null Values
  if (display.textContent === "0") {
    display.textContent = "-";
  } else if (displayContent > 0) {
    displayContent = 0 - displayContent;
    display.textContent = String(displayContent);
  } else if (displayContent < 0) {
    displayContent = Math.abs(displayContent);
    display.textContent = String(displayContent);
  } else {
    display.textContent = "0";
  }

  console.log("firstNumberSet " + firstNumberSet);
  console.log("secondNumberSet " + secondNumberSet);
  console.log("stored operator " + storedOperator);
  console.log("display " + display.textContent);
  console.log("justchecking");
};

const clear = (): void => {
  display.textContent = "";
  firstNumberSet = 0;
  storedOperator = "";
  console.log("firstNumberSet " + firstNumberSet);
  console.log("secondNumberSet " + secondNumberSet);
  console.log("stored operator " + storedOperator);
  console.log("display " + display.textContent);
};

const percentage = (): void => {
  let displayNumber = Number(display.textContent);
  display.textContent = String(displayNumber / 10);
};

/*
  adds decimal to display
*/
const decimal = (): void => {
  if (display.textContent?.includes(".")) {
    return;
  } else {
    display.textContent += ".";
  }
};

/* reads the value of the button and determines the method to be performed 
      set first number set
      set second number set and calculate 
   
   stores the mathmatical function operator
*/
const acceptOperator = (event: Event): void => {
  if (!event.target) {
    throw new Error("button has no value");
  }

  /* determines whether or not an equals operation is due to be performed 
   or not 
  */
  if (storedOperator === "" && event.target.textContent !== "-") {
    firstNumberSet = Number(display.textContent);
    display.textContent = "";
    storedOperator = event.target.textContent;
    console.log("standard operation");

    /*
      In the instance that no number has been entered and 
      first number set is going to be a negative
    */
  } else if (showingCalculation === false && event.target.textContent === "-") {
    display.textContent = "-";
    console.log("negative first value being inputted ");

    /* in the instance that the first inputted number is a negative
       and a button has been pressed to make a calculation
    */
  } else if (showingCalculation !== false && Number(display.textContent) < 0) {
    firstNumberSet = Number(display.textContent);
    display.textContent = "";
    storedOperator = event.target.textContent;
    console.log("negative first input reached");

    /* in the instance that the second inputted number is negative
     */
  } else if (firstNumberSet !== 0 && event.target.textContent === "-") {
    display.textContent = "-";
    console.log("second input negative reached");
    /* in the instance a number has already been entered and the use of the mathmatical operator
    also performs a calculation
    */
  } else {
    secondNumberSet = Number(display.textContent);
    console.log("accept operator else statement reached");
    console.log("showing calculation =" + showingCalculation);
    console.log("event.target.textContent =" + event.target.textContent);
    equals(storedOperator);
    storedOperator = event.target.textContent;
  }

  console.log("firstNumberSet " + firstNumberSet);
  console.log("secondNumberSet " + secondNumberSet);
  console.log("stored Operator " + storedOperator);
};

/* is called either when the firstNumberSet contains a value and an arithmetic operator is 
   clicked, or when equals is clicked. 

   This function contains the core of the caluclating code.
*/

const equals = (passedOperator: string): void => {
  let secondNumberset = Number(display.textContent);
  switch (passedOperator) {
    case "÷":
      display.textContent = lengthOfNumberModifier(
        String(firstNumberSet / secondNumberset)
      );
      firstNumberSet = firstNumberSet / secondNumberset;
      storedOperator = "";
      secondNumberSet = 0;
      console.log("firstNumberSet " + firstNumberSet);
      console.log("secondNumberSet " + secondNumberSet);
      console.log("stored operator " + storedOperator);
      console.log("display " + display.textContent);
      break;
    case "x":
      display.textContent = lengthOfNumberModifier(
        String(firstNumberSet * secondNumberset)
      );
      firstNumberSet = Number(firstNumberSet * secondNumberset);
      secondNumberSet = 0;
      storedOperator = "";
      console.log("firstNumberSet " + firstNumberSet);
      console.log("secondNumberSet " + secondNumberSet);
      console.log("stored operator " + storedOperator);
      console.log("display " + display.textContent);
      break;
    case "-":
      display.textContent = lengthOfNumberModifier(
        String(firstNumberSet - secondNumberset)
      );
      firstNumberSet = Number(firstNumberSet - secondNumberset);
      storedOperator = "";
      secondNumberSet = 0;
      console.log("firstNumberSet " + firstNumberSet);
      console.log("secondNumberSet " + secondNumberSet);
      console.log("stored operator " + storedOperator);
      console.log("display " + display.textContent);
      break;
    case "+":
      console.log("reached");
      display.textContent = lengthOfNumberModifier(
        String(firstNumberSet + secondNumberset)
      );
      firstNumberSet = Number(firstNumberSet + secondNumberset);
      storedOperator = "";
      secondNumberSet = 0;
      console.log("firstNumberSet " + firstNumberSet);
      console.log("secondNumberSet " + secondNumberSet);
      console.log("stored operator " + storedOperator);
      console.log("display " + display.textContent);
      break;
    case "=":
      switch (storedOperator) {
        case "/":
          display.textContent = lengthOfNumberModifier(
            String(firstNumberSet / secondNumberset)
          );
          firstNumberSet = Number(firstNumberSet / secondNumberset);
          storedOperator = "";
          secondNumberSet = 0;
          break;
        case "x":
          display.textContent = lengthOfNumberModifier(
            String(firstNumberSet * secondNumberset)
          );
          firstNumberSet = Number(firstNumberSet * secondNumberset);
          secondNumberSet = 0;
          storedOperator = "";
          break;
        case "-":
          display.textContent = lengthOfNumberModifier(
            String(firstNumberSet - secondNumberset)
          );
          firstNumberSet = Number(firstNumberSet - secondNumberset);
          storedOperator = "";
          secondNumberSet = 0;
          break;
        case "+":
          display.textContent = lengthOfNumberModifier(
            String(firstNumberSet + secondNumberset)
          );
          firstNumberSet = Number(firstNumberSet + secondNumberset);
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

  /* if display is currently showing a calculated value rather than an inputted value or no value
   */
  if (showingCalculation === true) {
    display.textContent = String(event.target.textContent);
    showingCalculation = false;

    /* if display is showing zero 
      after calculation 
      initial input (times zero or decimal)
      or after use of plus minus when display is empty 
  */
  } else if (display.textContent === "0") {
    display.textContent = String(event.target.textContent);

    /* if the display should be showing a negative number 
     on input
  */
  } else if (
    storedOperator === "-" &&
    firstNumberSet === 0 &&
    display.textContent === ""
  ) {
    display.textContent = String(`-${event.target.textContent}`);

    /*
     */
  } else if (storedOperator === "-" && firstNumberSet === 0) {
    display.textContent += String(event.target.textContent);

    /* if the number is greater than 9 figures, 
     on initial input
  */
  } else if (display.textContent.length > 8) {
    return;
  } else {
    display.textContent += String(event.target.textContent);
  }

  console.log("firstNumberSet " + firstNumberSet);
  console.log("secondNumberSet " + secondNumberSet);
  console.log("stored operator " + storedOperator);
  console.log("display " + display.textContent);
};

/*
  NUMBER EVENT LISTENERS
*/
numbers.forEach((button) => {
  button.addEventListener("click", acceptNumber);
});

operators.forEach((button) => {
  switch (button.innerHTML) {
    case "÷":
      button.addEventListener("click", acceptOperator);
      break;
    case "x":
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
