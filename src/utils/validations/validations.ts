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
  title: z.string().min(1, { message: 'This field is required' }),
  description: z.string().min(1, { message: 'This field is required' }),
  images: z
    .string()
    .array()
    .nonempty({ message: 'You should provide one image at least' }),
  address: z.string().min(1, { message: 'This field is required' }),
  country: z.string().min(1, { message: 'This field is required' }),
  city: z.string().min(1, { message: 'This field is required' }),
  state: z.string().optional(),
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
    .nonempty({ message: 'You should select one feature at least' }),
  rules: z
    .string()
    .array()
    .nonempty({ message: 'You should select one rule at least' }),
  guestsLimit: z
    .union([
      z
        .string()
        .refine((val) => Number(val), { message: 'Please enter a number' }),
      z.string().length(0),
    ])
    .optional(),
  quietHours: z.string().optional(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  price: z.string().refine((val) => Number(val), {
    message: 'Please enter a number',
  }),
  cleaningFee: z.string().optional(),
  securityFee: z.string().optional(),
})
