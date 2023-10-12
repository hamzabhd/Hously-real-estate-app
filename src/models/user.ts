import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
  {
    username: { type: String },
    fullName: { type: String },
    email: { type: String, required: true, unique: true },
    profilePicture: { type: String },
    bio: { type: String },
  },
  {
    timestamps: true,
  },
)

const user = models.User || model('User', userSchema)
export default user
