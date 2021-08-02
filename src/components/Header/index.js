import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineLogout } from 'react-icons/ai'

import { Wrapper } from './styles'
import { useTheme } from 'styled-components'
import { signOutAsync } from '../../store/ducks/auth'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const theme = useTheme()
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)

  function handleSignOut() {
    dispatch(signOutAsync())
    history.push('/login')
  }

  return (
    <Wrapper>
      <nav>
        <h2>ECHO</h2>
        <div>
          {user && <img src={user.photoURL} alt={user.displayName} />}
          <AiOutlineLogout
            size='1.75rem'
            color={theme.gray200}
            onClick={handleSignOut}
          />
        </div>
      </nav>
    </Wrapper>
  )
}

export default Header
