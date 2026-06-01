import type { HardSkill, SoftSkill } from '@/types'

export const hardSkills: HardSkill[] = [
  { name: 'React / Next.js',            level: 95, category: 'Frontend'  },
  { name: 'Vue.js',                     level: 88, category: 'Frontend'  },
  { name: 'TypeScript / JavaScript',    level: 92, category: 'Language'  },
  { name: 'Python',                     level: 82, category: 'Language'  },
  { name: 'Node.js / NestJS',           level: 85, category: 'Backend'   },
  { name: 'Django / Express.js',        level: 80, category: 'Backend'   },
  { name: 'PostgreSQL',                 level: 82, category: 'Database'  },
  { name: 'AWS (S3, Lambda, SQS, SNS)', level: 76, category: 'Cloud'     },
  { name: 'Docker',                     level: 78, category: 'DevOps'    },
  { name: 'Git / GitFlow',              level: 90, category: 'DevOps'    },
]

export const softSkills: SoftSkill[] = [
  { key: 'team-leadership'   },
  { key: 'communication'     },
  { key: 'adaptability'      },
  { key: 'problem-solving'   },
  { key: 'agile-methods'     },
  { key: 'systemic-thinking' },
]

export const techTags: string[] = [
  'React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript',
  'HTML5', 'CSS', 'SCSS', 'Bootstrap',
  'Node.js', 'NestJS', 'Express.js', 'Django', 'Python',
  'REST API', 'JWT', 'Swagger',
  'PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis',
  'AWS', 'Lambda', 'S3', 'SQS', 'SNS', 'Serverless',
  'Docker', 'Linux', 'Git', 'GitHub',
  'Scrum', 'TDD', 'Clean Architecture', 'SOLID', 'GitFlow',
]
