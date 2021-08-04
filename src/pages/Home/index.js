import { useHistory } from 'react-router-dom'
import Channel from '../../components/Channel'
import Header from '../../components/Header'

const Home = () => {
  const history = useHistory()

  if (!localStorage.getItem('echo/user')) history.push('/login')

  return (
    <div>
      <Header />
      <Channel />
    </div>
  )
}

export default Home
