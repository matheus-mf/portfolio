import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body as { name?: string; email?: string; message?: string }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'matheus.cll.g@gmail.com',
    replyTo: email,
    subject: 'Contato pela landpage',
    text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    html: `<p><strong>Nome:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`,
  })

  if (error) {
    return res.status(500).json({ error: 'Failed to send email' })
  }

  return res.status(200).json({ ok: true })
}
