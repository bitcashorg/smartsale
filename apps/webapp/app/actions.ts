import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import axios from 'axios'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const NewsletterSchema = z.object({
  email: z.string().email(),
  recaptcha: z.string().min(1)
})

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

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
  // Convert FormData to a plain object to validate
  const formData = Object.fromEntries(data)
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
      console.log('newsletter reg error', res.error)
      return NextResponse.json({ error: 'unexpected error' })
    }

    console.log('newsletter reg', validatedData.email)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Validation or other error', error)
    // Handle the validation error or other errors appropriately
    // For example, return an error response to the client
    return NextResponse.json({
      error: 'Invalid input or recaptcha'
    })
  }
}
