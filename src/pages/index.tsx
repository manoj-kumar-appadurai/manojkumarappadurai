import Head from "next/head";
import { About } from "../components/CardAbout";
import { Header } from "../components/Header";
import { HomeHero } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ScrollTop } from "../components/ScrollTop";
import { Footer } from "../components/Footer";
import { CardContact } from "../components/CardContact";
import { Section } from "../styles/styles";
import { Education } from "../components/Education";
import { Certificates } from "../components/Certificates/index";
import { Work_Experience } from "../components/Work/index";
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Home() {
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
        <title>{currentLang === 'ta' ? 'சரவணகுமாரின் போர்ட்ஃபோலியோ' : ' Manoj Kumar\'s Portfolio'} </title>
      </Head>
      <ScrollTop />
      <Section>
        <HomeHero />
        <About />
        <Skills />
        <Education />
        <Work_Experience/>
        <Certificates />
        <Projects />
        <CardContact />
      </Section>

      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script
        src={botkey}
        defer
      ></script>
      <Footer />
    </>
  );
}


export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});