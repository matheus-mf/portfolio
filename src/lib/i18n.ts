import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import experiences from '../../public/locales/pt/experiences.json'
import skills from '../../public/locales/pt/skills.json'
import about from '../../public/locales/pt/about.json'
import hero from '../../public/locales/pt/hero.json'
import projects from '../../public/locales/pt/projects.json'
import stack from '../../public/locales/pt/stack.json'
import nav from '../../public/locales/pt/nav.json'
import footer from '../../public/locales/pt/footer.json'
import contact from '../../public/locales/pt/contact.json'

import experiencesEn from '../../public/locales/en/experiences.json'
import skillsEn from '../../public/locales/en/skills.json'
import aboutEn from '../../public/locales/en/about.json'
import heroEn from '../../public/locales/en/hero.json'
import projectsEn from '../../public/locales/en/projects.json'
import stackEn from '../../public/locales/en/stack.json'
import navEn from '../../public/locales/en/nav.json'
import footerEn from '../../public/locales/en/footer.json'
import contactEn from '../../public/locales/en/contact.json'

const defaultLang = 'pt'

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: defaultLang,
    fallbackLng: 'pt',
    resources: {
      pt: { experiences, skills, about, hero, projects, stack, nav, footer, contact },
      en: {
        experiences: experiencesEn,
        skills: skillsEn,
        about: aboutEn,
        hero: heroEn,
        projects: projectsEn,
        stack: stackEn,
        nav: navEn,
        footer: footerEn,
        contact: contactEn,
      },
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  })
}

export default i18n
