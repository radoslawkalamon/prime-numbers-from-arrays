/**
 * Get all prime numbers occuring in two arrays, sorted in ascending order
 * @param {Array} _array1
 * @param {Array} _array2
 * @return {Array}
 */
var Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays = function(_array1, _array2) {
  var _that = this;
  var _Array_Numbers_Occuring_In_Two_Arrays = [];
  var _Array_Prime_Numbers_Occuring_in_Two_Arrays = [];

  _that.helpers = {
    check: {
      /**
       * Check if Array contains only numbers
       * @param {Array} _array
       * @return {boolean}
       */
      array_contains_only_numbers: function(_array) {
        // Check _array for NOT number elements
        try {
          _array.forEach(function(element) {
            if (typeof element !== 'number') throw new Error();
          });
        } catch (error) {
          return false;
        }
      },
      /**
       * Check if _number is prime number
       * @param {number} _number
       * @return {boolean}
       */
      is_prime_numbers: function(_number) {
        // Check if _number is prime number
        for (var i = 2; i < _number; i++) {
          if (_number % i === 0) {
            return false;
          }
        }
        return true;
      },
    },
    create: {
      /**
       * Create array of numbers occuring in two arrays
       * @param {Array} _array1
       * @param {Array} _array2
       * @return {Array}
       */
      array_of_numbers_occuring_in_two_arrays: function(_array1, _array2) {
        var temp_array = [];

        // Check if elements from _array1 occuring in _array2 and not occuring in temp_array
        _array1.forEach(function(element) {
          if (_array2.indexOf(element) > -1 && temp_array.indexOf(element) === -1) {
            // If is, add to temp_array
            temp_array.push(element);
          }
        });
        return temp_array;
      },
      /**
       * Create Array of prime numbers occuring in array
       *
       * @param {Array} _array
       * @return {Array}
       */
      array_of_prime_numbers_occuring_in_array: function(_array) {
        var temp_array = [];

        // Check which element from _array is prime numbers
        _array.forEach(function(element) {
          if (_that.helpers.check.is_prime_numbers(element) === true) {
            // If is, add to temp_array
            temp_array.push(element);
          }
        });
        return temp_array;
      },
    },
    sort: {
      /**
       * Helper function to SORT function (ASC)
       * @param {number} a
       * @param {number} b
       * @return {number}
       */
      ascending: function(a, b) {
        return a - b;
      },
    },
  };

  // Check how many arguments has been passed
  if (arguments.length === 0) throw new Error('No arguments passed! You need to pass two Arrays to this function!');
  if (arguments.length === 1) throw new Error('Only one argument passed! You need to pass two Arrays to this function!');
  if (arguments.length > 2) throw new Error('Too much arguments passed! You need to pass two Arrays to this function!');

  // Check if Arrays are Arrays
  if (Array.isArray(_array1) === false) throw new Error('First argument is not an Array!');
  if (Array.isArray(_array2) === false) throw new Error('Second argument is not an Array!');

  // Check if Arrays are not empty
  if (_array1.length === 0) throw new Error('First Array is empty!');
  if (_array2.length === 0) throw new Error('Second Array is empty!');

  // Check if Arrays contains only numbers
  if (_that.helpers.check.array_contains_only_numbers(_array1) === false) throw new Error('First Array does not contains only numbers!');
  if (_that.helpers.check.array_contains_only_numbers(_array2) === false) throw new Error('Second Array does not contains only numbers!');

  // Create Array with numbers occuring in two passed arrays
  _Array_Numbers_Occuring_In_Two_Arrays = _that.helpers.create.array_of_numbers_occuring_in_two_arrays(_array1, _array2);

  // Create Array with prime numbers occuring in array from previous line of code
  _Array_Prime_Numbers_Occuring_in_Two_Arrays = _that.helpers.create.array_of_prime_numbers_occuring_in_array(_Array_Numbers_Occuring_In_Two_Arrays);

  // Return Array with prime numbers sorted ascending
  return _Array_Prime_Numbers_Occuring_in_Two_Arrays.sort(_that.helpers.sort.ascending);
};

module.exports = {
  Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays: Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays,
};
