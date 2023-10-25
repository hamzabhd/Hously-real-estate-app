import { listingSchema, userSchema } from './validations/validations'
import {
  UserDetails,
  ListingsDetails,
  InputErrors,
  DetailsStateErrors,
} from '@/types/types'
import { Dispatch, SetStateAction } from 'react'
import { ZodError } from 'zod'

type SchemaType = typeof listingSchema | typeof userSchema

export const validateForm = (
  schema: SchemaType,
  obj: UserDetails | ListingsDetails,
) => {
  try {
    const result = schema.safeParse(obj)

    if (!result.success) {
      const issues = result.error.issues
      let errors: InputErrors = {}

      for (let i = 0; i < issues.length; i++) {
        errors[issues[i].path[0]] = issues[i].message
      }
      return {
        success: false,
        message: 'Form does not pass validation',
        errors,
      }
    }
    return { success: true, message: 'Form passed validation successfully' }
  } catch (err) {
    return { success: false, message: err }
  }
}
