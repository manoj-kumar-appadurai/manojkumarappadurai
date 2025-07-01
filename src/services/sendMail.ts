import emailjs from '@emailjs/browser'

const service_id = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string
const template_id = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string
const user_id = process.env.NEXT_PUBLIC_EMAIL_USER_ID as string

export const sendContactMail = async (name: string, email: string, message: string, time: string) => {
  const templateParams = {
    from_name: name,
    email: email,
    message: message,
    time: time, // now received from form
  }

  try {
    const response = await emailjs.send(service_id, template_id, templateParams, user_id)
    return response
  } catch (error) {
    throw new Error('Email send failed')
  }
}
