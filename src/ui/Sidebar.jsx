import styled from "styled-components"
import Logo from '../ui/Logo'
import MainNav from '../ui/MainNav'

const SidebarStyle = styled.aside`
background-color:var(--color-gray-0);
padding:3.2rem 2.4rem;
border-right: 1px solid var(--color-grey-100);
grid-row: 1/-1;

display: flex;
flex-direction: column;
gap: 3.2rem;
`

export default function Sidebar() {
  return (
    <SidebarStyle>
        <Logo />
        <MainNav />
    </SidebarStyle>
  )
}