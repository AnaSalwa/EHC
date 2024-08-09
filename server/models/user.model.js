const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
      },
      message: props => `${props.value} n'est pas un email valide!`
    }
  },
  role: {
    type: String,
    enum: ['employee', 'manager', 'admin'],
    required: true
  },
  department: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true // inclut `createdAt` et `updatedAt`
});

const User = mongoose.model('User', userSchema);

module.exports = User;
