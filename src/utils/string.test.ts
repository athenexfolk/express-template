import { describe, expect, it } from 'vitest';

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
		it('should capitalize first letter of lowercase string', () => {
			expect(capitalize('hello')).toBe('Hello');
		});

		it('should handle uppercase strings', () => {
			expect(capitalize('HELLO')).toBe('Hello');
		});

		it('should handle mixed case strings', () => {
			expect(capitalize('hELLo WoRLD')).toBe('Hello world');
		});

		it('should handle empty string', () => {
			expect(capitalize('')).toBe('');
		});

		it('should handle single character', () => {
			expect(capitalize('a')).toBe('A');
			expect(capitalize('A')).toBe('A');
		});
	});

	describe('toCamelCase function', () => {
		it('should convert space-separated words to camelCase', () => {
			expect(toCamelCase('hello world')).toBe('helloWorld');
		});

		it('should convert hyphenated words to camelCase', () => {
			expect(toCamelCase('hello-world-test')).toBe('helloWorldTest');
		});

		it('should handle multiple spaces', () => {
			expect(toCamelCase('hello   world')).toBe('helloWorld');
		});

		it('should handle single word', () => {
			expect(toCamelCase('hello')).toBe('hello');
		});

		it('should handle already camelCase string', () => {
			expect(toCamelCase('helloWorld')).toBe('helloWorld');
		});
	});

	describe('toKebabCase function', () => {
		it('should convert camelCase to kebab-case', () => {
			expect(toKebabCase('helloWorld')).toBe('hello-world');
		});

		it('should convert space-separated words to kebab-case', () => {
			expect(toKebabCase('hello world')).toBe('hello-world');
		});

		it('should convert PascalCase to kebab-case', () => {
			expect(toKebabCase('HelloWorldTest')).toBe('hello-world-test');
		});

		it('should handle underscores', () => {
			expect(toKebabCase('hello_world')).toBe('hello-world');
		});

		it('should handle mixed separators', () => {
			expect(toKebabCase('hello World_test')).toBe('hello-world-test');
		});
	});

	describe('truncate function', () => {
		it('should truncate long strings', () => {
			expect(truncate('This is a long string', 10)).toBe('This is...');
		});

		it('should not truncate short strings', () => {
			expect(truncate('Short', 10)).toBe('Short');
		});

		it('should use custom suffix', () => {
			expect(truncate('This is a long string', 10, '…')).toBe('This is a…');
		});

		it('should handle empty string', () => {
			expect(truncate('', 10)).toBe('');
		});

		it('should handle exact length', () => {
			expect(truncate('Hello', 5)).toBe('Hello');
		});
	});

	describe('isValidEmail function', () => {
		it('should validate correct email addresses', () => {
			expect(isValidEmail('test@example.com')).toBe(true);
			expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
			expect(isValidEmail('test+tag@example.org')).toBe(true);
		});

		it('should reject invalid email addresses', () => {
			expect(isValidEmail('invalid-email')).toBe(false);
			expect(isValidEmail('test@')).toBe(false);
			expect(isValidEmail('@example.com')).toBe(false);
			expect(isValidEmail('test@example')).toBe(false);
			expect(isValidEmail('test @example.com')).toBe(false);
		});

		it('should handle empty string', () => {
			expect(isValidEmail('')).toBe(false);
		});
	});

	describe('removeWhitespace function', () => {
		it('should remove all spaces', () => {
			expect(removeWhitespace('hello world')).toBe('helloworld');
		});

		it('should remove tabs and newlines', () => {
			expect(removeWhitespace('hello\tworld\n')).toBe('helloworld');
		});

		it('should handle string with no whitespace', () => {
			expect(removeWhitespace('helloworld')).toBe('helloworld');
		});

		it('should handle empty string', () => {
			expect(removeWhitespace('')).toBe('');
		});

		it('should handle string with only whitespace', () => {
			expect(removeWhitespace('   \t\n   ')).toBe('');
		});
	});

	describe('wordCount function', () => {
		it('should count words separated by spaces', () => {
			expect(wordCount('hello world')).toBe(2);
		});

		it('should handle multiple spaces', () => {
			expect(wordCount('hello   world   test')).toBe(3);
		});

		it('should handle single word', () => {
			expect(wordCount('hello')).toBe(1);
		});

		it('should handle empty string', () => {
			expect(wordCount('')).toBe(0);
		});

		it('should handle string with only whitespace', () => {
			expect(wordCount('   ')).toBe(0);
		});

		it('should handle tabs and newlines', () => {
			expect(wordCount('hello\tworld\ntest')).toBe(3);
		});
	});
});
