'use server'

import { db } from 'smartsale-db'
import { fromEntries } from 'smartsale-lib'
import { registerAddressSchema } from '@/lib/validators'

import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import axios from 'axios'
import { z } from 'zod'

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

async function validateRecaptcha(recaptchaToken: string): Promise<boolean> {
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify`,
    {},
    {
      params: {
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaToken
      }
    }
  )

  return response.data.success
}

export async function subscribeToNewsletter(data: FormData) {
  console.log('✅ Subscribe to newsletter!')
  const resend = new Resend(process.env.RESEND_API_KEY)

  const NewsletterSchema = z.object({
    email: z.string().email(),
    recaptcha: z.string().min(1)
  })

  // Convert FormData to a plain object to validate
  const formData = Object.fromEntries(data)
  console.log('✅ formData:', formData)
  try {
    // Validate the form data against the schema
    const validatedData = NewsletterSchema.parse(formData)

    // Validate recaptcha with Google's servers
    const isRecaptchaValid = await validateRecaptcha(validatedData.recaptcha)
    if (!isRecaptchaValid) throw new Error('Invalid recaptcha')

    const res = await resend.contacts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID || '',
      email: validatedData.email
    })

    if (res.error) {
      console.log('🚨 newsletter reg error', res.error)
      return { error: 'unexpected error' }
    }

    console.log('newsletter reg', validatedData.email)
    return { success: true }
  } catch (error) {
    console.error('Validation or other error', error)
    // Handle the validation error or other errors appropriately
    // For example, return an error response to the client
    return {
      error: 'Invalid input or recaptcha'
    }
  }
}
