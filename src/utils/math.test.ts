import { add, divide, multiply, subtract } from './math';

describe('Math utilities', () => {
	describe('add function', () => {
		test('should add two positive numbers correctly', () => {
			expect(add(2, 3)).toBe(5);
		});

		test('should add positive and negative numbers correctly', () => {
			expect(add(5, -3)).toBe(2);
		});

		test('should add two negative numbers correctly', () => {
			expect(add(-2, -3)).toBe(-5);
		});

		test('should handle zero correctly', () => {
			expect(add(0, 5)).toBe(5);
			expect(add(5, 0)).toBe(5);
			expect(add(0, 0)).toBe(0);
		});

		test('should handle decimal numbers correctly', () => {
			expect(add(1.5, 2.5)).toBe(4);
			expect(add(0.1, 0.2)).toBeCloseTo(0.3);
		});
	});

	describe('subtract function', () => {
		test('should subtract two positive numbers correctly', () => {
			expect(subtract(5, 3)).toBe(2);
		});

		test('should handle negative results', () => {
			expect(subtract(3, 5)).toBe(-2);
		});

		test('should handle zero correctly', () => {
			expect(subtract(5, 0)).toBe(5);
			expect(subtract(0, 5)).toBe(-5);
		});
	});

	describe('multiply function', () => {
		test('should multiply two positive numbers correctly', () => {
			expect(multiply(3, 4)).toBe(12);
		});

		test('should handle multiplication by zero', () => {
			expect(multiply(5, 0)).toBe(0);
			expect(multiply(0, 5)).toBe(0);
		});

		test('should handle negative numbers', () => {
			expect(multiply(-3, 4)).toBe(-12);
			expect(multiply(-3, -4)).toBe(12);
		});
	});

	describe('divide function', () => {
		test('should divide two positive numbers correctly', () => {
			expect(divide(10, 2)).toBe(5);
		});

		test('should handle decimal results', () => {
			expect(divide(10, 3)).toBeCloseTo(3.333333);
		});

		test('should throw error when dividing by zero', () => {
			expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
		});

		test('should handle negative numbers', () => {
			expect(divide(-10, 2)).toBe(-5);
			expect(divide(10, -2)).toBe(-5);
			expect(divide(-10, -2)).toBe(5);
		});
	});
});
