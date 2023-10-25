import { Schema, model, models } from 'mongoose'

const propertySchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  propertyType: { type: String },
  listingType: { type: String },
  title: { type: String },
  description: { type: String },
  address: { type: String },
  country: { type: String },
  city: { type: String },
  state: { type: String },
  postalCode: { type: String },
  bedrooms: {
    type: [{ bedroom: { type: Number }, bedroomType: { type: String } }],
    default: [],
  },
  bathrooms: {
    type: [{ bathroom: { type: Number }, bathroomType: { type: String } }],
    default: [],
  },
  beds: {
    type: [{ bed: { type: Number }, bedType: { type: String } }],
    default: [],
  },
  features: { type: [String], default: [] },
  rules: { type: [String], default: [] },
  guestsLimit: { type: String },
  quietHours: { type: String },
  checkIn: { type: String },
  checkOut: { type: String },
  price: { type: String },
  cleaningFee: { type: String },
  securityFee: { type: String },
  images: { type: [String], default: [] },
})

const Property = models.Property || model('Property', propertySchema)
export default Property
