const customerModel = require('../model/customerModel');


module.exports = {

    addCustomer:function(req,res, next){
        //console.log('title',req.body.first_name)
        
            var  title = req.body.title;
            var first_name =  req.body.first_name;
            var last_name =  req.body.last_name;
            var email =  req.body.email;
            var password =  req.body.password;
            var address =  req.body.address;
            var company =  req.body.company;
            var addressc =  req.body.addressc;
            var city =  req.body.city;
            var state =  req.body.state;
            var gender =  req.body.gender;
            var phone =  req.body.phone;

            
        

        customerModel.subCustomer( title,first_name,last_name,email,password,address,company,addressc,city,state,gender,phone, function(err){
            res.redirect('/');
        })



    },

    
    Customer: function (req, res) {
        customerModel.Customerlist(function (data) {
            res.render('admin/customerView', {layout:'admin', customers: data })
        })
    },

}