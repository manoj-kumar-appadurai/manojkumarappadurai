import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function About() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container>
      <AboutContainer>
        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>{currentLang === 'ta' ? 'என்னைப் பற்றி சிறிது!!' : 'Little About Me!!'}</h2>

            {currentLang === 'ta' ? (
              <>
                <li>
                  நான் மெக்கானிக்கல் என்ஜினியரிங்கில் பட்டம் பெற்றுள்ளேன். ஆனால் எனது உள்ளார்ந்த ஆர்வம் டிசைன் துறையை நோக்கி இழுத்தது, அதனால் UI/UX வடிவமைப்பை ஆராயத் தொடங்கினேன்.
                </li>
                <li>
                  வடிவமைப்பின் மேல் அனுபவம் பெருகியதுடன், அவற்றை செயல்படுத்தும் frontend தொழில்நுட்பங்கள் மீது ஆர்வம் ஏற்பட்டது. எனவே HTML, CSS, JavaScript மற்றும் React போன்ற தொழில்நுட்பங்களை கற்றுக் கொண்டேன்.
                </li>
                <li>
                  எனது பயணம் ஒரு எஞ்சினியரிடமிருந்து ஒரு வடிவமைப்பாளர் மற்றும் முன்னணி டெவலப்பராக மாறியுள்ளது. பயன்படுத்தத் தகுந்த, அழகான, செயல்திறன் வாய்ந்த வலை அனுபவங்களை உருவாக்குவதே எனது நோக்கமாகும்.
                </li>
              </>
            ) : (
              <>
                <li>
                  I hold a Bachelor's degree in Mechanical Engineering, but my passion for design led me to explore the world of UI/UX. Over time, I transitioned into a full-time UI/UX Designer, focusing on creating intuitive and user-centered digital experiences.
                </li>
                <li>
                  As I grew in the field, I developed a strong interest in bringing designs to life, which motivated me to learn frontend technologies such as HTML, CSS, JavaScript, and React. Today, I blend creativity with code to deliver engaging and accessible web interfaces.
                </li>
                <li>
                  My journey from engineering to design and development has shaped me into a versatile professional with a keen eye for detail, usability, and performance. I am passionate about building seamless digital experiences that solve real user problems.
                </li>
              </>
            )}
          </div>

          <div className="aboutButton">
            <Link href={'/resume'}>
              <Button>
                {currentLang === 'ta' ? 'சுயவிவரம்' : 'Resume'}
                <TelegramLogo
                  style={{ marginBottom: '-0.1rem', marginLeft: '0.2rem' }}
                  size={16}
                  weight="bold"
                />
              </Button>
            </Link>

            <Link href={'/about'}>
              <ButtonAlternatives>
                {currentLang === 'ta' ? 'மேலும் வாசிக்க' : 'Read more'}
                <ArrowRight
                  style={{ marginBottom: '-0.1rem', marginLeft: '0.2rem' }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlternatives>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}