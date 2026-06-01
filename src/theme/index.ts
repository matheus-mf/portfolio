import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          value: { _dark: 'oklch(0.072 0.009 265)', _light: 'oklch(0.072 0.009 265)' },
        },
        fg: {
          value: { _dark: 'oklch(0.93 0.005 265)', _light: 'oklch(0.93 0.005 265)' },
        },
        card: {
          value: { _dark: 'oklch(0.1 0.009 265)', _light: 'oklch(0.1 0.009 265)' },
        },
        'card-secondary': {
          value: { _dark: 'oklch(0.14 0.01 265)', _light: 'oklch(0.14 0.01 265)' },
        },
        muted: {
          value: { _dark: 'oklch(0.52 0.008 265)', _light: 'oklch(0.52 0.008 265)' },
        },
        border: {
          value: { _dark: 'oklch(0.22 0.01 265 / 0.6)', _light: 'oklch(0.22 0.01 265 / 0.6)' },
        },
        accent: {
          value: { _dark: 'oklch(0.63 0.2 272)', _light: 'oklch(0.63 0.2 272)' },
        },
        'accent-dim': {
          value: { _dark: 'oklch(0.63 0.2 272 / 0.15)', _light: 'oklch(0.63 0.2 272 / 0.15)' },
        },
        'accent-border': {
          value: { _dark: 'oklch(0.63 0.2 272 / 0.35)', _light: 'oklch(0.63 0.2 272 / 0.35)' },
        },
      },
    },
  },
})
