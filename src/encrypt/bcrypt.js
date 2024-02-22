const bcrypt = require("bcrypt");

module.exports.bcrypt = {
/** 
*@param data Data you want to encrypt
*@param salt 
*@return hashed string
*/
    hash: async(data ="", salt= 10)=>{
        return await bcrypt.hash(data, salt);
       
    },
/** 
*@param inputData 
*@param compareData 
*@return Boolean value
*/
    compare: async (inputData = "", compareData = "")=>{
    return await bcrypt.compare(inputData, compareData)

    }
}

