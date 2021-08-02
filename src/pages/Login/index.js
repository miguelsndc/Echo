import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signInWithProviderAsync } from '../../store/ducks/auth'
import { Container, Button } from './styles'
import { firebase } from '../../services/firebase'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const error = useSelector(state => state.auth.error)

  function handleLoginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    dispatch(signInWithProviderAsync(provider)).then(() => {
      history.push('/')
    })
  }

  function handleLoginWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider()
    dispatch(signInWithProviderAsync(provider)).then(() => {
      history.push('/')
    })
  }

  return (
    <Container>
      <div>
        <h2>Sign In</h2>
        <span>Join echo with one of those login options </span>
        {error && <span className='error'>{error.message}</span>}
        <Button onClick={handleLoginWithGithub}>Log in with Github</Button>
        <Button onClick={handleLoginWithGoogle}>Log in with Google</Button>
      </div>
    </Container>
  )
}

export default Login
