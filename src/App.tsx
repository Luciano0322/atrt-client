import { MantineProvider } from '@mantine/core';
import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './pages/RoutesConfig';

const App: FC = () => {
  return (
    <Router>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <RoutesConfig />
      </MantineProvider>
    </Router>
  )
}

export default App
