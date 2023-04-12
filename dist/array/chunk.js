"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.__chunk = void 0;
const __chunk = (array, size = 1) => {
    if (!Array.isArray(array) || !array.length)
        return [];
    let result = [];
    let index = 0;
    while (index < array.length) {
        result.push(array.slice(index, (index += size)));
    }
    return result;
};
exports.__chunk = __chunk;
//# sourceMappingURL=chunk.js.map