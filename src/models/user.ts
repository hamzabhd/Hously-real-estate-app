import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    profilePicture: { type: String },
    fullName: { type: String },
    phoneNumber: { type: String },
    city: { type: String },
    country: { type: String },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    background: { type: String },
    facts: { type: [String], default: [] },
    destinations: { type: [String], default: [] },
    links: { type: [String], default: [] },
  },
  {
    timestamps: true,
  },
)

const User = models.User || model('User', userSchema)
export default User
