import mongoose from 'mongoose'

const mongoURI = process.env.MONGODB_URI || ''

export const mongoConnect = async () => {
  try {
    await mongoose.connect(mongoURI)
  } catch (error) {
    console.log({ error })
  }
}
