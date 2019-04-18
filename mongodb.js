const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'kona',
  //   age: 31
  //   }) 
  //   .then((result) => {
  //    console.log(result)
  //   })
  

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Clean the house',
  //     completed: true
  //   },{
  //     description: 'Renew inspection',
  //     completed: false
  //   }
  //   ], (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert tasks!')
  //     }
  //     console.log(result.ops)
  //   }
  // )

  // db.collection('users').updateOne({
  //   _id: new ObjectID('5cae421e3f5d3a775deca223')
  // }, {
  //   $set: {
  //     name: 'Moin'
  //   }
  // })
  // .then((result) => {
  //   console.log(result)
  // })

  //  db.collection('tasks').insertOne({
  //   description: 'Go for shopping',
  //   completed: false
  //   }) 
  //   .then((result) => {
  //    console.log(result.ops)
  //   })

  //  db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // })
  // .then((result) => {
  //   console.log(result.modifiedCount)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })

  db.collection('users').deleteMany({
    name: 'kona'
    }) 
    .then((result) => {
     console.log(result)
    })
})