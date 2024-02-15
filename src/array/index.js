
module.exports.array = {
  /** 
*@description Check Array and if array is empty return true
*@param array 
*@return Boolean value. if array is empty return true
*/
  arrayIsEmpty(array = []) {
    //If it's not an array, return FALSE.
    if (!Array.isArray(array)) {
      return false;
    }
    //If it is an array, check its length property
    if (array.length == 0) {
      //Return TRUE if the array is empty
      return true;
    }
    //Otherwise, return FALSE.
    return false;
  },
    /** 
*@description Sort array with bubble sort algo
*@param array 
*@return Swapped array
*/
  bubbleSort(originalArray) {

    // Flag that holds info about whether the swap has occur or not.
    let swapped = false;
    // Clone original array to prevent its modification.
    const array = [...originalArray];

    for (let i = 1; i < array.length; i += 1) {
      swapped = false;

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      for (let j = 0; j < array.length - i; j += 1) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[j]);

        // Swap elements if they are in wrong order.
        if (this.comparator.lessThan(array[j + 1], array[j])) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];

          // Register the swap.
          swapped = true;
        }
      }

      // If there were no swaps then array is already sorted and there is
      // no need to proceed.
      if (!swapped) {
        return array;
      }
    }

    return array;

  }
}