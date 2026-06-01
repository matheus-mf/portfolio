import { Link } from '@chakra-ui/react'
import type { ComponentType, SVGProps } from 'react'

type SvgIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>

interface SocialLinkProps {
  href: string
  icon: SvgIcon
  label: string
  size?: number
}

export function SocialLink({ href, icon: Icon, label, size = 20 }: SocialLinkProps) {
  if (!href || href.startsWith('[')) return null

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      w={10}
      h={10}
      borderRadius="md"
      color="muted"
      border="1px solid"
      borderColor="border"
      textDecoration="none"
      transition="color 0.15s, border-color 0.15s"
      _hover={{ color: 'accent', borderColor: 'accent-border', textDecoration: 'none' }}
    >
      <Icon size={size} />
    </Link>
  )
}
