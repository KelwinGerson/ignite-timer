import 'styled-components'
import { defaultTheme } from '../components/styles/themes/default'

type ThemeType = typeof defaultTheme

// sobreescrevendo tipagem já existente
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
