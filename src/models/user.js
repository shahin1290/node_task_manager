const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function (next) {
  const user = this
  
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
