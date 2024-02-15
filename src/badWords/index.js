const badWords = require('./badWords.json')

module.exports = {
      /** 
*@desc Object of multi lang of bad words
*@return Boolean value. if array is empty return true
*/
     badWords(){
        return badWords
     }
}