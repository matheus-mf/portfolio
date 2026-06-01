import { useState } from 'react'
import { Box, Button, Flex, Grid, Input, Link, Textarea, Text, chakra } from '@chakra-ui/react'

const Form = chakra('form')
const Label = chakra('label')
import { Mail, CheckCircle, Send, AlertCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AvailableBadge } from '@/components/ui/AvailableBadge'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/SocialIcons'
import type { Developer, ContactFormData, ContactFormErrors } from '@/types'

const fieldStyle = {
  w: 'full',
  display: 'block',
  px: 4,
  py: 3,
  bg: 'card',
  border: '1px solid',
  borderColor: 'border',
  borderRadius: 'md',
  color: 'fg',
  fontSize: 'sm',
  outline: 'none',
  transition: 'border-color 0.15s',
  _focus: { borderColor: 'accent' },
  _placeholder: { color: 'muted' },
} as const

interface ContactSectionProps {
  developer: Developer
}

export function ContactSection({ developer }: ContactSectionProps) {
  const { t } = useTranslation('contact')

  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  function validate(): boolean {
    const newErrors: ContactFormErrors = {}
    if (!form.name.trim()) newErrors.name = t('form.errors.nameRequired')
    if (!form.email.trim()) newErrors.email = t('form.errors.emailRequired')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = t('form.errors.emailInvalid')
    if (!form.message.trim()) newErrors.message = t('form.errors.messageRequired')
    else if (form.message.length > 1000) newErrors.message = t('form.errors.messageTooLong')
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const socials = [
    { href: developer.github,    Icon: GithubIcon,    key: 'github',    handle: 'matheus-mf'                 },
    { href: developer.linkedin,  Icon: LinkedinIcon,  key: 'linkedin',  handle: 'matheus-m-ferreira'         },
    ...(developer.instagram
      ? [{ href: developer.instagram, Icon: InstagramIcon, key: 'instagram', handle: 'matheusmoreiraferreira' }]
      : []),
    { href: `mailto:${developer.email}`, Icon: Mail as any, key: 'email', handle: developer.email },
  ]

  return (
    <Box as="section" id="contact" py={24} px={[4, 6, 8]}>
      <Box maxW="1024px" mx="auto">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={8} alignItems="flex-start">
          {/* Form column */}
          <Box>
            {status === 'success' ? (
              <Box
                bg="card"
                border="1px solid"
                borderColor="oklch(0.45 0.2 145 / 0.4)"
                borderRadius="xl"
                p={8}
                textAlign="center"
              >
                <Box color="oklch(0.65 0.2 145)" mb={4} display="flex" justifyContent="center">
                  <CheckCircle size={48} />
                </Box>
                <Text fontWeight="semibold" color="fg" fontSize="lg">
                  {t('form.success')}
                </Text>
              </Box>
            ) : status === 'error' ? (
              <Box
                bg="card"
                border="1px solid"
                borderColor="oklch(0.45 0.2 20 / 0.4)"
                borderRadius="xl"
                p={8}
                textAlign="center"
              >
                <Box color="oklch(0.65 0.2 20)" mb={4} display="flex" justifyContent="center">
                  <AlertCircle size={48} />
                </Box>
                <Text fontWeight="semibold" color="fg" fontSize="lg" mb={2}>
                  {t('form.errorTitle')}
                </Text>
                <Text fontSize="sm" color="muted" mb={6}>
                  {t('form.errorBody')}
                </Text>
                <Button
                  onClick={() => setStatus('idle')}
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  px={5}
                  py={2.5}
                  h="auto"
                  minH="auto"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="bg"
                  bg="accent"
                  borderRadius="md"
                  _hover={{ opacity: 0.9, bg: 'accent' }}
                  transition="opacity 0.15s"
                >
                  {t('form.retry')}
                </Button>
              </Box>
            ) : (
              <Form
                onSubmit={handleSubmit}
                bg="card"
                border="1px solid"
                borderColor="border"
                borderRadius="xl"
                p={6}
                display="flex"
                flexDirection="column"
                gap={4}
              >
                {/* Name */}
                <Box>
                  <Label htmlFor="contact-name" fontSize="sm" color="fg" fontWeight="medium" mb={1.5} display="block">
                    {t('form.name')}
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder={t('form.namePlaceholder')}
                    value={form.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    {...fieldStyle}
                  />
                  {errors.name && (
                    <Text fontSize="xs" color="red.400" mt={1}>{errors.name}</Text>
                  )}
                </Box>

                {/* Email */}
                <Box>
                  <Label htmlFor="contact-email" fontSize="sm" color="fg" fontWeight="medium" mb={1.5} display="block">
                    {t('form.email')}
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder={t('form.emailPlaceholder')}
                    value={form.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    {...fieldStyle}
                  />
                  {errors.email && (
                    <Text fontSize="xs" color="red.400" mt={1}>{errors.email}</Text>
                  )}
                </Box>

                {/* Message */}
                <Box>
                  <Flex justify="space-between" mb={1.5}>
                    <Label htmlFor="contact-message" fontSize="sm" color="fg" fontWeight="medium">
                      {t('form.message')}
                    </Label>
                    <Text fontSize="xs" fontFamily="mono" color="muted">
                      {form.message.length}/1000
                    </Text>
                  </Flex>
                  <Textarea
                    id="contact-message"
                    rows={5}
                    placeholder={t('form.messagePlaceholder')}
                    value={form.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    {...fieldStyle}
                    style={{ resize: 'vertical' }}
                  />
                  {errors.message && (
                    <Text fontSize="xs" color="red.400" mt={1}>{errors.message}</Text>
                  )}
                </Box>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                  w="full"
                  py={3}
                  h="auto"
                  minH="auto"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="bg"
                  bg="accent"
                  borderRadius="md"
                  _hover={{ opacity: 0.9, bg: 'accent' }}
                  transition="opacity 0.15s"
                  style={{
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    opacity: status === 'sending' ? 0.7 : 1,
                  }}
                >
                  <Send size={14} />
                  {status === 'sending' ? t('form.sending') : t('form.submit')}
                </Button>
              </Form>
            )}
          </Box>

          {/* Social cards column */}
          <Flex direction="column" gap={4}>
            {developer.available && (
              <Box mb={2}>
                <AvailableBadge />
              </Box>
            )}
            {socials.map(({ href, Icon, key, handle }) => (
              <Link
                key={key}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                bg="card"
                border="1px solid"
                borderColor="border"
                borderRadius="xl"
                p={4}
                display="flex"
                alignItems="center"
                gap={4}
                _hover={{ borderColor: 'accent-border' }}
                transition="border-color 0.2s"
              >
                <Box
                  w={10}
                  h={10}
                  borderRadius="md"
                  bg="accent-dim"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="accent"
                  flexShrink={0}
                >
                  <Icon size={18} />
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="fg" fontSize="sm">
                    {t(`socials.${key}`)}
                  </Text>
                  <Text fontSize="xs" fontFamily="mono" color="muted">
                    {handle}
                  </Text>
                </Box>
              </Link>
            ))}
          </Flex>
        </Grid>
      </Box>
    </Box>
  )
}
