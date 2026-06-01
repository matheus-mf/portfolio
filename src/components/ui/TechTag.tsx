import { Box } from '@chakra-ui/react'

interface TechTagProps {
  label: string
  size?: 'sm' | 'md'
}

export function TechTag({ label, size = 'sm' }: TechTagProps) {
  return (
    <Box
      as="span"
      display="inline-block"
      px={size === 'sm' ? 2 : 3}
      py={size === 'sm' ? 0.5 : 1}
      fontSize="xs"
      fontFamily="mono"
      color="fg"
      bg="accent-dim"
      border="1px solid"
      borderColor="accent-border"
      borderRadius="sm"
      transition="background 0.15s, border-color 0.15s"
      _hover={{ bg: 'accent-border', borderColor: 'accent' }}
      cursor="default"
    >
      {label}
    </Box>
  )
}
