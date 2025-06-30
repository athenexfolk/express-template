/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The string with first letter capitalized
 */
export function capitalize(str: string): string {
	if (!str) return str;
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converts a string to camelCase
 * @param str - The string to convert
 * @returns The camelCase version of the string
 */
export function toCamelCase(str: string): string {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		})
		.replace(/[\s_-]+/g, '')
		.replace(/\s+/g, '');
}

/**
 * Converts a string to kebab-case
 * @param str - The string to convert
 * @returns The kebab-case version of the string
 */
export function toKebabCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
}

/**
 * Truncates a string to a specified length
 * @param str - The string to truncate
 * @param length - The maximum length
 * @param suffix - The suffix to add when truncated (default: '...')
 * @returns The truncated string
 */
export function truncate(str: string, length: number, suffix = '...'): string {
	if (str.length <= length) return str;
	return str.slice(0, length - suffix.length) + suffix;
}

/**
 * Checks if a string is a valid email address
 * @param email - The email string to validate
 * @returns True if valid email, false otherwise
 */
export function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

/**
 * Removes all whitespace from a string
 * @param str - The string to process
 * @returns The string without whitespace
 */
export function removeWhitespace(str: string): string {
	return str.replace(/\s/g, '');
}

/**
 * Counts the number of words in a string
 * @param str - The string to count words in
 * @returns The number of words
 */
export function wordCount(str: string): number {
	if (!str.trim()) return 0;
	return str.trim().split(/\s+/).length;
}
