// Get the display element (textarea)
const display = document.getElementsByClassName('display')[0];

// Get all the button elements inside .buttons
const buttons = document.querySelectorAll('.buttons button');

// Clear the display on page load
display.value = "";

// Function to show result in the display
const resultDisplay = (result) => {
    display.value = result;
}

// Clear all input
const clear = () => {
    display.value = "";
}

// Remove the last character
const backspace = () => {
    display.value = display.value.slice(0, -1);
}

// Evaluate and clean the expression
const calculate = () => {
    try {
        let expression = display.value;

        // Remove newlines
        expression = expression.replace(/\n/g, '');

        // Replace 'x' with '*' for JavaScript to understand multiplication
        expression = expression.replace(/x/g, '*');

        // Replace multiple operators with the last one (like ++-- becomes -)
        expression = expression.replace(/([+\-*/]){2,}/g, match => match.slice(-1));

        // Remove trailing operator
        expression = expression.replace(/[+\-*/]+$/, '');

        // If empty, show 0
        if (expression.trim() === '') {
            resultDisplay("0");
            return;
        }

        // Evaluate expression
        const result = eval(expression);
        resultDisplay(result);
    } catch (error) {
        resultDisplay("Error"); // Show error if something goes wrong
    }
}

// Handle all button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === "ሁሉንም አጥፋ") {
            clear(); // Clear button
        } else if (value === "ሰርዝ" || value === "D") {
            backspace(); // Backspace/delete
        } else if (value === "=") {
            calculate(); // Calculate result
        } else if (["+", "-", "x", "/"].includes(value)) {
            // Add operator on new line with spacing
            display.value += `\n${value}\n`;
        } else {
            // Add numbers or decimal
            display.value += value;
        }

        // Always scroll to bottom so user sees latest input
        display.scrollTop = display.scrollHeight;
    });
});
