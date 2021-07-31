import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  flex-direction: column;

  h2 {
    font-weight: 600;
    font-size: 3.4rem;
  }

  span {
    display: block;
    font-weight: 600;
    color: ${({ theme }) => theme.gray600};
    margin: 0.75rem 0;
  }

  .error {
    display: block;
    font-weight: 600;
    color: ${({ theme }) => theme.warning};
    margin: 0.75rem 0;
  }

  div {
    padding: 1rem;
    width: 100%;
    max-width: 420px;
  }
`

export const Button = styled.button`
  display: block;
  width: 100%;
  margin-bottom: 1rem;

  border: none;
  border-radius: 12px;
  color: ${({ theme }) => theme.gray50};
  font: inherit;

  padding: 0.75rem;
  background: ${({ theme }) => theme.gray700};

  transition: background 0.2s;

  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.gray600};
  }
`
