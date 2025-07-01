import Image from 'next/image'
import { useTheme } from 'styled-components'
import education from '../../data/education'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Button, Container, Title } from '../../styles/styles'
import { EducationContainer, EducationContent } from './styles'
import { Books, Student } from 'phosphor-react'
import Link from "next/link";
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

export interface EducationProps {
  target: HTMLInputElement
}

export function Education() {
  const [query, setQuery] = useState("");
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  const handleChange = (e: EducationProps) => {
    setQuery(e.target.value);
  };

  const theme = useTheme()

  return (
    <Container>
      <Title>
        {currentLang === 'ta' ? 'வரலாறு' : 'History'}
        <span>
          <Student  /> {currentLang === 'ta' ? 'கல்வி' : 'Academic'}
        </span>
      </Title>

      <div>
        <VerticalTimeline lineColor={theme.firstColor}>
          {education &&
            education.map(education => {
              return (
                <VerticalTimelineElement
                  contentStyle={{
                    background: theme.backgroundAlt,
                    borderBottom: `7px solid ${theme.backgroundAlt}`,
                    boxShadow: `0px 5px 0px 0px ${theme.firstColor}`
                  }}
                  contentArrowStyle={{
                    borderRight: `10px solid ${theme.backgroundAlt}`
                  }}
                  date={education.date[currentLang]}
                  icon={
                    <img
                      style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '60%' }}
                      width={60}
                      height={60}
                      src={education.img}
                      alt={education.title[currentLang]}
                      loading="lazy"
                    />
                  }
                  iconStyle={{
                    boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
                    background: theme.backgroundAlt,
                    color: theme.firstColor
                  }}
                  key={education.id}
                >
                  <EducationContainer>
                    <EducationContent>
                      <h1>{education.title[currentLang]}</h1>
                      <h2>{education.subTitle[currentLang]}</h2>
                      <span>{education.office[currentLang]}</span>
                      <p>{education.description[currentLang].split('\n').map((line, i) => (
                        <a key={i}>
                          {line}
                          <br />
                        </a>
                      ))}</p>
                      <div style={{ display: 'flex', gap:"1rem", marginTop:"1rem" }}>
                        <Button>
                          <Link legacyBehavior href={education.link}>
                            <a target="_blank">{currentLang === 'ta' ? 'தளம்' : 'Website'}</a>
                          </Link>
                        </Button>
                      </div>
                    </EducationContent>
                  </EducationContainer>
                </VerticalTimelineElement>
              )
            })}
        </VerticalTimeline>
      </div>
    </Container>
  )
}