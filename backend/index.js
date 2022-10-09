const connectToMongo = require('./db');
const express = require('express')

connectToMongo();


const app = express()
const port = 3000

app.use(express.json());
app.use(require('../backend/auth'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})