const express = require('express')
const Task = require('../models/task')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/tasks', async(req, res) => {
  const tasks = await Task.find({})

  try {
    res.send(tasks)
  } catch (error) {
    res.status(500).send()
  }

})

router.get('/tasks/:id', auth, async(req, res) => {
  const _id = req.params.id

  try {
    const task = await Task.findOne({_id, owner: req.user._id})
    if(!task){
      return res.status(404).send()
    }
    res.send(task)
  } catch (error) {
    res.status(500).send()
  }

})

router.post('/tasks', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id
  })

  try {
    await task.save()
    res.status(201).send(task)
  } catch (error) {
    res.status(400).send(e)
  }
})

router.patch('/tasks/:id', async(req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ["description", "completed"]
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if(!isValidOperation){
    return res.status(400).send({ error: 'Invalid updates!'})
  }
  
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if(!task){
      return res.status(404).send()
    }
    res.send(task)
  } catch (error) {
    res.status(400).send(error)
  }

})

router.delete('/tasks/:id', async(req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task){
      return res.status(404).send()
    }
    res.send(task)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
