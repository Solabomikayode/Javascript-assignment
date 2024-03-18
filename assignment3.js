function solveQuadratic(a, b, c) {
    // Calculate the discriminant
    const discriminant = b * b - 4 * a * c;

    // Check if the discriminant is negative (no real roots)
    if (discriminant < 0) {
        return "No real roots";
    }

    // Calculate the roots
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    return [root1, root2];
}

// Coefficients of the quadratic equation: 3x^2 + 9x + 23 = 0
const a = 3;
const b = 9;
const c = 23;

// Solve the quadratic equation
const roots = solveQuadratic(a, b, c);

// Display the roots
console.log("Roots of the quadratic equation:", roots);
