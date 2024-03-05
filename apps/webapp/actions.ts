'use server'

import { db } from 'smartsale-db'
import { fromEntries } from './lib/utils'
import { registerAddressSchema } from './lib/validators'

export async function registerAddress(formData: FormData) {
  try {
    const data = registerAddressSchema.parse(fromEntries(formData))
    return await db.whitelist.create({ data })
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong')
  }
}
