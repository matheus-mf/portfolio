import { Box, Flex, Text } from '@chakra-ui/react'
import { MapPin, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TechTag } from '@/components/ui/TechTag'
import { calcExperienceDuration } from '@/lib/formatDuration'
import type { Experience } from '@/types'

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const { t } = useTranslation('experiences')
  const employmentLabel: Record<string, string> = {
    'full-time': t('fullTime'),
    'internship': t('internship'),
    'temporary': t('temporary'),
  }

  return (
    <Box as="section" id="experience" py={24} px={[4, 6, 8]}>
      <Box maxW="1024px" mx="auto">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
        />

        <Box position="relative">
          {/* Timeline line (hidden on mobile) */}
          <Box
            display={['none', 'none', 'block']}
            position="absolute"
            left="11px"
            top={0}
            bottom={0}
            w="1px"
            bg="border"
          />

          <Flex direction="column" gap={6}>
            {experiences.map((exp) => {
              const isCurrent = exp.isCurrent

              return (
                <Flex key={exp.id} gap={[0, 0, 6]} align="flex-start">
                  {/* Timeline dot */}
                  <Box
                    display={['none', 'none', 'block']}
                    flexShrink={0}
                    mt={6}
                    position="relative"
                    zIndex={1}
                  >
                    <Box
                      w={6}
                      h={6}
                      borderRadius="full"
                      border="2px solid"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      style={{
                        borderColor: exp.accent,
                        background: `${exp.accent.replace(')', ' / 0.15)').replace('oklch(', 'oklch(')}`,
                      }}
                    >
                      <Box
                        w={2.5}
                        h={2.5}
                        borderRadius="full"
                        style={{ background: exp.accent }}
                      />
                    </Box>
                  </Box>

                  {/* Card */}
                  <Box
                    flex={1}
                    bg="card"
                    border="1px solid"
                    borderColor="border"
                    borderRadius="xl"
                    p={6}
                    _hover={{ borderColor: 'accent-border' }}
                    transition="border-color 0.2s"
                  >
                    {/* Header */}
                    <Flex justify="space-between" align="flex-start" mb={1} flexWrap="wrap" gap={2}>
                      <Flex align="center" gap={2}>
                        <Text fontWeight="bold" color="fg" fontSize="lg">
                          {exp.company}
                        </Text>
                        {isCurrent && (
                          <Box
                            px={2}
                            py={0.5}
                            fontSize="xs"
                            fontFamily="mono"
                            fontWeight="medium"
                            borderRadius="full"
                            color="oklch(0.75 0.15 145)"
                            bg="oklch(0.35 0.15 145 / 0.2)"
                            border="1px solid"
                            borderColor="oklch(0.45 0.2 145 / 0.4)"
                          >
                            {t('current')}
                          </Box>
                        )}
                      </Flex>
                    </Flex>

                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      mb={2}
                      style={{ color: exp.accent }}
                    >
                      {t(`${exp.id}.role`)}
                    </Text>

                    {/* Meta */}
                    <Flex align="center" gap={3} flexWrap="wrap" mb={1}>
                      <Text fontSize="sm" color="muted" fontFamily="mono">
                        {t(`${exp.id}.period`)}
                      </Text>
                      <Box
                        px={2}
                        py={0.5}
                        fontSize="xs"
                        fontFamily="mono"
                        color="muted"
                        bg="card-secondary"
                        borderRadius="sm"
                      >
                        {calcExperienceDuration(exp.startDate, exp.endDate)}
                      </Box>
                      <Flex align="center" gap={1} color="muted" fontSize="sm">
                        <MapPin size={12} />
                        <Text>{t(`${exp.id}.location`)}</Text>
                      </Flex>
                    </Flex>

                    <Text fontSize="xs" color="muted" fontFamily="mono" mb={4}>
                      {employmentLabel[exp.employmentType]}
                    </Text>

                    {/* Divider */}
                    <Box h="1px" bg="border" mb={4} />

                    {/* Highlights */}
                    <Flex direction="column" gap={2} mb={4}>
                      {(t(`${exp.id}.highlights`, { returnObjects: true }) as string[]).map((highlight, i) => (
                        <Flex key={i} align="flex-start" gap={2}>
                          <Box color="accent" mt={0.5} flexShrink={0}>
                            <ChevronRight size={14} />
                          </Box>
                          <Text fontSize="sm" color="muted" lineHeight={1.6}>
                            {highlight}
                          </Text>
                        </Flex>
                      ))}
                    </Flex>

                    {/* Tech tags */}
                    <Flex flexWrap="wrap" gap={1.5}>
                      {exp.tech.map((tag) => (
                        <TechTag key={tag} label={tag} />
                      ))}
                    </Flex>
                  </Box>
                </Flex>
              )
            })}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
