
  module.exports.object = {
    objectIsEmpty (obj)  {
      //If it's not an array, return FALSE.
      if (!Object.isFrozen(obj)) {
        return false;
      } if (Object.keys(obj).length === 0) {
        //Return TRUE if the array is empty
        return true;
      }
      //Otherwise, return FALSE.
      return false;
    }
  }