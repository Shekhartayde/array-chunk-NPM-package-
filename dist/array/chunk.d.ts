/**
 * Creates an array of elements split into groups the length of size.
 * If an array can't be split evenly, the final chunk will be shorter.
 * @param {Array} array The array to process.
 * @param {number} size The size of each chunk.
 * @returns {Array} Returns the new array of chunks.
 * @example
 * Array.chunk(['1', '2', '3', '4', '5'], 2) =>
 * 		[[1, 2], [3, 4], [5]]
 */
declare const __chunk: (array: any[], size?: number) => any[];
export { __chunk };
