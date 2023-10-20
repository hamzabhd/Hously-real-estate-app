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
