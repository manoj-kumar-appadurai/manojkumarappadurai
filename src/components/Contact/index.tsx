/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent, ResponsiveIframeContainer } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo, LinkedinLogo } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const calendy = process.env.NEXT_PUBLIC_CALENDLY_URL;
const calender = process.env.NEXT_PUBLIC_PORTFOLIO_CALENDER_URL;

export function Contact() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Section>
      <Title>
        {currentLang === 'ta' ? 'தொடர்பு படிவம்' : 'Contact Form'}
        <span>
          <Envelope /> {currentLang === 'ta' ? 'தொடர்பு' : 'Contact'}
        </span>
      </Title>
      <Description>
        {currentLang === 'ta' ? 'எனவே நீங்கள் கடினமாக உழைக்கும், உண்மையான மற்றும் நல்ல சவாலுக்கு எப்போதும் தயாராக இருக்கும் ஒருவரைத் தேடுகிறீர்கள் என்றால், உண்மையானவர்களைத் தவிர வேறு எதையும் பார்க்க வேண்டாம்! நாம் இணைந்து எப்படி மாற்றத்தை ஏற்படுத்த முடியும் என்று பார்க்கலாம்:)' : "I'm always open to new opportunities, meaningful connections, and fresh challenges.Get in touch through email, LinkedIn, or by filling out the form below."}
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <LinkedinLogo size={22} color="#00fffb" /> Linkedin{' '}
            </h4>
            <Link href="https://www.linkedin.com/in/manoj-kumar-appadurai/" target="_blank">
              <span>Manoj Kumar Appadurai</span>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00fffb" /> Email{' '}
            </h4>
            <Link href="mailto:manojkumarappadurai@gmail.com" target="_blank">
              <span>manojkumarappadurai@gmail.com</span>
            </Link>
          </div>
        </ContactContent>
        <Form />
      </ContainerContact>
    </Section>
  );
}