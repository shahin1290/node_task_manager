const { MongoClient } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  db.collection('users').insertOne({
    name: 'Andrew',
    age: 27
  })

  db.collection('tasks').insertMany([
    {
      description: 'Clean the house',
      completed: true
    },{
      description: 'Renew inspection',
      completed: false
    }
    ], (error, result) => {
      if (error) {
        return console.log('Unable to insert tasks!')
      }
      console.log(result.ops)
    })
})