import {
	capitalize,
	isValidEmail,
	removeWhitespace,
	toCamelCase,
	toKebabCase,
	truncate,
	wordCount,
} from './string';

describe('String utilities', () => {
	describe('capitalize function', () => {
		test('should capitalize first letter of lowercase string', () => {
			expect(capitalize('hello')).toBe('Hello');
		});

		test('should handle uppercase strings', () => {
			expect(capitalize('HELLO')).toBe('Hello');
		});

		test('should handle mixed case strings', () => {
			expect(capitalize('hELLo WoRLD')).toBe('Hello world');
		});

		test('should handle empty string', () => {
			expect(capitalize('')).toBe('');
		});

		test('should handle single character', () => {
			expect(capitalize('a')).toBe('A');
			expect(capitalize('A')).toBe('A');
		});
	});

	describe('toCamelCase function', () => {
		test('should convert space-separated words to camelCase', () => {
			expect(toCamelCase('hello world')).toBe('helloWorld');
		});

		test('should convert hyphenated words to camelCase', () => {
			expect(toCamelCase('hello-world-test')).toBe('helloWorldTest');
		});

		test('should handle multiple spaces', () => {
			expect(toCamelCase('hello   world')).toBe('helloWorld');
		});

		test('should handle single word', () => {
			expect(toCamelCase('hello')).toBe('hello');
		});

		test('should handle already camelCase string', () => {
			expect(toCamelCase('helloWorld')).toBe('helloWorld');
		});
	});

	describe('toKebabCase function', () => {
		test('should convert camelCase to kebab-case', () => {
			expect(toKebabCase('helloWorld')).toBe('hello-world');
		});

		test('should convert space-separated words to kebab-case', () => {
			expect(toKebabCase('hello world')).toBe('hello-world');
		});

		test('should convert PascalCase to kebab-case', () => {
			expect(toKebabCase('HelloWorldTest')).toBe('hello-world-test');
		});

		test('should handle underscores', () => {
			expect(toKebabCase('hello_world')).toBe('hello-world');
		});

		test('should handle mixed separators', () => {
			expect(toKebabCase('hello World_test')).toBe('hello-world-test');
		});
	});

	describe('truncate function', () => {
		test('should truncate long strings', () => {
			expect(truncate('This is a long string', 10)).toBe('This is...');
		});

		test('should not truncate short strings', () => {
			expect(truncate('Short', 10)).toBe('Short');
		});

		test('should use custom suffix', () => {
			expect(truncate('This is a long string', 10, '…')).toBe('This is a…');
		});

		test('should handle empty string', () => {
			expect(truncate('', 10)).toBe('');
		});

		test('should handle exact length', () => {
			expect(truncate('Hello', 5)).toBe('Hello');
		});
	});

	describe('isValidEmail function', () => {
		test('should validate correct email addresses', () => {
			expect(isValidEmail('test@example.com')).toBe(true);
			expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
			expect(isValidEmail('test+tag@example.org')).toBe(true);
		});

		test('should reject invalid email addresses', () => {
			expect(isValidEmail('invalid-email')).toBe(false);
			expect(isValidEmail('test@')).toBe(false);
			expect(isValidEmail('@example.com')).toBe(false);
			expect(isValidEmail('test@example')).toBe(false);
			expect(isValidEmail('test @example.com')).toBe(false);
		});

		test('should handle empty string', () => {
			expect(isValidEmail('')).toBe(false);
		});
	});

	describe('removeWhitespace function', () => {
		test('should remove all spaces', () => {
			expect(removeWhitespace('hello world')).toBe('helloworld');
		});

		test('should remove tabs and newlines', () => {
			expect(removeWhitespace('hello\tworld\n')).toBe('helloworld');
		});

		test('should handle string with no whitespace', () => {
			expect(removeWhitespace('helloworld')).toBe('helloworld');
		});

		test('should handle empty string', () => {
			expect(removeWhitespace('')).toBe('');
		});

		test('should handle string with only whitespace', () => {
			expect(removeWhitespace('   \t\n   ')).toBe('');
		});
	});

	describe('wordCount function', () => {
		test('should count words separated by spaces', () => {
			expect(wordCount('hello world')).toBe(2);
		});

		test('should handle multiple spaces', () => {
			expect(wordCount('hello   world   test')).toBe(3);
		});

		test('should handle single word', () => {
			expect(wordCount('hello')).toBe(1);
		});

		test('should handle empty string', () => {
			expect(wordCount('')).toBe(0);
		});

		test('should handle string with only whitespace', () => {
			expect(wordCount('   ')).toBe(0);
		});

		test('should handle tabs and newlines', () => {
			expect(wordCount('hello\tworld\ntest')).toBe(3);
		});
	});
});
