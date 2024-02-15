const ejs = require('ejs')
const mongoose = require('mongoose')
let Model
const { pagePagination } = require('../nav')

module.exports = async(req, res) => {
    const modelsName = mongoose.modelNames();

    if (req.query?.model) {
        Model = mongoose.model(req.query?.model);
        
    }
    switch (req.query?.type) {
        case 'edit':
            Model.findOneAndUpdate(
                req.body?.search,
                req.body.update,
                { new: true }
            ).then((data)=>{
                ejs.renderFile('./views/index.ejs', { modelsName, data }, options, function (err, str) {
                    res.send(str)
                });
            }).catch((err)=>{
                console.log(err)
                ejs.renderFile('./views/index.ejs', { modelsName, data: {}, err }, options, function (err, str) {
                    res.send(str)
                });
            })
            break;
        case 'delete':

        Model.findOneAndDelete(
            req.body.search,
            { new: true }
        ).then((data)=>{
            ejs.renderFile('./views/index.ejs', { modelsName, data }, options, function (err, str) {
                res.send(str)
            });
        }).catch((err)=>{
            console.log(err)
            ejs.renderFile('./views/index.ejs', { modelsName, data: {}, err }, options, function (err, str) {
                res.send(str)
            });
        })

            break;
        case 'find':
            Model.findOne(
                req.body?.search,
                { new: true }
            ).skip(pagePagination(req.query?.page, req.query?.item)).limit(req.query?.item).then((data)=>{
                ejs.renderFile('./views/index.ejs', { modelsName, data }, options, function (err, str) {
                    res.send(str)
                });
            }).catch((err)=>{
                console.log(err)
                ejs.renderFile('./views/index.ejs', { modelsName, data: {}, err }, options, function (err, str) {
                    res.send(str)
                });
            })
            break;

        default:
            ejs.renderFile('./views/index.ejs', { modelsName }, options, function (err, str) {
                res.send(str)
            });
            break;
    }

    

}