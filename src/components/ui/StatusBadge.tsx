import { Box } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import type { Project } from '@/types'

const statusKeyMap: Record<Project['status'], string> = {
  'Publicado':   'publicado',
  'Em produção': 'em-producao',
  'Open Source': 'open-source',
  'MVP':         'mvp',
  'Arquivado':   'arquivado',
}

const statusColorMap: Record<Project['status'], string> = {
  'Publicado':   'oklch(0.65 0.2 145)',
  'Em produção': 'oklch(0.65 0.2 145)',
  'Open Source': 'oklch(0.63 0.2 272)',
  'MVP':         'oklch(0.7 0.18 55)',
  'Arquivado':   'oklch(0.45 0.01 265)',
}

interface StatusBadgeProps {
  status: Project['status']
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { t } = useTranslation('projects')
  const color = statusColorMap[status]
  const key = statusKeyMap[status]

  return (
    <Box
      as="span"
      display="inline-flex"
      alignItems="center"
      gap={1.5}
      px={2.5}
      py={1}
      fontSize="xs"
      fontFamily="mono"
      fontWeight="medium"
      borderRadius="full"
      border="1px solid"
      style={{
        color,
        borderColor: color.replace(')', ' / 0.4)').replace('oklch(', 'oklch('),
        backgroundColor: color.replace(')', ' / 0.1)').replace('oklch(', 'oklch('),
      }}
    >
      <Box
        as="span"
        display="inline-block"
        w={1.5}
        h={1.5}
        borderRadius="full"
        style={{ backgroundColor: color }}
      />
      {t(`status.${key}`)}
    </Box>
  )
}
