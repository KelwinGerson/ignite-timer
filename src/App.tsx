import { ThemeProvider } from 'styled-components'
import { Button } from "./components/Button";
import { defaultTheme } from './components/styles/themes/default';

export function App() {
  return (
    //import theme default
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="danger"/>
      <Button variant="secondary"/>
      <Button/>
    </ThemeProvider>
  )
}