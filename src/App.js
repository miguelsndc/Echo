import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

import GlobalStyles from './styles/globals'
import theme from './styles/theme'

import { PERSIST_AUTH_STATE } from './store/ducks/auth'

import './services/firebase'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('echo/user'))
    if (user) dispatch({ type: PERSIST_AUTH_STATE, payload: { user } })
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </Router>
      </main>
    </ThemeProvider>
  )
}

export default App
