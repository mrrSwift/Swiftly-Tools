
  module.exports.array = {
    arrayIsEmpty (array) {
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
    }
  }