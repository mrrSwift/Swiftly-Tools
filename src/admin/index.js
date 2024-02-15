const ejs = require('ejs')
const mongoose = require('mongoose')
let Model


module.exports = async(req, res) => {
    const modelsName = mongoose.modelNames();

    if (req.query?.model) {
        Model = mongoose.model(req.query?.model);
        
    }
    switch (req.query?.type) {
        case 'edit':
            Model.findOneAndUpdate(
                req.body.search,
                req.body.update,
                { new: true }
            ).then((data)=>{
                ejs.renderFile('./views/index.ejs', { modelsName, data }, options, function (err, str) {
                    // str => Rendered HTML string
                });
            }).catch((err)=>{
                console.log(err)
                ejs.renderFile('./views/index.ejs', { modelsName, data: {}, err }, options, function (err, str) {
                    // str => Rendered HTML string
                });
            })
            break;
        case 'delete':

        Model.findOneAndDelete(
            req.body.search,
            { new: true }
        ).then((data)=>{
            ejs.renderFile('./views/index.ejs', { modelsName, data }, options, function (err, str) {
                // str => Rendered HTML string
            });
        }).catch((err)=>{
            console.log(err)
            ejs.renderFile('./views/index.ejs', { modelsName, data: {}, err }, options, function (err, str) {
                // str => Rendered HTML string
            });
        })

            break;
        case 'find':
            Model.findOne(
                req.body.search,
                { new: true }
            ).then((data)=>{
                ejs.renderFile('./views/index.ejs', { modelsName, data }, options, function (err, str) {
                    // str => Rendered HTML string
                });
            }).catch((err)=>{
                console.log(err)
                ejs.renderFile('./views/index.ejs', { modelsName, data: {}, err }, options, function (err, str) {
                    // str => Rendered HTML string
                });
            })
            break;

        default:
            ejs.renderFile('./views/index.ejs', { modelsName }, options, function (err, str) {
                // str => Rendered HTML string
            });
            break;
    }

    

}