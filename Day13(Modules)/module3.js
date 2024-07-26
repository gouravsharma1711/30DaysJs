// Task 05
const pi = 3.14159;
const e = 2.71828;

// Functions
function circleArea(radius) {
    return pi * radius * radius;
}

function circleCircumference(radius) {
    return 2 * pi * radius;
}

// Exporting multiple constants and functions
export { pi, e, circleArea, circleCircumference };
