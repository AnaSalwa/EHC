const router = require('express').Router();
let Attendance = require('../models/attendance.model');

// CREATE a new attendance record
router.route('/add').post((req, res) => {
  const { userId, date, checkInTime, checkOutTime, location, status } = req.body;

  const newAttendance = new Attendance({
    userId,
    date,
    checkInTime,
    checkOutTime,
    location,
    status
  });

  newAttendance.save()
    .then(() => res.json('Attendance record added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// READ all attendance records
router.route('/').get((req, res) => {
  Attendance.find()
    .then(attendances => res.json(attendances))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE an attendance record by id
router.route('/update/:id').post((req, res) => {
  Attendance.findById(req.params.id)
    .then(attendance => {
      attendance.userId = req.body.userId;
      attendance.date = req.body.date;
      attendance.checkInTime = req.body.checkInTime;
      attendance.checkOutTime = req.body.checkOutTime;
      attendance.location = req.body.location;
      attendance.status = req.body.status;

      attendance.save()
        .then(() => res.json('Attendance record updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE an attendance record by id
router.route('/delete/:id').delete((req, res) => {
  Attendance.findByIdAndDelete(req.params.id)
    .then(() => res.json('Attendance record deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
