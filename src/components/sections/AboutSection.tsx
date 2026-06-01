import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { PackageOpen, Target, Globe, HandshakeIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '@/components/ui/SectionHeader'

const START_YEAR = 2019

const pillars = [
  { key: 'value',   icon: PackageOpen    },
  { key: 'product', icon: Target         },
  { key: 'global',  icon: Globe          },
  { key: 'open',    icon: HandshakeIcon  },
]

export function AboutSection() {
  const { t } = useTranslation('about')
  const yearsExp = new Date().getFullYear() - START_YEAR

  const stats = [
    { value: `${yearsExp}+`, key: 'years'     },
    { value: '15+',          key: 'projects'  },
    { value: '4',           key: 'companies' },
    { value: '18+',          key: 'countries' },
  ]

  return (
    <Box as="section" id="about" py={24} px={[4, 6, 8]}>
      <Box maxW="1024px" mx="auto">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
        />

        {/* Bio paragraphs */}
        <Flex direction="column" gap={4} maxW="680px" mx="auto" mb={16} color="muted" lineHeight={1.8} fontSize="md">
          <Text>{t('bio.p1', { years: yearsExp })}</Text>
          <Text>{t('bio.p2')}</Text>
          <Text>{t('bio.p3')}</Text>
        </Flex>

        {/* Stats grid */}
        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
          gap={4}
          mb={16}
        >
          {stats.map(({ value, key }) => (
            <Box
              key={key}
              bg="card"
              border="1px solid"
              borderColor="border"
              borderRadius="xl"
              p={6}
              textAlign="center"
            >
              <Text
                fontSize={['2.5rem', '3rem']}
                fontWeight="bold"
                color="accent"
                fontFamily="mono"
                lineHeight={1}
                mb={2}
              >
                {value}
              </Text>
              <Text fontSize="sm" color="muted">
                {t(`stats.${key}`)}
              </Text>
            </Box>
          ))}
        </Grid>

        {/* Pillars grid */}
        <Grid templateColumns={['1fr', 'repeat(2, 1fr)']} gap={4}>
          {pillars.map(({ key, icon: Icon }) => (
            <Box
              key={key}
              bg="card"
              border="1px solid"
              borderColor="border"
              borderRadius="xl"
              p={6}
              _hover={{ borderColor: 'accent-border' }}
              transition="border-color 0.2s"
            >
              <Flex align="center" gap={3} mb={3}>
                <Box
                  w={9}
                  h={9}
                  borderRadius="md"
                  bg="accent-dim"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="accent"
                >
                  <Icon size={18} />
                </Box>
                <Text fontWeight="semibold" color="fg" fontSize="md">
                  {t(`pillars.${key}.title`)}
                </Text>
              </Flex>
              <Text color="muted" fontSize="sm" lineHeight={1.7}>
                {t(`pillars.${key}.description`)}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
