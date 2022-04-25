const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: String,
      },
      roll_number: {
          type: String,
          required: true,
          unique: true
      },
      date: {
        type: Date,
        default: Date.now,
      },
      isAdmin: {
          type: Boolean,
          required: true,
          default: false
      }
})

module.exports = User = mongoose.model('User', UserSchema)