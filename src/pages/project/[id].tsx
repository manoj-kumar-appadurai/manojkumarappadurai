import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '../../types/Project'
import projects from '../../data/projects'
import ReactPlayer from 'react-player'
import { Footer } from '../../components/Footer'
import * as S from '../../styles/project'
import { ButtonAlt, ButtonSecondary, Title, Description } from '../../styles/styles'
import { ArrowLeft, ChatCenteredText, Image as IconImage, YoutubeLogo, Hash, ChalkboardSimple, UsersThree, Clock } from 'phosphor-react'
import { FaAddressBook, FaBlog, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTrello, FaTwitter } from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs'
import { ResponsibilityList } from '../../styles/project' // adjust path if needed


interface ProjectProps {
  project: Project
}

export default function Projeto({ project }: ProjectProps) {
  return <>
    <Head>
      <title>{project.title} | Manoj Kumar</title>
      <meta name="description" content={project.description} />
      <meta property="og:title" content={project.title} />
      <meta property="og:description" content={project.description} />
      <meta property="og:image" content={project.imgUrl} />
      <meta property="og:image:secure_url" content={project.imgUrl} />
      <meta name="twitter:image" content={project.imgUrl} />
      <meta name="twitter:image:src" content={project.imgUrl} />
    </Head>

    <S.ProjectContainer>
      <S.Banner>
        <img className="bannerUrl" style={{ marginTop: '5rem' }} src={project.banner} alt={project.title} />
        <div className="bannerContainer">
          <div className="bannerContent">
            <img src={project.icon} alt={project.title} />
            <div>
              <h1>{project.title}</h1>
              <p>{project.type}</p>
            </div>
          </div>

          <div className="link">
            <Link href={project.web} target="_blank">
              <ButtonAlt>
                Website <BsGlobe size={15} />
              </ButtonAlt>
            </Link>
          </div>
        </div>
      </S.Banner>

      <S.DescriptionProject>
        <Title>
          Project
          <span>
            <ChatCenteredText /> Description
          </span>
        </Title>
        <div className="description">
          <p style={{ textAlign: "justify" }}>{project.description}</p>
        </div>
      </S.DescriptionProject>

      <S.Tags>
        <Title>
          Tech Stack
          <span>
            <Hash /> Skills
          </span>
        </Title>

        <Description style={{ textAlign: 'center' }}>
          Technologies used in the development of the project.
        </Description>

        <S.TagsContainer>
          {project.tech &&
            project.tech.map(tech => {
              return (
                <S.TagsContent key={tech.id} color={tech.color}>
                  <div
                    className="card-icon"
                    style={{
                      backgroundColor: `rgba(${tech.rgb}, .1)`,
                      border: `1px solid ${tech.color}`
                    }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3>{tech.name}</h3>
                </S.TagsContent>
              )
            })}
        </S.TagsContainer>
        <div className='description'>
          <p style={{ visibility: 'hidden' }}></p>
        </div>
      </S.Tags>

      <S.Tags>
        <Title>
          Roles & Responsibilities
          <span>
            <UsersThree /> Contributions
          </span>
        </Title>

        <ResponsibilityList>
          <ul>
            {project.roles?.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </ResponsibilityList>
      </S.Tags>

      <Link href={'/projects'} legacyBehavior>
        <ButtonSecondary>
          <a>
            <ArrowLeft
              style={{ marginBottom: '-0.2rem' }}
              weight="bold"
              size={18}
            />{' '}
            Back
          </a>
        </ButtonSecondary>
      </Link>
    </S.ProjectContainer>

    <Footer />
  </>;
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const project = projects.map(project => ({
    id: project.id,
    link: project.url,
    imgUrl: project.img,
    banner: project.banner,
    icon: project.icon,
    title: project.title,
    type: project.type,
    github: project.github,
    web: project.web,
    description: project.description,
    tags: project.tags,
    year: project.year,
    status: project.status,
    tech: project.tech,
    backgroundImage: project.backgroundImage,
    blog: project.blog,
    roles: project.roles,
  }))

  const idProject = project.find(project => project.link === params.id)

  return {
    props: {
      project: idProject
    },
    revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}