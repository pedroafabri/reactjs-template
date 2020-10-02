import React from 'react'
import { ThemeProvider } from 'styled-components'

import Root from './Root'
import { theme } from './theme/default'

const App = () => (
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>
)

export default App
