var db = require('../database');


module.exports = {

    insertEvent: function (title, start, end, reminder, note,  callback) {
        var sql = "INSERT INTO `events` (title, start, end, reminder, note) VALUES('" + title + "', '" + start + "', '" + end + "', '" + reminder+ "', '" + note + "')";
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
    
        })
      },

      updateEvent: function (title, start, end, reminder, note,  callback) {
        var sql = "UPDATE events SET  (title, start, end, reminder, note) VALUES('" + title + "', '" + start + "', '" + end + "', '" + reminder+ "', '" + note + "')";
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        })
      },

      findById: function (id,callback) {
        var sql = 'SELECT * FROM events WHERE id = ?';
        db.query(sql,id, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
      EventView: function (id,callback) {
        var sql = 'SELECT * FROM events WHERE id = ?';
        db.query(sql,id, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
}