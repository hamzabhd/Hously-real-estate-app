import mongoose, { ConnectOptions } from 'mongoose'

let isConnected = false

export async function connectToDb() {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('Database already connected')
    return
  }

  try {
    await mongoose.connect(
      process.env.DB_URI as string,
      {
        dbName: 'Hously_app',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions,
    )
    isConnected = true
  } catch (err) {
    console.log('Connection to db went wrong', err)
  }
}
