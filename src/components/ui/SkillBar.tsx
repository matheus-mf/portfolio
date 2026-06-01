'use client'

import { useRef, useState, useEffect } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import type { HardSkill } from '@/types'

interface SkillBarProps {
  skill: HardSkill
}

export function SkillBar({ skill }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Box ref={ref} mb={4}>
      <Flex justify="space-between" mb={1.5}>
        <Text fontSize="sm" color="fg" fontWeight="medium">
          {skill.name}
        </Text>
        <Text fontSize="xs" fontFamily="mono" color="muted">
          {skill.level}%
        </Text>
      </Flex>
      <Box h={1.5} bg="card-secondary" borderRadius="full" overflow="hidden">
        <Box
          h="full"
          borderRadius="full"
          bg="accent"
          style={{
            width: inView ? `${skill.level}%` : '0%',
            transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </Box>
    </Box>
  )
}
