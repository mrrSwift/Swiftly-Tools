// /// Password
const bcrypt = require("bcrypt");


module.exports.bcrypt = {
    hash: async(password, salt)=>{
        return await bcrypt.hash(password, salt);
       
    },
    compare: async (inputPussword, comparePasword)=>{
    return await bcrypt.compare(inputPussword, comparePasword)

    }
}

