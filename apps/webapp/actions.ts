'use server'

import { db } from 'smartsale-db'
import { fromEntries } from './lib/utils'
import { registerAddressSchema } from './lib/validators'

export async function registerAddress(formData: FormData) {
  try {
    const o = fromEntries(formData)
    const data = registerAddressSchema.parse({
      ...o,
      project_id: parseInt(o.project_id)
    })
    return await db.whitelist.create({ data })
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong')
  }
}
