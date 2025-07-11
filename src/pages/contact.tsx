import Head from 'next/head'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'


const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Contacts() {
  const { t, i18n } = useTranslation('common'); // Use the 'common' namespace
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <>
      <Head>
        <title>{currentLang === 'ta' ? 'தொடர்பு | சரவணகுமார்' : 'Contact | Manoj Kumar'}</title>
        <meta
          name="description"
          content="Feel free to get in touch and let's talk about how we can work together."
        />
        <meta property="og:title" content="Contact | Evander Inácio" />
        <meta
          property="og:description"
          content="Feel free to get in touch and let's talk about how we can work together."
        />

        
      </Head>

      <ScrollTop />
      <Contact />
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  )
}
