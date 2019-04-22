const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Please provide valid email')
      }
    }

  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value){
      if(value.includes('password')){
        throw new Error('Password contains password')
      }
    }
  }
})

module.exports = User
