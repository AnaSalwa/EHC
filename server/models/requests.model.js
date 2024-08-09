const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Référence à la collection users
    required: true
  },
  type: {
    type: String,
    enum: ['congé', 'absence', 'télétravail'],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['en attente', 'approuvé', 'rejeté'],
    default: 'en attente',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }

//   ,
//   managerId: {
//     type: Schema.Types.ObjectId,
//     ref: 'User' // Référence à la collection users
//   }
}, {
  timestamps: true // inclut `createdAt` et `updatedAt`
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
