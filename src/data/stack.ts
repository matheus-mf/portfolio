import { Code2, Server, Cloud, Database, Sparkles, Wrench } from 'lucide-react'
import type { StackCategory } from '@/types'

export const stackCategories: StackCategory[] = [
  {
    id: 'frontend',
    icon: Code2,
    color: 'oklch(0.63 0.2 272)',
    items: [
      { name: 'React',       key: 'react' },
      { name: 'Next.js',     key: 'nextjs' },
      { name: 'Vue.js',      key: 'vuejs' },
      { name: 'TypeScript',  key: 'typescript' },
      { name: 'Chakra UI',   key: 'chakra-ui' },
      { name: 'Ant Design',  key: 'ant-design' },
      { name: 'TanStack',    key: 'tanstack' },
      { name: 'Storybook',   key: 'storybook' },
      { name: 'Vitest',      key: 'vitest' },
      { name: 'Zod',         key: 'zod' },
    ],
  },
  {
    id: 'backend',
    icon: Server,
    color: 'oklch(0.65 0.2 145)',
    items: [
      { name: 'Node.js',  key: 'nodejs' },
      { name: 'NestJS',   key: 'nestjs' },
      { name: 'Express',  key: 'express' },
      { name: 'Django',   key: 'django' },
      { name: 'REST',     key: 'rest' },
      { name: 'Prisma',   key: 'prisma' },
      { name: 'JWT',      key: 'jwt' },
      { name: 'Jest',     key: 'jest' },
      { name: 'PyTest',   key: 'pytest' },
      { name: 'SOLID',    key: 'solid' },
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    color: 'oklch(0.7 0.18 35)',
    items: [
      { name: 'AWS EC2',         key: 'aws-ec2' },
      { name: 'AWS Lambda',      key: 'aws-lambda' },
      { name: 'AWS S3',          key: 'aws-s3' },
      { name: 'AWS RDS',         key: 'aws-rds' },
      { name: 'AWS CloudWatch',  key: 'aws-cloudwatch' },
      { name: 'AWS EventBridge', key: 'aws-eventbridge' },
      { name: 'AWS IAM',         key: 'aws-iam' },
      { name: 'GitHub Actions',  key: 'github-actions' },
      { name: 'Docker',          key: 'docker' },
    ],
  },
  {
    id: 'database',
    icon: Database,
    color: 'oklch(0.65 0.2 200)',
    items: [
      { name: 'PostgreSQL', key: 'postgresql' },
      { name: 'MariaDB',    key: 'mariadb' },
      { name: 'Redis',      key: 'redis' },
      { name: 'DynamoDB',   key: 'dynamodb' },
      { name: 'Firebase',   key: 'firebase' },
    ],
  },
  {
    id: 'ai',
    icon: Sparkles,
    color: 'oklch(0.65 0.22 320)',
    items: [
      { name: 'Figma Make',    key: 'figma-make' },
      { name: 'Claude API',    key: 'claude-api' },
      { name: 'Lovable',       key: 'lovable' },
      { name: 'Hill Climbing', key: 'hill-climbing' },
    ],
  },
  {
    id: 'tools',
    icon: Wrench,
    color: 'oklch(0.65 0.15 230)',
    items: [
      { name: 'Figma',   key: 'figma' },
      { name: 'Notion',  key: 'notion' },
      { name: 'Swagger', key: 'swagger' },
      { name: 'Sentry',  key: 'sentry' },
    ],
  },
]
