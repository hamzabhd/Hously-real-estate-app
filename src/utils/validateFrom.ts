import {
  listingSchema,
  userSchema,
  reviewSchema,
  reportSchema,
} from './validations/validations'
import { UserDetails, ListingsDetails, InputErrors, ReportType, ReviewType } from '@/types/types'

type SchemaType =
  | typeof listingSchema
  | typeof userSchema
  | typeof reportSchema
  | typeof reviewSchema

export const validateForm = (
  schema: SchemaType,
  obj: UserDetails | ListingsDetails | ReportType | ReviewType
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
