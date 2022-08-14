import { Link, NavLinkProps, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Navbar = styled.div<{ showMobileNavbar: boolean }>`
  @media screen and (max-width: 800px) {
    font-family: ${({ theme }) => theme.secondaryFonts};
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
    transform: ${(props) =>
      props.showMobileNavbar ? 'translateY(0em)' : 'translateY(-100em)'};
    transition: 0.6s ease;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.black};
  }
`

const StyledLink = styled(Link)<NavLinkProps & { selected: boolean }>`
  text-decoration: none;
  color: white;
  padding-left: 200px;
  padding-right: 200px;
  font-weight: bold;
  transition: 0.2s ease;
  margin: 0.3em;
  font-size: 6vw;
  :hover {
    background-color: ${({ theme }) => theme.navy};
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.navy};
    `}
`

function MobileBar({ showMobileNavbar }: { showMobileNavbar: boolean }) {
  const location = useLocation()
  return (
    <Navbar showMobileNavbar={showMobileNavbar}>
      <StyledLink to="" selected={location.pathname === '/'}>
        Clock
      </StyledLink>
      <StyledLink to="/lifelines" selected={location.pathname === '/lifelines'}>
        Lifelines
      </StyledLink>
      <StyledLink to="/settings" selected={location.pathname === '/settings'}>
        Settings
      </StyledLink>
    </Navbar>
  )
}

export default MobileBar
