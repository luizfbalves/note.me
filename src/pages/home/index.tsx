import { NavHeader, Search } from './styles'
import { FiSearch } from 'react-icons/fi'

export default function Home() {
  return (
    <>
      <NavHeader>
        <Search>
          <FiSearch />
          <input placeholder="Search for a note..." />
        </Search>
      </NavHeader>
    </>
  )
}
