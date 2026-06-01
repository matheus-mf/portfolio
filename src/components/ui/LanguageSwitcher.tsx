import { Button, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const LANGS = ['pt', 'en'] as const
type Lang = (typeof LANGS)[number]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language as Lang

  const switchTo = (lang: Lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }

  return (
    <Flex
      border="1px solid"
      borderColor="border"
      borderRadius="md"
      overflow="hidden"
      flexShrink={0}
    >
      {LANGS.map((lang) => {
        const isActive = current === lang
        return (
          <Button
            key={lang}
            onClick={() => switchTo(lang)}
            px={2}
            py={0}
            h="28px"
            minH="auto"
            minW="auto"
            fontSize="xs"
            fontWeight="semibold"
            fontFamily="mono"
            letterSpacing="wide"
            bg={isActive ? 'accent-dim' : 'transparent'}
            color={isActive ? 'accent' : 'muted'}
            borderRadius={0}
            border="none"
            _hover={{ color: isActive ? 'accent' : 'fg', bg: isActive ? 'accent-dim' : 'card' }}
            transition="color 0.15s, background 0.15s"
            cursor={isActive ? 'default' : 'pointer'}
          >
            {lang.toUpperCase()}
          </Button>
        )
      })}
    </Flex>
  )
}
