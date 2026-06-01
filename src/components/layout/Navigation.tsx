import { useEffect, useState } from 'react'
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react'
import { Code2, Menu, X, Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'

const navItems = [
  { key: 'about',      href: '#about'      },
  { key: 'skills',     href: '#skills'     },
  { key: 'experience', href: '#experience' },
  { key: 'projects',   href: '#projects'   },
  { key: 'stack',      href: '#stack'      },
  { key: 'contact',    href: '#contact'    },
]

export function Navigation() {
  const { t, i18n } = useTranslation('nav')
  const cvPath = `/cv-${i18n.language}-matheus-ferreira.pdf`
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'stack', 'contact']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-50% 0px -50% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={50}
        px={[4, 6, 8]}
        py={3}
        style={{
          background: scrolled ? 'oklch(0.1 0.009 265 / 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid oklch(0.22 0.01 265 / 0.4)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        }}
      >
        <Flex maxW="1024px" mx="auto" align="center" justify="space-between">
          {/* Brand */}
          <Link
            href="#home"
            onClick={(e: React.MouseEvent) => { e.preventDefault(); handleNavClick('#home') }}
            display="flex"
            alignItems="center"
            gap={2}
            color="fg"
            _hover={{ color: 'accent' }}
            transition="color 0.15s"
          >
            <Code2 size={20} />
            <Text fontFamily="mono" fontWeight="semibold" fontSize="sm">
              matheus.dev
            </Text>
          </Link>

          {/* Desktop nav */}
          <Flex as="nav" display={['none', 'none', 'flex']} align="center" gap={6}>
            {navItems.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                onClick={(e: React.MouseEvent) => { e.preventDefault(); handleNavClick(href) }}
                fontSize="sm"
                color={activeSection === key || (key === 'about' && activeSection === 'home') ? 'accent' : 'muted'}
                fontWeight={activeSection === key ? 'medium' : 'normal'}
                _hover={{ color: 'fg' }}
                transition="color 0.15s"
                style={{ cursor: 'pointer' }}
              >
                {t(key)}
              </Link>
            ))}
          </Flex>

          {/* Desktop CTA */}
          <Box display={['none', 'none', 'flex']} alignItems="center" gap={3}>
            <LanguageSwitcher />
            <Link
              href={cvPath}
              download=""
              display="inline-flex"
              alignItems="center"
              gap={1.5}
              px={3}
              py={1.5}
              fontSize="sm"
              fontWeight="medium"
              color="accent"
              border="1px solid"
              borderColor="accent-border"
              borderRadius="md"
              bg="accent-dim"
              _hover={{ bg: 'accent-border' }}
              transition="background 0.15s"
            >
              <Download size={14} />
              {t('downloadCv')}
            </Link>
          </Box>

          {/* Mobile hamburger */}
          <Button
            type="button"
            display={['flex', 'flex', 'none']}
            alignItems="center"
            justifyContent="center"
            onClick={() => setMenuOpen((o) => !o)}
            color="fg"
            p={1}
            bg="transparent"
            border="none"
            minH="auto"
            minW="auto"
            h="auto"
            _hover={{ bg: 'transparent' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </Flex>
      </Box>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <Box
          position="fixed"
          inset={0}
          zIndex={40}
          bg="oklch(0.072 0.009 265 / 0.98)"
          display={['flex', 'flex', 'none']}
          flexDirection="column"
          pt="80px"
          px={6}
          pb={8}
          style={{ backdropFilter: 'blur(20px)' }}
        >
          <Flex direction="column" gap={2} flex={1}>
            {navItems.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                onClick={(e: React.MouseEvent) => { e.preventDefault(); handleNavClick(href) }}
                px={4}
                py={3}
                fontSize="lg"
                fontWeight="medium"
                color="fg"
                borderRadius="md"
                _hover={{ bg: 'card', color: 'accent' }}
                transition="background 0.15s, color 0.15s"
                style={{ cursor: 'pointer', display: 'block' }}
              >
                {t(key)}
              </Link>
            ))}
          </Flex>
          <Flex justify="center" mt={4}>
            <LanguageSwitcher />
          </Flex>
          <Link
            href={cvPath}
            download=""
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            px={4}
            py={3}
            mt={3}
            fontSize="md"
            fontWeight="medium"
            color="accent"
            border="1px solid"
            borderColor="accent-border"
            borderRadius="md"
            bg="accent-dim"
          >
            <Download size={16} />
            {t('downloadCv')}
          </Link>
        </Box>
      )}
    </>
  )
}
