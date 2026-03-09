require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

const MONGODB_URI =
  process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('error connecting to MongoDB:', error.message))

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})