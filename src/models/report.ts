import { Schema, models, model } from 'mongoose'

const reportSchema = new Schema(
  {
    property: { type: Schema.Types.ObjectId, ref: 'Property' },
    reporter: { type: Schema.Types.ObjectId, ref: 'User' },
    reportReason: { type: String },
    reportDescription: { type: String },
  },
  {
    timestamps: true,
  },
)

const Report = models.Report || model('Report', reportSchema)
export default Report
