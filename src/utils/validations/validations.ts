import { z } from 'zod'

export const userSchema = z.object({
  fullName: z.string().refine((val) => (val === '' ? false : true), {
    message: 'Username must not be empty',
  }),
  phoneNumber: z
    .union([
      z.string().refine((val) => (Number(val) ? true : false), {
        message: 'Phone number must contain only numbers',
      }),
      z.string().length(0),
    ])
    .optional(),
  link1: z
    .union([z.string().url('Invalid social link'), z.string().length(0)])
    .optional(),
  link2: z
    .union([z.string().url('Invalid social link'), z.string().length(0)])
    .optional(),
  link3: z
    .union([z.string().url('Invalid social link'), z.string().length(0)])
    .optional(),
})

export const listingSchema = z.object({
  propertyType: z
    .string()
    .min(1, { message: 'You should select one type at least' }),
  listingType: z
    .string()
    .min(1, { message: 'You should select one type at least' }),
  title: z
    .string()
    .min(20, { message: 'Title should be at least 20 characters long' }),
  description: z.string().min(160, {
    message: 'Description should be at least 160 characters long',
  }),
  images: z
    .string()
    .array()
    .nonempty({ message: 'You should provide one image at least' }),
  address: z.string().min(1, { message: 'This field is required' }),
  country: z.string().min(1, { message: 'This field is required' }),
  city: z.string().min(1, { message: 'This field is required' }),
  state: z.string().min(1, { message: 'This field is required' }),
  postalCode: z.string().min(1, { message: 'This field is required' }),
  bedrooms: z
    .object({
      bedroom: z.number(),
      bedroomType: z
        .string()
        .min(1, { message: 'You should select one type at least' }),
    })
    .array(),
  bathrooms: z
    .object({
      bathroom: z.number(),
      bathroomType: z
        .string()
        .min(1, { message: 'You should select one type at least' }),
    })
    .array(),
  beds: z
    .object({
      bed: z.number(),
      bedType: z
        .string()
        .min(1, { message: 'You should select one type at least' }),
    })
    .array(),
  features: z
    .string()
    .array()
    .refine((item) => item.length >= 3, {
      message: 'You should select 3 features at least',
    }),
  rules: z
    .string()
    .array()
    .refine((item) => item.length >= 3, {
      message: 'You should select 3 rules at least',
    }),
  guestsLimit: z
    .string()
    .refine((val) => Number(val), { message: 'Please enter a number' }),
  quietHours: z.string().min(1, { message: 'This field is required' }),
  checkIn: z.string().min(1, { message: 'This field is required' }),
  checkOut: z.string().min(1, { message: 'This field is required' }),
  price: z.string().refine((val) => Number(val), {
    message: 'Please enter a number',
  }),
  cleaningFee: z.string().optional(),
  securityFee: z.string().optional(),
})

export const reviewSchema = z.object({
  reviewerType: z.string().min(1, { message: 'Please provide your role' }),
  reviewRange: z.string().optional(),
  reviewContent: z.string().min(1, {
    message: 'This field is required',
  }),
})

export const reportSchema = z.object({
  reportReason: z.string().min(1, { message: 'Please provide a reason' }),
  reportDescription: z.string().optional(),
})
