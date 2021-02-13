var db = require('../database');

module.exports = {


  findById: function (id,callback) {
        var sql = 'SELECT * FROM products WHERE id = ?';
        db.query(sql,id, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

    index: function (callback) {
        var sql = 'SELECT * FROM products ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

      
    ads: function (callback) {
        var sql = 'SELECT * FROM products ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
    

                         ////BY CATEGORIES

                         
    Electronics: function (callback) {
        var sql = 'SELECT * FROM products WHERE category = electronics ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

      
    Cloths: function (callback) {
        var sql = 'SELECT * FROM products WHERE category = cloths ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

      
    Food: function (callback) {
        var sql = 'SELECT * FROM products WHERE category = Food ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
      
    Beauty: function (callback) {
        var sql = 'SELECT * FROM products WHERE category = beauty ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
      
    Sports: function (callback) {
        var sql = 'SELECT * FROM products  ORDER BY id DESC ';//WHERE category = sports
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },


      
    Laptop: function (callback) {
        var sql = 'SELECT * FROM products WHERE category = laptop ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

      
    Phones: function (callback) {
        var sql = 'SELECT * FROM products WHERE category = phone ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
}