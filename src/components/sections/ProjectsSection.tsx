import { useState } from 'react'
import { Box, Button, Flex, Grid, Link, Text } from '@chakra-ui/react'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TechTag } from '@/components/ui/TechTag'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { GithubIcon } from '@/components/ui/SocialIcons'
import type { Project } from '@/types'

type Filter = 'all' | 'featured'

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useTranslation('projects')
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'featured' ? projects.filter((p) => p.featured) : projects

  return (
    <Box as="section" id="projects" py={24} px={[4, 6, 8]}>
      <Box maxW="1024px" mx="auto">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
        />

        {/* Filter toggle */}
        <Flex justify="center" gap={2} mb={10}>
          {(['all', 'featured'] as Filter[]).map((f) => (
            <Button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              px={4}
              py={2}
              fontSize="sm"
              fontWeight="medium"
              borderRadius="md"
              border="1px solid"
              borderColor={filter === f ? 'accent-border' : 'border'}
              color={filter === f ? 'accent' : 'muted'}
              bg={filter === f ? 'accent-dim' : 'transparent'}
              minH="auto"
              h="auto"
              _hover={{ borderColor: 'accent-border', color: 'accent', bg: filter === f ? 'accent-dim' : 'transparent' }}
              transition="all 0.15s"
            >
              {t(`filters.${f}`)}
            </Button>
          ))}
        </Flex>

        {/* Projects grid */}
        <Grid
          templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
          gap={4}
        >
          {filtered.map((project) => (
            <Box
              key={project.id}
              bg="card"
              border="1px solid"
              borderColor="border"
              borderRadius="xl"
              overflow="hidden"
              display="flex"
              flexDirection="column"
              _hover={{ borderColor: 'accent-border', transform: 'translateY(-2px)' }}
              transition="border-color 0.2s, transform 0.2s"
            >
              {/* Gradient top strip */}
              <Box
                h="3px"
                style={{ background: project.gradient }}
              />

              {/* Card body */}
              <Box p={5} flex={1} display="flex" flexDirection="column">
                {/* Status badge */}
                <Flex justify="flex-end" mb={3}>
                  <StatusBadge status={project.status} />
                </Flex>

                <Text fontWeight="bold" color="fg" fontSize="lg" mb={1} lineHeight={1.3}>
                  {t(`items.${project.id}.name`)}
                </Text>

                <Flex gap={2} mb={3}>
                  <Text fontSize="xs" fontFamily="mono" color="muted">
                    {project.company}
                  </Text>
                  <Text fontSize="xs" fontFamily="mono" color="muted">·</Text>
                  <Text fontSize="xs" fontFamily="mono" color="muted">
                    {project.year}
                  </Text>
                </Flex>

                <Text fontSize="sm" color="muted" lineHeight={1.6} mb={4} flex={1}>
                  {t(`items.${project.id}.description`)}
                </Text>

                {/* Tech tags */}
                <Flex flexWrap="wrap" gap={1.5} mb={4}>
                  {project.tech.map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </Flex>

                {/* Links */}
                {(project.github || project.demo) && (
                  <Flex gap={3} borderTop="1px solid" borderColor="border" pt={4}>
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        display="flex"
                        alignItems="center"
                        gap={1.5}
                        fontSize="xs"
                        color="muted"
                        _hover={{ color: 'fg' }}
                        transition="color 0.15s"
                      >
                        <GithubIcon size={13} />
                        {t('links.github')}
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        display="flex"
                        alignItems="center"
                        gap={1.5}
                        fontSize="xs"
                        color="muted"
                        _hover={{ color: 'accent' }}
                        transition="color 0.15s"
                      >
                        <ExternalLink size={13} />
                        {t('links.demo')}
                      </Link>
                    )}
                  </Flex>
                )}
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
