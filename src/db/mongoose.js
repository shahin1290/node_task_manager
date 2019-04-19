const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})


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

const me = new User({
  name: 'Shahin',
  password: 'pass123',
  email: 'shahin@gamil.com'
})

me.save()
  .then((me) => {
    console.log(me)
  })
  .catch((error) => {
    console.log(error)
  })

// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//     required: true,
//     trim:true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   }
// })

// const task = new Task({
//   description: ' go fo running     ',
//   completed: true
// })

// task.save()
//   .then((task) => {
//     console.log(task)
//   })
//   .catch((error) => {
//     console.log(error)
//   })