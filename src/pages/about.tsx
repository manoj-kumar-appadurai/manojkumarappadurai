import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { ArrowLeft, ChatCenteredText, Image as IconImage, YoutubeLogo, Hash, InstagramLogo } from 'phosphor-react'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title, ButtonSecondary } from '../styles/styles'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface DashboardPageProps {
  fallback: any;
}
export default function About() {
  const { t, i18n } = useTranslation('common'); // Use the 'common' namespace
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return <>
    <Head>
      <title>{currentLang === 'ta' ? 'பற்றி | மனோஜ்குமார்' : 'About | Manoj Kumar'}</title>
      <meta
        name="description"
        content={
          currentLang === 'ta'
            ? 'நான் மனோஜ்குமார் அப்பாதுரை, 3 வருட அனுபவம் கொண்ட UI/UX வடிவமைப்பாளர் மற்றும் முன்னணி டெவலப்பராக இருக்கிறேன். சிறந்த பயனர் அனுபவங்களை உருவாக்கும் முயற்சியில் வடிவமைப்பும் மேம்பாட்டும் ஒன்றிணைந்து செயல்படுகின்றன.'
            : 'I am Manoj Kumar, a UI/UX Designer and Front-End Developer with 3 years of experience. I specialize in crafting intuitive user interfaces and translating designs into clean, responsive web applications.'
        }
      />
      <meta
        property="og:title"
        content={currentLang === 'ta' ? 'பற்றி | மனோஜ்குமார்' : 'About | Manoj Kumar Appadurai'}
      />
      <meta
        property="og:description"
        content={
          currentLang === 'ta'
            ? 'நான் மனோஜ்குமார் அப்பாதுரை, 3 வருட அனுபவம் கொண்ட UI/UX வடிவமைப்பாளர் மற்றும் முன்னணி டெவலப்பராக இருக்கிறேன். சிறந்த பயனர் அனுபவங்களை உருவாக்கும் முயற்சியில் வடிவமைப்பும் மேம்பாட்டும் ஒன்றிணைந்து செயல்படுகின்றன.'
            : 'I am Manoj Kumar, a UI/UX Designer and Front-End Developer with 3 years of experience. I specialize in crafting intuitive user interfaces and translating designs into clean, responsive web applications.'
        }
      />
    </Head>

    <ScrollTop />
    <Section>
      <S.AboutContainer>
        <Title>
          {currentLang === 'ta' ? 'என்னைப் பற்றி!!' : 'About Myself!!'}
          <span>
            <BiUserPin /> {currentLang === 'ta' ? 'பற்றி' : 'About'}
          </span>
        </Title>

        <S.AboutContent>
          <S.AboutImage>
            <div className="links">
              <ul>
                <Link
                  href={'https://github.com/manoj-kumar-appadurai'}
                  target="_blank"
                  aria-label="Github">

                  <AiFillGithub size={25} />@manoj-kumar-appadurai
                </Link>
                <Link
                  href={'https://www.linkedin.com/in/manoj-kumar-appadurai/'}
                  target="_blank"
                  aria-label="Linkedin">

                  <BsLinkedin size={25} />Manoj Kumar Appadurai
                </Link>
                <Link
                  href={'https://api.whatsapp.com/send?phone=919003315708'}
                  target="_blank"
                  aria-label="WhatsApp">

                  <RiWhatsappFill size={25} />+91 9003315708
                </Link>
                <Link
                  href={'mailto:manojkumarappadurai@gmail.com'}
                  className="email"
                  target="_blank"
                  aria-label="email">

                  <GrMail size={25} />manojkumarappadurai@gmail.com
                </Link>
              </ul>
            </div>

            <S.AboutContact>
              <h3>
                {currentLang === 'ta' ? 'நாம் பேசலாம், ஒருவேளை ஒரு அற்புதமான திட்டத்தை உருவாக்கலாம்?' : 'Lets talk, maybe create an amazing project together?'}
              </h3>
              <p>{currentLang === 'ta' ? 'எனக்கு ஒரு செய்தி அனுப்புங்கள்! 😉' : 'Send me a message! 😉'}</p>
              <Link href={'/contact'}>

                <ButtonAlt>{currentLang === 'ta' ? 'தொடர்பு கொள்ளவும்' : 'Contact'}</ButtonAlt>

              </Link>
            </S.AboutContact>
          </S.AboutImage>
          <S.AboutDescription>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta'
                ? '👋 வணக்கம்! நான் மனோஜ்குமார் அப்பாதுரை, 3 வருட அனுபவம் கொண்ட UI/UX வடிவமைப்பாளர் மற்றும் முன்னணி வலைப்பக்க டெவலப்பராக இருக்கிறேன். பயனர் நட்பான இன்டர்ஃபேஸ்கள் மற்றும் மென்பொருள் செயல்பாடுகளை ஒருங்கிணைக்கும் திறமை எனக்கு உண்டு.'
                : '👋 Hey there! I’m Manoj Kumar Appadurai, a UI/UX Designer and Front-End Developer with 3 years of experience in creating user-friendly interfaces and integrating them with functional, clean code.'}
            </p>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta'
                ? '💡 நான் பயனர் மையக் கொள்கைகளை வழிகாட்டியாகக் கொண்டு, அழகிய மற்றும் செயல்பாட்டு வடிவமைப்புகளை உருவாக்க விரும்புகிறேன். Figma, HTML, CSS, JavaScript மற்றும் React.js ஆகியவற்றில் சிறந்த தேர்ச்சி பெற்றுள்ளேன்.'
                : '💡 I’m passionate about crafting beautiful and functional designs that are driven by user-centric principles. I’m proficient in tools and technologies like Figma, HTML, CSS, JavaScript, and React.js.'}
            </p>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta'
                ? '🚀 என் பயணத்தில், ஒருவராகவே ஒரு முழுமையான eCommerce வலைத்தளத்தை வடிவமைத்து உருவாக்கியுள்ளேன். ஏற்கனவே பல real-world projects-இல் API Integration மற்றும் UI Testing செய்துள்ளேன்.'
                : '🚀 On my journey, I’ve independently designed and built a complete eCommerce website, performed API integrations, and conducted hands-on UI testing for real-world web applications.'}
            </p>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta'
                ? '🎯 ஒவ்வொரு திட்டத்திலும் சிறந்த அனுபவத்தை வழங்கும் நோக்கத்துடன் செயல்படுகிறேன். ஒவ்வொரு பிக்சலும், ஒவ்வொரு கோடுகளும் பயனர் நோக்கத்தில் அமைய வேண்டும் என்று நம்புகிறேன்.'
                : '🎯 I approach every project with the goal of delivering the best user experience. I believe every pixel and every line of code should serve the user’s needs and goals.'}
            </p>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta'
                ? '🧠 நேரம் இருந்தால், புதிர்கள் மற்றும் UI அனிமேஷன் சவால்களை தீர்ப்பதில் ஆர்வம் காட்டுகிறேன். நான் தொடர்ந்து புதிய நுட்பங்களை கற்றுக்கொண்டு, தனித்துவமான வடிவங்களை உருவாக்க முயற்சி செய்கிறேன்.'
                : '🧠 In my free time, I enjoy solving puzzles and experimenting with UI animation challenges. I love learning new techniques to design unique, delightful user experiences.'}
            </p>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta'
                ? '🤝 எனக்கு ஒத்துழைப்பும், வளர்ச்சியும் முக்கியம். நீங்கள் ஒரு ஊக்கமுள்ள டிசைனர் மற்றும் டெவலப்பரை தேடுகிறீர்கள் என்றால், வாருங்கள் இணைவோம்!'
                : '🤝 Collaboration and growth mean a lot to me. If you’re looking for a passionate designer and developer, let’s connect and create something impactful together!'}
            </p>
          </S.AboutDescription>

        </S.AboutContent>
      </S.AboutContainer>

      <Link href={'/#home'} legacyBehavior>
        <ButtonSecondary>
          <a>
            <ArrowLeft
              style={{ marginBottom: '-0.2rem' }}
              weight="bold"
              size={18}
            />{' '}
            {currentLang === 'ta' ? 'திரும்பி செல்' : 'Go Back'}
          </a>
        </ButtonSecondary>
      </Link>
    </Section>
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
    <script src={botkey} defer></script>
    <Footer />
  </>;
}