import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 980px;
  padding: 1rem;
  height: 92vh;
  margin: 0 auto;
`
export const Messages = styled.section`
  height: 90%;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.gray800};
  padding: 0.75rem;
  border-radius: 12px;
  gap: 0.5rem;

  button {
    border: none;
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    cursor: pointer;

    svg {
      transition: fill 0.2s;
    }

    :hover {
      svg {
        fill: ${({ theme }) => theme.gray400};
      }
    }
  }

  input {
    resize: none;
    border: none;
    width: 100%;
    font-size: 1rem;
    color: ${({ theme }) => theme.gray50};
    background: ${({ theme }) => theme.gray800};
    outline: none;
  }
`
