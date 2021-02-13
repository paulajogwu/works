const adminModel = require('../model/adminModel');
var path = require('path')
var formidable = require('formidable');
var fs = require('fs')


module.exports = {

    addproduct: function (req, res,next) {
        var form = new formidable.IncomingForm();

        form.parse(req,function (err, fields, files) {
            var oldpath = files.upload.path;
            var newpaths = './public/uploads/' + files.upload.name;
            var newpath = '../uploads/' + files.upload.name;
            
            fs.rename(oldpath, newpaths, function (err) {
                if (err) throw err;               
            });

            var title = fields.title;
            var category = fields.category;
            var currency = fields.currency;
            var description = fields.description;
            var price = fields.price;
            var quantity = fields.quantity;
            var d = new Date().toDateString();
           
            adminModel.insertproduct(title,category,currency,quantity,price,description,newpath,d,function (data) {
                res.redirect('/');
    
            })
           
        });
      


    },




    Category: function (req, res) {
        var inputData = {
            name_c: req.body.name
        };
        if (inputData < 0) {
            return res.redirect('/');
        }

        else {
            adminModel.addCategory(inputData, function (data) {
                res.redirect('/admin');
                //console.log(data.affectedRows + " record created");
            });
        }
    },

    categoryForm: function (req, res) {
        adminModel.categoryz(function (datac) {
            //console.log(data)
            res.render('admin/addproduct', { layout: 'admin', cat: datac })
        })
    }, 


    productView: function (req, res) {
        adminModel.productlist (function (data) {
            res.render('admin/productView', {layout:'admin', products: data })
        })
    }, 


    selectUpdate: function (req, res) {
        var id = req.param('id');     
        adminModel.productById(id,function (data) {
            adminModel.categoryz(function (datac) {
                console.log({cat:datac})
            res.render('admin/productUpdate', {layout:'admin', products:data , cat:datac })
        })

        })
    },




    
    updateproduct: function (req, res,next) {
        var form = new formidable.IncomingForm();

        form.parse(req,function (err, fields, files) {
            var oldpath = files.upload.path;
            var newpaths = './public/uploads/' + files.upload.name;
            var newpath = '../uploads/' + files.upload.name;
            
            fs.rename(oldpath, newpaths, function (err) {
                if (err) throw err;               
            });

            var title = fields.title;
            var category = fields.category;
            var currency = fields.currency;
            var description = fields.description;
            var price = fields.price;
            var quantity = fields.quantity;
            var d = new Date().toDateString();
           
            adminModel.insertproduct(title,category,currency,quantity,price,description,newpath,d,function (data) {
                res.redirect('/');
    
            })
           
        });
      


    },
   


}

