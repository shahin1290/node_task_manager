const express = require('express')
require('./db/mongoose')
const userRouer = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
app.use(express.json())
app.use(userRouer)
app.use(taskRouter)


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})
