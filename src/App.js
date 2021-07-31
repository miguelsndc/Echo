import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from './pages/Home'
import Login from './pages/Login'

import GlobalStyles from './styles/globals'
import theme from './styles/theme'

import './services/firebase'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </main>
    </ThemeProvider>
  )
}

export default App
