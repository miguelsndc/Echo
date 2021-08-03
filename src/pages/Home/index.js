import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Channel from '../../components/Channel'
import Header from '../../components/Header'

const Home = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const history = useHistory()

  if (!isAuthenticated) history.push('/login')

  return (
    <div>
      <Header />
      <Channel />
    </div>
  )
}

export default Home
