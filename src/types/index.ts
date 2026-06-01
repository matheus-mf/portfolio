import type { LucideIcon } from 'lucide-react'

export interface Developer {
  name: string
  available: boolean
  email: string
  github: string
  linkedin: string
  instagram?: string
}

export interface Experience {
  id: string
  company: string
  isCurrent: boolean
  employmentType: 'full-time' | 'internship' | 'temporary'
  tech: string[]
  accent: string
  startDate: string
  endDate?: string
}

export interface Project {
  id: string
  tech: string[]
  company: string
  year: string
  status: 'Publicado' | 'Em produção' | 'Open Source' | 'Arquivado' | 'MVP'
  statusColor: string
  gradient: string
  featured: boolean
  github?: string
  demo?: string
}

export interface HardSkill {
  name: string
  level: number
  category: 'Frontend' | 'Language' | 'Backend' | 'Database' | 'Cloud' | 'DevOps' | 'Design'
}

export interface SoftSkill {
  key: string
}

export interface StackCategory {
  id: 'frontend' | 'backend' | 'cloud' | 'database' | 'ai' | 'tools'
  icon: LucideIcon
  color: string
  items: StackItem[]
}

export interface StackItem {
  name: string
  key: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}
