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
};

const clear = (): void => {
  display.textContent = "";
  firstNumberSet = 0;
  storedOperator = "";
};

/*
  Divides the displayed number by 10 and displays the value 
*/
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
  const button = event.currentTarget as HTMLDivElement;

  if (storedOperator === "" && button.innerHTML !== "-") {
    firstNumberSet = Number(display.textContent);
    display.textContent = "";
    storedOperator = button.innerHTML;

    /*
      In the instance that no number has been entered and 
      first number set is going to be a negative
    */
  } else if (showingCalculation === false && button.innerHTML === "-") {
    display.textContent = "-";

    /* in the instance that the first inputted number is a negative
       and a button has been pressed to make a calculation
    */
  } else if (showingCalculation !== false && Number(display.textContent) < 0) {
    firstNumberSet = Number(display.textContent);
    display.textContent = "";
    storedOperator = button.innerHTML;

    /* in the instance that the second inputted number is negative
     */
  } else if (firstNumberSet !== 0 && button.innerHTML === "-") {
    display.textContent = "-";
    /* in the instance a number has already been entered and the use of the mathmatical operator
    also performs a calculation
    */
  } else {
    secondNumberSet = Number(display.textContent);
    equals(storedOperator);
    storedOperator = button.innerHTML;
  }
};

/* is called either when the firstNumberSet contains a value and an arithmetic operator is 
   clicked, or when equals is clicked. 

   This function contains the core of the caluclating code.
*/

const equals = (passedOperator: string): void => {
  secondNumberSet = Number(display.textContent);
  switch (passedOperator) {
    case "÷":
      display.textContent = lengthOfNumberModifier(
        String(firstNumberSet / secondNumberSet)
      );
      firstNumberSet = firstNumberSet / secondNumberSet;
      storedOperator = "";
      secondNumberSet = 0;
      break;
    case "x":
      display.textContent = lengthOfNumberModifier(
        String(firstNumberSet * secondNumberSet)
      );
      firstNumberSet = Number(firstNumberSet * secondNumberSet);
      secondNumberSet = 0;
      storedOperator = "";
      break;
    case "-":
      display.textContent = lengthOfNumberModifier(
        String(firstNumberSet - secondNumberSet)
      );
      firstNumberSet = Number(firstNumberSet - secondNumberSet);
      storedOperator = "";
      secondNumberSet = 0;
      break;
    case "+":
      display.textContent = lengthOfNumberModifier(
        String(firstNumberSet + secondNumberSet)
      );
      firstNumberSet = Number(firstNumberSet + secondNumberSet);
      storedOperator = "";
      secondNumberSet = 0;
      break;
    case "=":
      switch (storedOperator) {
        case "/":
          display.textContent = lengthOfNumberModifier(
            String(firstNumberSet / secondNumberSet)
          );
          firstNumberSet = Number(firstNumberSet / secondNumberSet);
          storedOperator = "";
          secondNumberSet = 0;
          break;
        case "x":
          display.textContent = lengthOfNumberModifier(
            String(firstNumberSet * secondNumberSet)
          );
          firstNumberSet = Number(firstNumberSet * secondNumberSet);
          secondNumberSet = 0;
          storedOperator = "";
          break;
        case "-":
          display.textContent = lengthOfNumberModifier(
            String(firstNumberSet - secondNumberSet)
          );
          firstNumberSet = Number(firstNumberSet - secondNumberSet);
          storedOperator = "";
          secondNumberSet = 0;
          break;
        case "+":
          display.textContent = lengthOfNumberModifier(
            String(firstNumberSet + secondNumberSet)
          );
          firstNumberSet = Number(firstNumberSet + secondNumberSet);
          storedOperator = "";
          secondNumberSet = 0;
          break;
      }
      break;
  }
  showingCalculation = true;
};

/* function that ajudicates what should be 
   displayed on screen when a button is pressed
*/
const acceptNumber = (event: Event) => {
  const button = event.currentTarget as HTMLDivElement;

  if (!event.target) {
    throw new Error("button has no value");
  }

  /* if display is currently showing a calculated value rather than an inputted value or no value
   */
  if (showingCalculation === true) {
    display.textContent = String(button.innerHTML);
    showingCalculation = false;

    /* if display is showing zero 
      after calculation 
      initial input (times zero or decimal)
      or after use of plus minus when display is empty 
  */
  } else if (display.textContent === "0") {
    display.textContent = String(button.innerHTML);

    /* if the display should be showing a negative number 
     on input
  */
  } else if (
    storedOperator === "-" &&
    firstNumberSet === 0 &&
    display.textContent === ""
  ) {
    display.textContent = String(`-${button.innerHTML}`);

    /*
     */
  } else if (storedOperator === "-" && firstNumberSet === 0) {
    display.textContent += String(button.innerHTML);

    /* if the number is greater than 9 figures, 
     on initial input
  */
  } else {
    display.textContent += String(button.innerHTML);
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
