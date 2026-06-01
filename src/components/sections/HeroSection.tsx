import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { MapPin, Mail, ArrowDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AvailableBadge } from '@/components/ui/AvailableBadge'
import { TechTag } from '@/components/ui/TechTag'
import { SocialLink } from '@/components/ui/SocialLink'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/SocialIcons'
import type { Developer } from '@/types'

interface HeroSectionProps {
  developer: Developer
}

export function HeroSection({ developer }: HeroSectionProps) {
  const { t, i18n } = useTranslation('hero')
  const cvPath = `/cv-${i18n.language}-matheus-ferreira.pdf`
  const yearsExp = new Date().getFullYear() - 2019

  const previewTags = ['React', 'TypeScript', 'Next.js', 'Node.js', 'AWS', 'PostgreSQL']

  const handleScroll = (href: string) => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      as="section"
      id="home"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
      px={[4, 6, 8]}
      pt="80px"
    >
      {/* Background grid */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        style={{
          backgroundImage:
            'linear-gradient(oklch(0.22 0.01 265 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.22 0.01 265 / 0.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Orb top-right */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        w="500px"
        h="500px"
        borderRadius="full"
        zIndex={0}
        pointerEvents="none"
        style={{
          background: 'radial-gradient(circle, oklch(0.63 0.2 272 / 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Orb bottom-left */}
      <Box
        position="absolute"
        bottom="-80px"
        left="-80px"
        w="350px"
        h="350px"
        borderRadius="full"
        zIndex={0}
        pointerEvents="none"
        style={{
          background: 'radial-gradient(circle, oklch(0.65 0.2 145 / 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <Box position="relative" zIndex={1} maxW="1024px" mx="auto" w="full" py={16}>
        <Flex direction="column" align="flex-start" gap={6} maxW="720px">
          <AvailableBadge />

          <Heading
            as="h1"
            fontWeight="bold"
            lineHeight={1.1}
            letterSpacing="-0.03em"
            color="fg"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            {developer.name}
          </Heading>

          <Text
            fontSize={['lg', 'xl', '2xl']}
            color="muted"
            fontWeight="medium"
            letterSpacing="-0.01em"
          >
            {t('title')}
          </Text>

          <Text color="muted" fontSize={['md', 'lg']} lineHeight={1.7} maxW="580px">
            {t('bio', { years: yearsExp })}
          </Text>

          <Flex align="center" gap={2} color="muted" fontSize="sm">
            <MapPin size={14} />
            <Text>{t('location')}</Text>
          </Flex>

          {/* Tech tags */}
          <Flex flexWrap="wrap" gap={2}>
            {previewTags.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </Flex>

          {/* CTAs */}
          <Flex gap={3} flexWrap="wrap">
            <Link
              href="#projects"
              onClick={(e: React.MouseEvent) => { e.preventDefault(); handleScroll('#projects') }}
              px={5}
              py={2.5}
              fontSize="sm"
              fontWeight="semibold"
              color="bg"
              bg="accent"
              borderRadius="md"
              _hover={{ opacity: 0.9, transform: 'scale(1.02)' }}
              transition="opacity 0.15s, transform 0.15s"
              style={{ cursor: 'pointer' }}
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href={cvPath}
              download=""
              px={5}
              py={2.5}
              fontSize="sm"
              fontWeight="medium"
              color="fg"
              border="1px solid"
              borderColor="border"
              borderRadius="md"
              _hover={{ borderColor: 'accent-border', color: 'accent' }}
              transition="border-color 0.15s, color 0.15s"
            >
              {t('ctaSecondary')}
            </Link>
          </Flex>

          {/* Social links */}
          <Flex gap={2} align="center">
            <SocialLink href={developer.github} icon={GithubIcon} label="GitHub" />
            <SocialLink href={developer.linkedin} icon={LinkedinIcon} label="LinkedIn" />
            {developer.instagram && (
              <SocialLink href={developer.instagram} icon={InstagramIcon} label="Instagram" />
            )}
            <SocialLink href={`mailto:${developer.email}`} icon={Mail as any} label="Email direto" />
          </Flex>
        </Flex>

        {/* Scroll cue */}
        <Flex
          position="absolute"
          bottom={8}
          left="50%"
          style={{ transform: 'translateX(-50%)' }}
          direction="column"
          align="center"
          gap={1}
          color="muted"
          display={['none', 'none', 'flex']}
        >
          <Text fontSize="xs" fontFamily="mono">
            {t('scrollCue')}
          </Text>
          <Box style={{ animation: 'bounce 1.6s infinite' }}>
            <ArrowDown size={16} />
          </Box>
        </Flex>
      </Box>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </Box>
  )
}
