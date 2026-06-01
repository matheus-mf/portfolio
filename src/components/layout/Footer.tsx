import { Box, Flex, Grid, Link, Text } from '@chakra-ui/react'
import { Code2, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SocialLink } from '@/components/ui/SocialLink'
import { AvailableBadge } from '@/components/ui/AvailableBadge'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/SocialIcons'
import type { Developer } from '@/types'

const navItems = [
  { key: 'about',      href: '#about'      },
  { key: 'skills',     href: '#skills'     },
  { key: 'experience', href: '#experience' },
  { key: 'projects',   href: '#projects'   },
  { key: 'stack',      href: '#stack'      },
  { key: 'contact',    href: '#contact'    },
]

interface FooterProps {
  developer: Developer
}

export function Footer({ developer }: FooterProps) {
  const { t } = useTranslation('footer')
  const { t: tn } = useTranslation('nav')

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="border"
      py={12}
      px={[4, 6, 8]}
      mt={16}
    >
      <Box maxW="1024px" mx="auto">
        <Grid templateColumns={['1fr', '1fr', '2fr 1fr 1fr']} gap={8} mb={10}>
          {/* Brand + bio */}
          <Box>
            <Flex align="center" gap={2} mb={3} color="fg">
              <Code2 size={20} />
              <Text fontFamily="mono" fontWeight="semibold">
                matheus.dev
              </Text>
            </Flex>
            <Text color="muted" fontSize="sm" mb={4} maxW="280px" lineHeight={1.6}>
              {t('tagline')}
            </Text>
            <Flex gap={2} mb={4}>
              <SocialLink href={developer.github} icon={GithubIcon} label="GitHub" />
              <SocialLink href={developer.linkedin} icon={LinkedinIcon} label="LinkedIn" />
              {developer.instagram && (
                <SocialLink href={developer.instagram} icon={InstagramIcon} label="Instagram" />
              )}
              <SocialLink href={`mailto:${developer.email}`} icon={Mail as any} label="Email" />
            </Flex>
            {developer.available && <AvailableBadge />}
          </Box>

          {/* Nav links */}
          <Box>
            <Text fontSize="xs" fontFamily="mono" textTransform="uppercase" letterSpacing="wider" color="muted" mb={4} fontWeight="semibold">
              {t('navHeading')}
            </Text>
            <Flex direction="column" gap={2}>
              {navItems.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  onClick={(e: React.MouseEvent) => { e.preventDefault(); handleNavClick(href) }}
                  fontSize="sm"
                  color="muted"
                  _hover={{ color: 'fg' }}
                  transition="color 0.15s"
                  style={{ cursor: 'pointer' }}
                >
                  {tn(key)}
                </Link>
              ))}
            </Flex>
          </Box>

          {/* Contact info */}
          <Box>
            <Text fontSize="xs" fontFamily="mono" textTransform="uppercase" letterSpacing="wider" color="muted" mb={4} fontWeight="semibold">
              {t('contactHeading')}
            </Text>
            <Flex direction="column" gap={2}>
              <Link href={`mailto:${developer.email}`} fontSize="sm" color="muted" textDecoration="none" _hover={{ color: 'accent', textDecoration: 'none' }} transition="color 0.15s">
                {developer.email}
              </Link>
              <Text fontSize="sm" color="muted">
                {t('location')}
              </Text>
            </Flex>
          </Box>
        </Grid>

        {/* Bottom bar */}
        <Box borderTop="1px solid" borderColor="border" pt={6}>
          <Flex
            direction={['column', 'row']}
            justify="space-between"
            align={['flex-start', 'center']}
            gap={2}
          >
            <Text fontSize="xs" color="muted" fontFamily="mono">
              © {new Date().getFullYear()} {developer.name} — {t('copyright')}
            </Text>
            <Text fontSize="xs" color="muted" fontFamily="mono">
              {t('builtWith')}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
