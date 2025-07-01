import Link from 'next/link'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaBehance } from 'react-icons/fa'
import { FooterContainer, FooterContent } from './styles'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Footer() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <FooterContainer>
      <FooterContent>
        <h4> &copy; {new Date().getFullYear()} Manoj Kumar Appadurai</h4>
      </FooterContent>
      <div className="links">
        <Link
          href={'https://github.com/manoj-kumar-appadurai'}
          target="_blank"
          aria-label={currentLang === 'ta' ? 'கிட்ஹப் இணைப்பு' : 'Link to Github'}
        >
          <FiGithub />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/manoj-kumar-appadurai/'}
          target="_blank"
          aria-label={currentLang === 'ta' ? 'லிங்க்டின் இணைப்பு' : 'Link to Linkedin'}
        >
          <FiLinkedin />
        </Link>
        <Link
          href={'https://www.instagram.com/____mxnoj__/'}
          target="_blank"
          aria-label={currentLang === 'ta' ? 'இன்ஸ்டாகிராம்' : 'Instagram'}
        >
          <FiInstagram />
        </Link>
        <Link
          href={'https://www.behance.net/_manoj_kumar'}
          target="_blank"
          aria-label={currentLang === 'ta' ? 'ட்விட்டர்' : 'Behance'}
        >
          <FaBehance />
        </Link>
      </div>
    </FooterContainer>
  );
}