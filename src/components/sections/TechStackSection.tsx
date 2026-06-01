import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { StackCategory } from '@/types'

interface TechStackSectionProps {
  categories: StackCategory[]
}

export function TechStackSection({ categories }: TechStackSectionProps) {
  const { t } = useTranslation('stack')

  return (
    <Box as="section" id="stack" py={24} px={[4, 6, 8]}>
      <Box maxW="1024px" mx="auto">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
        />

        <Grid
          templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
          gap={4}
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Box
                key={cat.id}
                bg="card"
                border="1px solid"
                borderColor="border"
                borderRadius="xl"
                p={6}
                _hover={{ borderColor: 'accent-border' }}
                transition="border-color 0.2s"
              >
                {/* Header */}
                <Flex align="center" gap={3} mb={2}>
                  <Box
                    w={9}
                    h={9}
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    style={{
                      background: cat.color.replace(')', ' / 0.12)').replace('oklch(', 'oklch('),
                      color: cat.color,
                    }}
                  >
                    <Icon size={18} />
                  </Box>
                  <Text fontWeight="semibold" color="fg">
                    {t(`categories.${cat.id}.label`)}
                  </Text>
                </Flex>

                <Text fontSize="sm" color="muted" mb={4} lineHeight={1.6}>
                  {t(`categories.${cat.id}.description`)}
                </Text>

                <Box h="1px" bg="border" mb={4} />

                {/* Items list */}
                <Flex direction="column" gap={2}>
                  {cat.items.map((item) => (
                    <Flex key={item.name} justify="space-between" align="center">
                      <Text fontSize="sm" color="fg" fontWeight="medium">
                        {item.name}
                      </Text>
                      <Text fontSize="xs" fontFamily="mono" color="muted">
                        {t(`categories.${cat.id}.items.${item.key}`)}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}
