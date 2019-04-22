const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

// const me = new User({
//   name: 'Shahin',
//   password: 'pass123',
//   email: 'shahin@gamil.com'
// })

// me.save()
//   .then((me) => {
//     console.log(me)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

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