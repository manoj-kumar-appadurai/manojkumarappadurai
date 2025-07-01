/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { Button, ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText, Card, Announcement, Logo, Box } from './styles'
import { FiArrowRight } from 'react-icons/fi'
import { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import Confetti from 'react-confetti';

const GOOGLE_FORM_ACTION_URL2 = process.env.NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL2;
const NAME_ENTRY_ID2 = process.env.NEXT_PUBLIC_NAME_ENTRY_ID2;

Modal.setAppElement('#__next');

export function HomeHero() {
  const { t } = useTranslation('common');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');
  const router = useRouter();

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  function openModal2() {
    setModalIsOpen2(true);
  }

  useEffect(() => {
    // Fetch the current date using JavaScript's built-in Date object
    const currentDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    setDate(currentDate);
  }, []);

  function closeModal2() {
    setModalIsOpen2(false);
  }

  async function handleGenerate() {
    if (userName.trim() === '') {
      alert('Please enter a name!');
      return;
    }

    setShowCard(true);

    try {
      if (!GOOGLE_FORM_ACTION_URL2) {
        console.error('Google Form action URL is not defined');
        return;
      }

      const formData = new FormData();
      formData.append(NAME_ENTRY_ID2 || '', userName);

      const response = await fetch(GOOGLE_FORM_ACTION_URL2, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      if (response) {
        setUserName('');
      } else {
        console.error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }

    // Trigger confetti
    setShowConfetti(true);

    // Stop confetti after 3 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  }

  async function downloadCard() {
    if (cardRef.current) {
      try {
        const dataUrl = await htmlToImage.toPng(cardRef.current); // Convert the card to PNG
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'business-card.png'; // Set the download filename
        link.click(); // Trigger the download
      } catch (error) {
        console.error('Failed to generate the business card image:', error);
      }
    }
  }

  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> {currentLang === 'ta' ? 'வணக்கம், எனது பெயர்' : 'Hello, my name is'}
          </p>
          <h1>
            {currentLang === 'ta' ? 'சரவணகுமார் ரா' : 'Manoj Kumar'}
            <span className="animation">
              <img
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="triangle"
                loading='lazy'
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: [currentLang === 'ta' ? 'டெவலப்பர் | பேச்சாளர் | தன்னார்வலர்' : 'Front End Developer | UI/UX Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="button">
            <Link legacyBehavior href="#projects">
              <ButtonPrimary>
                <b>{currentLang === 'ta' ? 'திட்டங்களைக் காண்க' : 'See Portfolio'}</b>
                <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
              </ButtonPrimary>
            </Link>

          </div>
        </HomeText>

        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={250}
            gravity={0.5}
            wind={0.05}
          />
        )}
        <ImgHome>
          <img className="home-img" src="/home.png" alt={currentLang === 'ta' ? 'முகப்பு படம்' : 'Image Home'} />

          <div className="code">
            <img
              width={150}
              height={50}
              src="/vectors/dino.svg"
              alt="dino"
              loading="lazy"
            />
          </div>
        </ImgHome>

      </Content >
    </Container >
  )
}