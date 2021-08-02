import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

import GlobalStyles from './styles/globals'
import theme from './styles/theme'

import { PERSIST_AUTH_STATE } from './store/ducks/auth'
import { auth } from './services/firebase'

import './services/firebase'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) dispatch({ type: PERSIST_AUTH_STATE, payload: user })
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Router>
          <Switch>
            {isLoading || (
              <Route exact path='/'>
                {isAuthenticated ? <Home /> : <Redirect to='/login' />}
              </Route>
            )}
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
