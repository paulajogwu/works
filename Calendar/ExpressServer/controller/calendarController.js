var calendarModel = require('../model/calendarModel');


module.exports = {
    addEvent: function (req, res,next) {
        var title =  req.body.title;
        var start= req.body.start;
        var end =  req.body.end;
        var reminder= req.body.reminder;
        var note= req.body.note;
        calendarModel.insertEvent(title, start, end, reminder, note,function (data) {
            res.send(data);

        });
   
    },

    updateEvent: function (req, res,next) {
        var id = req.param('id');
        var title =  req.body.title;
        var start= req.body.start;
        var end =  req.body.end;
        var reminder= req.body.reminder;
        var note= req.body.note;
        calendarModel.updateEvent(title, start, end, reminder, note,id,function (data) {
            res.send(data);

        });
   
    },

    getEventById: function (req, res) {
        var id = req.param('id');
        usermodel.findById(id,function (data) {
            res.send({ user: data })
        })
    },
}