import { useEffect } from 'react'
import { useTheme } from 'styled-components'

import { AiOutlineSend } from 'react-icons/ai'

import { Messages, Form, Wrapper } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { createMessageAsync, LOAD_MESSAGES } from '../../store/ducks/channel'
import { loadMessages } from '../../api/helpers'

const Channel = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const messages = useSelector(state => state.channel.messages)

  function handleCreateMessage(e) {
    e.preventDefault()

    dispatch(createMessageAsync({ message: 'testando' }))
  }

  useEffect(() => {
    loadMessages().then(messages => {
      dispatch({ type: LOAD_MESSAGES, payload: { messages } })
    })
  }, [dispatch])

  return (
    <Wrapper>
      <Messages>
        {messages.map(message => {
          return <span key={message.id}>{message.message}</span>
        })}
      </Messages>
      <Form onSubmit={handleCreateMessage}>
        <input type='text' />
        <button type='submit'>
          <AiOutlineSend size='1.7rem' color={theme.gray300} />
        </button>
      </Form>
    </Wrapper>
  )
}

export default Channel
