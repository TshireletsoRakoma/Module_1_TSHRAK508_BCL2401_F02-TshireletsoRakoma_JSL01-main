
function validateSyntax() {
    // Get the input element by its ID
    const petInput = document.getElementById('petInput');
    
    // Get the trimmed value of the input
    const input = petInput.value.trim();
    
    // Declare a variable to hold the result
    let result;

    // Define a regular expression to check for valid syntax
    const isValidSyntax = /^pet_\d+[a-zA-Z]+$/.test(input);

    // Determine the result based on the validity of the syntax
    result = isValidSyntax ? 'Valid Syntax🟢' : 'Invalid Syntax🔴';

    // Get the result element by its ID
    const resultElement = document.getElementById('result');
    
    // Set the text content of the result element based on the validation result
    resultElement.innerText = result;
}

//Explanation of each part:

//function validateSyntax() { ... }: This declares a function named validateSyntax which will be called when you want to validate the syntax of the input.

//const petInput = document.getElementById('petInput');: This retrieves the input element with the ID 'petInput' from the HTML document.

//const input = petInput.value.trim();: This gets the value of the input element and trims any leading or trailing whitespace.

//let result;: This declares a variable result which will hold the validation result.

//const isValidSyntax = /^pet_\d+[a-zA-Z]+$/.test(input);: This line uses a regular expression (/^pet_\d+[a-zA-Z]+$/) to test whether the input matches the specified pattern. The pattern checks for strings that start with "pet_", followed by one or more digits (\d+), and ending with one or more alphabetic characters ([a-zA-Z]+). The test() method returns true if the input matches the pattern, indicating valid syntax.

//result = isValidSyntax ? 'Valid Syntax🟢' : 'Invalid Syntax🔴';: This line sets the result variable based on whether the syntax is valid (isValidSyntax is true) or not. If the syntax is valid, the result is set to 'Valid Syntax🟢', otherwise, it's set to 'Invalid Syntax🔴'.

//const resultElement = document.getElementById('result');: This retrieves the result element from the HTML document using its ID 'result'.

// resultElement.innerText = result;: This sets the text content of the result element to the value stored in the result variable, which reflects the validation result.

