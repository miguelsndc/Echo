import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 8vh;

  nav {
    width: 90%;
    max-width: 1080px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0.75rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }

    svg {
      cursor: pointer;
      transition: fill 0.2s;

      :hover {
        fill: ${({ theme }) => theme.gray400};
      }
    }
  }
`
