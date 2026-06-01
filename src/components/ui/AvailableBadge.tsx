import { Box, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export function AvailableBadge() {
  const { t } = useTranslation('hero')

  return (
    <Flex
      display="inline-flex"
      alignItems="center"
      gap={2}
      px={3}
      py={1.5}
      borderRadius="full"
      border="1px solid"
      borderColor="oklch(0.45 0.2 145 / 0.4)"
      bg="oklch(0.35 0.15 145 / 0.15)"
    >
      <Box
        w={2}
        h={2}
        borderRadius="full"
        bg="oklch(0.65 0.2 145)"
        style={{ animation: 'pulse 2s infinite' }}
      />
      <Text fontSize="xs" fontFamily="mono" color="oklch(0.75 0.15 145)" fontWeight="medium">
        {t('available')}
      </Text>
    </Flex>
  )
}
