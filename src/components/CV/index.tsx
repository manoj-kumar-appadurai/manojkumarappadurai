/* eslint-disable @next/next/no-img-element */
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles"
import { FiDownload } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function CV() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container>
      <CVContainer>
        <Title>
          <span>
            <FiDownload /> {currentLang === 'ta' ? 'பதிவிறக்க' : 'Download'}
          </span>
        </Title>

        <CVContent>
          <CVDescription>
            <div className="aspas">&ldquo;</div>
            <p>
              {currentLang === 'ta' ? 'பதிவிறக்க பொத்தானைக் கிளிக் செய்வதன் மூலம் எனது தொழில்முறை சுயவிவரத்தை நீங்கள் பதிவிறக்கம் செய்யலாம்.' : 'Here you can download my professional resume by clicking on the download button.'}
            </p>
            <div className="profile">
              <div className="name">
                <h3>Manoj Kumar</h3>
                <span>{currentLang === 'ta' ? 'டெவலப்பர் | பேச்சாளர் | தன்னார்வலர்' : 'Front End Developer | UI/UX Designer'}</span>
              </div>
            </div>
          </CVDescription>
          
          <Curriculum>
            <img src="/cv.png" alt="Resume" />
            <a href="/pdf/Manoj_Kumar_Appadurai_Resume.pdf" download>
              <ButtonSecondAlt>
                <b>{currentLang === 'ta' ? 'சுயவிவரத்தை பதிவிறக்கவும்' : 'Download CV'}</b> <FiDownload size={20}  />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>        
      </CVContainer>
    </Container>
  )
}