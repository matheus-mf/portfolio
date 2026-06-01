import Head from 'next/head'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { useTranslation } from 'react-i18next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TechStackSection } from '@/components/sections/TechStackSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { developer } from '@/data/developer'
import { experiences } from '@/data/experiences'
import { projects } from '@/data/projects'
import { hardSkills, softSkills, techTags } from '@/data/skills'
import { stackCategories } from '@/data/stack'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export default function Home() {
  const { t } = useTranslation('hero')
  const yearsExp = new Date().getFullYear() - 2019

  return (
    <>
      <Head>
        <title>{developer.name} — {t('title')}</title>
        <meta name="description" content={t('bio', { years: yearsExp })} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Navigation />
        <main>
          <HeroSection developer={developer} />
          <AboutSection />
          <SkillsSection
            hardSkills={hardSkills}
            softSkills={softSkills}
            techTags={techTags}
          />
          <ExperienceSection experiences={experiences} />
          <ProjectsSection projects={projects} />
          <TechStackSection categories={stackCategories} />
          <ContactSection developer={developer} />
        </main>
        <Footer developer={developer} />
      </div>
    </>
  )
}
