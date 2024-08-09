const router = require('express').Router();
let Request = require('../models/request.model');

// CREATE a new request
router.route('/add').post((req, res) => {
  const { userId, type, startDate, endDate, reason, status, managerId } = req.body;

  const newRequest = new Request({
    userId,
    type,
    startDate,
    endDate,
    reason,
    status,
    managerId
  });

  newRequest.save()
    .then(() => res.json('Request added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// READ all requests
router.route('/').get((req, res) => {
  Request.find()
    .populate('userId', 'firstName lastName') // Optionnel : inclure les informations de l'utilisateur
    .populate('managerId', 'firstName lastName') // Optionnel : inclure les informations du manager
    .then(requests => res.json(requests))
    .catch(err => res.status(400).json('Error: ' + err));
});

// READ a request by ID
router.route('/:id').get((req, res) => {
  Request.findById(req.params.id)
    .populate('userId', 'firstName lastName') // Optionnel : inclure les informations de l'utilisateur
    .populate('managerId', 'firstName lastName') // Optionnel : inclure les informations du manager
    .then(request => res.json(request))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE a request by ID
router.route('/update/:id').post((req, res) => {
  Request.findById(req.params.id)
    .then(request => {
      request.userId = req.body.userId || request.userId;
      request.type = req.body.type || request.type;
      request.startDate = req.body.startDate || request.startDate;
      request.endDate = req.body.endDate || request.endDate;
      request.reason = req.body.reason || request.reason;
      request.status = req.body.status || request.status;
    //   request.managerId = req.body.managerId || request.managerId;
      request.updatedAt = Date.now();

      request.save()
        .then(() => res.json('Request updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE a request by ID
router.route('/delete/:id').delete((req, res) => {
  Request.findByIdAndDelete(req.params.id)
    .then(() => res.json('Request deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
