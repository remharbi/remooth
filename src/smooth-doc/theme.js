// src/smooth-doc/theme.js
import { theme as baseTheme, primaryColor } from 'smooth-doc/src/theme'
import Dracula from 'prism-react-renderer/themes/dracula'

export const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...primaryColor('purple'),
  },
  'prism-theme': Dracula,
}