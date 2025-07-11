import { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendContactMail } from '../../services/sendMail'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { ButtonSecondary } from '../../styles/styles'
import { FormContent } from './styles'
import { At, ChatText, TelegramLogo, User } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(2).max(1000)
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Form() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  const { register, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmits = async (event: FormEvent) => {
    event.preventDefault()

    const time = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

    try {
      await sendContactMail(name, email, message, time)  // pass time
      toast.success(currentLang === 'ta' ? 'செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!' : 'Message Sent Successfully!')
      setName('')
      setEmail('')
      setMessage('')
      reset()
    } catch (error) {
      toast.error(currentLang === 'ta' ? 'செய்தி அனுப்புவதில் பிழை!' : 'Error sending message!')
    }
  }

  return (
    <FormContent onSubmit={onSubmits}>
      <div className="input-group">
        <input
          type="text"
          {...register('name')}
          onChange={({ target }) => setName(target.value)}
          name="name"
          id="name"
          autoComplete="name"
          placeholder=" "
          required
          className="input"
        />
        <label htmlFor="name" className="user-label">
          {currentLang === 'ta' ? 'பெயர்' : 'Name'}{' '}
          <span>
            <User size={15} weight="bold" />
          </span>
        </label>
      </div>

      <div className="input-group">
        <input
          type="email"
          {...register('email')}
          onChange={({ target }) => setEmail(target.value)}
          required
          name="email"
          autoComplete="email"
          id="email"
          placeholder=" "
          className="input"
        />
        <label htmlFor="email" className="user-label">
          {currentLang === 'ta' ? 'மின்னஞ்சல்' : 'Email'}{' '}
          <span>
            <At size={15} weight="bold" />
          </span>
        </label>
      </div>

      <div className="input-group">
        <textarea
          {...register('message')}
          onChange={({ target }) => setMessage(target.value)}
          name="description"
          id="description"
          autoComplete="description"
          placeholder=" "
          required
          className="input"
        ></textarea>
        <label htmlFor="description" className="user-label">
          {currentLang === 'ta' ? 'செய்தி' : 'Message'}{' '}
          <span>
            <ChatText size={15} weight="bold" />
          </span>
        </label>
      </div>

      <ButtonSecondary type="submit">
        {currentLang === 'ta' ? 'அனுப்பு' : 'Send'} <TelegramLogo size={15} weight="bold" />{' '}
      </ButtonSecondary>
    </FormContent>
  )
}