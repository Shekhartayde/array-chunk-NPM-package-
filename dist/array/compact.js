"use strict";
/**
 * Create an array with all faley values removed.
 * The value 'false', 'null', '0' , "" , 'undefined' , 'NaN' are falsey.
 * @param {Array} array The array to compact.
 * @return {Array} Returns the new array of filtered values.
 * @example
 * __compact([1,2,undefined,4,false,0,5,NaN])
 * // => [1,2,4,5]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.__compact = void 0;
const __compact = (array) => {
    return array.filter((item) => !!item);
};
exports.__compact = __compact;
//# sourceMappingURL=compact.js.map