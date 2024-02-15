const ejs = require('ejs')
const mongoose = require('mongoose')



module.exports = (req, res)=>{
    const modelsName = mongoose.modelNames();
    ejs.renderFile('./views/index.ejs', { modelsName, }, options, function(err, str){
        // str => Rendered HTML string
    });

}