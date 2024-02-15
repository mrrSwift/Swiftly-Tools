
  module.exports.object = {
/** 
*@description Check obj and if obj is empty return true
*@param obj 
*@return Boolean value. if obj is empty return true
*/
    objectIsEmpty (obj = new Object(null))  {
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