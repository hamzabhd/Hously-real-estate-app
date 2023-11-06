import { Schema, model, models } from 'mongoose'

const reservationSchema = new Schema(
  {
    reserver: { type: Schema.Types.ObjectId, ref: 'User' },
    from: { type: String },
    to: { type: String },
    guests: { type: Number },
  },
  {
    timestamps: true,
  },
)

const Reservation =
  models.Reservation || model('Reservation', reservationSchema)
export default Reservation
