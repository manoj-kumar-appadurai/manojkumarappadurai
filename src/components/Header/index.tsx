import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../../styles/styles'
import { useThemeContext } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';
import LanguageSwitcher from '../Language/index';
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

export function Header() {
  const [open, setOpen] = useState(false);
  const { currentTheme, toggleTheme } = useThemeContext();
  const handleOpen = () => {
    setOpen(!open);
  };
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');
  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <HeaderContainer style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="mobile-content" style={{ display: 'flex' }}>
        <Link href={'/'}>
          <div className="logo">
            <img
              className="logo"
              width={40}
              height={40}
              src="/mk.png"
              alt="logo"
            />
          </div>
          {'Manoj Kumar Appadurai'}
        </Link>
        <style jsx>{`
          .settings {
            padding-top: 0.2rem;
            padding-bottom: 0.2rem;
            padding-left: 0.5rem;
            margin: 0 0.5rem;
          }
        `}</style>
        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={30} weight="bold" />
          ) : (
            <List size={30} weight="bold" />
          )}
        </MobileIcon>
      </div>
      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <span>{currentLang === 'ta' ? 'முகப்பு' : 'Home'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              <span>{currentLang === 'ta' ? 'பற்றி' : 'About'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/projects'}>
              <span>{currentLang === 'ta' ? 'திட்டங்கள்' : 'Projects'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/resume'}>
              <span>{currentLang === 'ta' ? 'சுயவிவரம்' : 'Resume'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              <span>{currentLang === 'ta' ? 'தொடர்பு' : 'Contact'}</span>
            </Link>
          </li>
        </ul>
        <Icons>
          <Link
            href={'https://github.com/manoj-kumar-appadurai'}
            target="_blank"
            aria-label={currentLang === 'ta' ? 'கிட்ஹப் இணைப்பு' : 'Link to Github'}>
            <FiGithub />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/manoj-kumar-appadurai/'}
            target="_blank"
            aria-label={currentLang === 'ta' ? 'லிங்க்டின் இணைப்பு' : 'Link to Linkedin'}>
            <FiLinkedin />
          </Link>
          <Link
            href={'https://www.instagram.com/____mxnoj__/'}
            target="_blank"
            aria-label={currentLang === 'ta' ? 'இன்ஸ்டாகிராம்' : 'Instagram'}>
            <FiInstagram />
          </Link>
          <Link
            href={'https://api.whatsapp.com/send?phone=919003315708'}
            target="_blank"
            aria-label={currentLang === 'ta' ? 'வாட்ஸ்அப் மூலம் தொடர்பு கொள்ள' : 'Link to contact via WhatsApp'}>
            <FaWhatsapp />
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}