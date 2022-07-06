import { NavHeader, Search, Container, Content } from './styles'
import { FiSearch } from 'react-icons/fi'

export default function Home() {
  return (
    <Container>
      <NavHeader>
        <Search>
          <FiSearch />
          <input placeholder="Search for a note..." />
        </Search>
      </NavHeader>
      <Content className="content">content</Content>
    </Container>
  )
}
