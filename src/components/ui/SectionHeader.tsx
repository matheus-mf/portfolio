import { Box, Heading, Text } from '@chakra-ui/react'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <Box mb={12} textAlign="center">
      <Text
        fontSize="xs"
        fontFamily="mono"
        textTransform="uppercase"
        letterSpacing="wider"
        color="accent"
        mb={3}
        fontWeight="semibold"
      >
        {eyebrow}
      </Text>
      <Heading
        as="h2"
        fontSize={['2rem', '2.5rem', '3rem']}
        color="fg"
        fontWeight="bold"
        lineHeight={1.2}
        letterSpacing="-0.025em"
        mb={subtitle ? 4 : 0}
      >
        {title}
      </Heading>
      {subtitle && (
        <Text color="muted" fontSize={['md', 'lg']} maxW="600px" mx="auto">
          {subtitle}
        </Text>
      )}
    </Box>
  )
}
