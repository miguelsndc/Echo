import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  & + & {
    margin-top: 2rem;
  }

  &:last-child {
    margin-bottom: 2rem;
  }

  ${({ isFromCurrentUser }) =>
    isFromCurrentUser &&
    css`
      text-align: right;
    `}

  .info {
    display: flex;
    align-items: center;

    ${({ isFromCurrentUser }) =>
      isFromCurrentUser &&
      css`
        flex-direction: row-reverse;

        img {
          margin-left: 0.55rem;
        }
      `}

    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      margin-right: 0.55rem;
    }

    span {
      display: block;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.gray400};
    }

    h3 {
      font-weight: 500;
      font-size: 1rem;
    }
  }

  .text {
    margin-left: 2rem;
    margin-top: 0.45rem;
    display: inline-block;
    max-width: 75%;
    overflow-wrap: break-word;
    padding: 1rem;

    border-radius: 0px 20px 20px 20px;
    background: ${({ theme }) => theme.fuchsia700};

    ${({ isFromCurrentUser }) =>
      isFromCurrentUser &&
      css`
        border-radius: 20px 0px 20px 20px;
        margin-right: 2rem;
      `}

    p {
      text-align: left;
    }

    @media (min-width: 768px) {
      max-width: 70%;
    }
  }
`
