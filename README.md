# calculator_Waiheke

This calculator is built to emulate the functionality of the portrait calculator on the iphone in both look and functionality.

It is built using packages and extensions from

- VITE
- SASSY SCSS
- HTML 5
- CSS 3
- TYPESCRIPT

The script for the functionality for the calculator can be located in './src/main.ts'

The styling for the look of the calculator can
be located in './src/style.scss'

The content for the build of the calculator that pulls all elements together can be located in 'index.html'

MAIN.TS
The code can be broken up into three sections.
BUTTON AND DISPLAY SELECTORS
here you can find the DOM accessing elements of the code with access the calculator display, as well as numbers and mathmatical operation buttons.

    GLOBAL VALUES
        here you can find the elements that are globally accessible and are accessed by a range of functions, they include
            firstNumberSet - number
            secondNumberSet - number
            storedOperator - string
            showingCalculation - boolean

    OPERATOR FUNCTIONS
        here you can find the code that facilitates the mathmatical functions that are enacted by the mathmatical operator buttons.

        +,-,/,* functions are all helf within the acceptOperator functions

        percentage, plus/minus, equals and clear are contained within their own functions.

        decimal

    NUMBER EVENT LISTENERS
        here you can find the code that listens for and applies the functionality that occurs when the numbers are pressed on the calculator.



    POTENTIAL ERRORS
        X stored operator contains "=" when = is pressed when display is empty, to find this error press = when the display is empty.

        X adding a decimal to a TOTHEPOWEROF value

        X using the percentage button when deaing with a TOTHEPOWEROF value

    Potential Fixes




    Fixed Issues
        multiple decimal places - check decimal code

        consider the different eventualities of having negative
            - specifically i have created a condition on line 101 where if a stored operator exists
            and negative is selected then the upcoming number to be inputted becomes negative.

            however the new challenge is that the stored operator can not easily switch from any other operator to negative
            due to this condition.

        what happens when a number is calculated that is over 9 figures?
