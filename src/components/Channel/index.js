import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineSend } from 'react-icons/ai'

import { Messages, Form, Wrapper } from './styles'
import { LOAD_MESSAGES } from '../../store/ducks/channel'
import { createNewMessage } from '../../api/helpers'

import Message from '../Message'

import { db } from '../../services/firebase'

const Channel = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const messages = useSelector(state => state.channel.messages)
  const user = useSelector(state => state.auth.user)
  const { register, handleSubmit, reset } = useForm()

  function handleCreateMessage(data) {
    const { message } = data

    const newMessage = {
      content: message,
      author: {
        photoURL: user.photoURL,
        name: user.displayName,
        id: user.uid,
      },
      createdAt: new Date(),
    }

    createNewMessage(newMessage)

    reset({
      message: '',
    })
  }

  useEffect(() => {
    const unsubscribe = db
      .collection('channel')
      .orderBy('createdAt')
      .onSnapshot(snapshot => {
        const messages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        dispatch({ type: LOAD_MESSAGES, payload: { messages } })
      })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <Wrapper>
      <Messages>
        {messages &&
          messages.map(message => {
            return (
              <Message
                key={message.id}
                author={message.author}
                content={message.content}
                createdAt={message.createdAt}
              />
            )
          })}
      </Messages>
      <Form onSubmit={handleSubmit(handleCreateMessage)}>
        <input type='text' {...register('message', { required: true })} />
        <button type='submit'>
          <AiOutlineSend size='1.7rem' color={theme.gray300} />
        </button>
      </Form>
    </Wrapper>
  )
}

export default Channel
