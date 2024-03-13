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

        +,-,/,* functions are all helf within the acceptOperator functions.

        percentage, plus/minus, decimal and clear are contained within their own functions.

        equal is also contained within it's own function and contains the majority of the core code for making calculations.

    NUMBER EVENT LISTENERS
        here you can find the code that listens for and applies the functionality that occurs when the numbers are pressed on the calculator.



    ERRORS
        X adding a decimal to a TOTHEPOWEROF value

        X using the percentage button when deaing with a TOTHEPOWEROF value

        X Negative numbers d

        X Display does not show zero when calculated number = 0

    Potential Errors
        X stored operator contains "=" when = is pressed when display is empty, to find this error press = when the display is empty.
