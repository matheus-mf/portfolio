import { intervalToDuration, formatDuration } from 'date-fns'
import { ptBR } from 'date-fns/locale'

function parseLocalDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export function calcExperienceDuration(startDate: string, endDate?: string): string {
  const start = parseLocalDate(startDate)
  const end = endDate ? parseLocalDate(endDate) : new Date()

  const duration = intervalToDuration({ start, end })

  const formatted = formatDuration(duration, {
    format: ['years', 'months'],
    locale: ptBR,
    delimiter: ' e ',
  })

  return formatted || '< 1 mês'
}
