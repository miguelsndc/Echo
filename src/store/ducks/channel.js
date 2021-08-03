// Actions

export const ADD_NEW_MESSAGE = 'echo/channel/ADD_NEW_MESSAGE'
export const REMOVE_MESSAGE = 'echo/channel/REMOVE_MESSAGE'
export const LOAD_MESSAGES = 'echo/channel/LOAD_MESSAGES'

// Reducer

const INITIAL_STATE = {
  messages: [],
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REMOVE_MESSAGE:
      return {
        messages: state.messages.filter(
          message => message.id !== action.payload.id
        ),
      }
    case LOAD_MESSAGES:
      return {
        messages: action.payload.messages,
      }
    default:
      return state
  }
}

// Action Creators

export const removeMessage = id => ({
  type: REMOVE_MESSAGE,
  payload: { id },
})
