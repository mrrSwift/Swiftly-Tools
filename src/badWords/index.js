const badWords = require('./badWords.json')

module.exports = {
      /** 
*@description Object of multi lang of bad words
*@return Boolean value. if array is empty return true
*/
     badWords(){
        return badWords
     }
}