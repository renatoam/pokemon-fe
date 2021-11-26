import { CallbackError, Mongoose } from 'mongoose'

const mongoose = new Mongoose()
const mongoURI = process.env.MONGODB_URI || ''

const mongoConnectError = (error: CallbackError) => {
  if (error) {
    console.log('Connection error', error)

    return new Error(JSON.stringify(error))
  }

  console.log('Connection success')
}

mongoose.connect(mongoURI, mongoConnectError)
