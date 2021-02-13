var express = require('express')
var session = require('express-session');
var router = express.Router();


var calendar = require('../controller/calendarController') 


router.get('/', function (req, res, next) {
    res.send('Paul is Here')
});



router.post('/save-event', calendar.addEvent);
router.post('/update-event', calendar.updateEvent);
router.get('/getuserById/', calendar.getEventById);


module.exports = router;