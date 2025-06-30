/**
 * Adds two numbers together
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
	return a + b;
}

/**
 * Subtracts second number from first number
 * @param a - First number
 * @param b - Second number
 * @returns The difference of a and b
 */
export function subtract(a: number, b: number): number {
	return a - b;
}

/**
 * Multiplies two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The product of a and b
 */
export function multiply(a: number, b: number): number {
	return a * b;
}

/**
 * Divides first number by second number
 * @param a - First number (dividend)
 * @param b - Second number (divisor)
 * @returns The quotient of a and b
 * @throws Error if divisor is zero
 */
export function divide(a: number, b: number): number {
	if (b === 0) {
		throw new Error('Division by zero is not allowed');
	}
	return a / b;
}
