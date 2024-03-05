import { z } from 'zod'
import { zfd } from 'zod-form-data'

export const registerAddressSchema = z.object({
  project_id: z.number(),
  address: z.string()
})

export const registerAddressValidator = zfd.formData(registerAddressSchema)
