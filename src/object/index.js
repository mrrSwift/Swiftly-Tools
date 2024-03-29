
module.exports.object = {
  /** 
  *@description Check obj and if obj is empty return true
  *@param {Object} obj 
  *@return Boolean value. if obj is empty return true
  */
  objectIsEmpty(obj) {
    //If it's not an array, return FALSE.
    if (!Object.isFrozen(obj)) {
      return false;
    } if (Object.keys(obj).length === 0) {
      //Return TRUE if the array is empty
      return true;
    }
    //Otherwise, return FALSE.
    return false;
  },
  /**
 * 
 * @param {Object} obj 
 * @param {Object} defaults 
 * @returns Merged object
 */
  merge(obj = {}, defaults) {
    for (const key in defaults) {
      if (typeof obj[key] === 'undefined') {
        obj[key] = defaults[key];
      }
    }
    return obj;
  },
}