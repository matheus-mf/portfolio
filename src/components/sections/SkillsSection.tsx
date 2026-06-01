import { useState } from 'react'
import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SkillBar } from '@/components/ui/SkillBar'
import { TechTag } from '@/components/ui/TechTag'
import type { HardSkill, SoftSkill } from '@/types'

type Tab = 'hard' | 'soft' | 'tags'

interface SkillsSectionProps {
  hardSkills: HardSkill[]
  softSkills: SoftSkill[]
  techTags: string[]
}

export function SkillsSection({ hardSkills, softSkills, techTags }: SkillsSectionProps) {
  const { t } = useTranslation('skills')
  const [activeTab, setActiveTab] = useState<Tab>('hard')

  const tabs: { key: Tab }[] = [
    { key: 'hard' },
    { key: 'soft' },
    { key: 'tags' },
  ]

  const categories = Array.from(new Set(hardSkills.map((s) => s.category)))

  return (
    <Box as="section" id="skills" py={24} px={[4, 6, 8]}>
      <Box maxW="1024px" mx="auto">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
        />

        {/* Tabs */}
        <Flex justify="center" gap={2} mb={10}>
          {tabs.map(({ key }) => (
            <Button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              px={4}
              py={2}
              fontSize="sm"
              fontWeight="medium"
              borderRadius="md"
              border="1px solid"
              borderColor={activeTab === key ? 'accent-border' : 'border'}
              color={activeTab === key ? 'accent' : 'muted'}
              bg={activeTab === key ? 'accent-dim' : 'transparent'}
              minH="auto"
              h="auto"
              _hover={{ borderColor: 'accent-border', color: 'accent', bg: activeTab === key ? 'accent-dim' : 'transparent' }}
              transition="all 0.15s"
            >
              {t(`tabs.${key}`)}
            </Button>
          ))}
        </Flex>

        {/* Hard skills */}
        {activeTab === 'hard' && (
          <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={8}>
            {categories.map((cat) => (
              <Box key={cat}>
                <Text
                  fontSize="xs"
                  fontFamily="mono"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  color="accent"
                  mb={4}
                  fontWeight="semibold"
                >
                  {t(`categories.${cat}`)}
                </Text>
                {hardSkills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
              </Box>
            ))}
          </Grid>
        )}

        {/* Soft skills */}
        {activeTab === 'soft' && (
          <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={4}>
            {softSkills.map((skill) => (
              <Box
                key={skill.key}
                bg="card"
                border="1px solid"
                borderColor="border"
                borderRadius="xl"
                p={5}
                _hover={{ borderColor: 'accent-border' }}
                transition="border-color 0.2s"
              >
                <Text fontWeight="semibold" color="fg" mb={2}>
                  {t(`softSkills.${skill.key}.name`)}
                </Text>
                <Text fontSize="sm" color="muted" lineHeight={1.6}>
                  {t(`softSkills.${skill.key}.description`)}
                </Text>
              </Box>
            ))}
          </Grid>
        )}

        {/* Tech tags */}
        {activeTab === 'tags' && (
          <Flex flexWrap="wrap" gap={2} justify="center">
            {techTags.map((tag) => (
              <TechTag key={tag} label={tag} size="md" />
            ))}
          </Flex>
        )}
      </Box>
    </Box>
  )
}
