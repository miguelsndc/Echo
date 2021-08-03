import { formatDistance, parseISO } from 'date-fns'
import { useSelector } from 'react-redux'

import { Wrapper } from './styles'

export default function Message({ createdAt, author, content }) {
  const dateISO = parseISO(createdAt.toDate().toISOString())

  const user = useSelector(state => state.auth.user)
  const isFromCurrentUser = author.id === user.uid

  const timeDistance = time =>
    formatDistance(time, new Date(), { addSuffix: true })

  console.log(isFromCurrentUser)

  return (
    <Wrapper isFromCurrentUser={isFromCurrentUser}>
      <div className='info'>
        <img src={author.photoURL} alt={author.name} />
        <div>
          <h3>{author.name}</h3>
          <span>{timeDistance(dateISO)}</span>
        </div>
      </div>
      <div className='text'>
        <p>{content}</p>
      </div>
    </Wrapper>
  )
}
