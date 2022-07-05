import styled from 'styled-components'
import { Navbar } from 'rsuite'

export const NavHeader = styled(Navbar)`
  padding: 1.5rem;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
  input {
    width: 70%;
    max-width: 800px;
    outline: none;
    border-width: 0px;
    background: none;
  }
  svg {
    width: 19px;
    height: 19px;
  }
`
