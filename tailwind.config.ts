import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: '#01bc4f',
        danger: '#bc0111',
      },
    },
    fontFamily: {
      sans: ['Raleway', 'system-ui', 'Arial'],
      serif: ['ui-serif', 'Georgia', 'Times'],
      mono: ['ui-monospace', 'Consolas'],
    },
  },
}
