import { Schema, model, models } from 'mongoose'

const reviewSchema = new Schema(
  {
    reviewer: { type: Schema.Types.ObjectId, ref: 'User' },
    reviewerType: { type: String },
    reviewRange: { type: String },
    reviewContent: { type: String },
  },
  {
    timestamps: true,
  },
)

const Review = models.Review || model('Review', reviewSchema)
export default Review
