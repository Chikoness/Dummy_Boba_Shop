import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Boba</NavLogo>
                        <MobileIcon>
                            <MenuIcon />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about'>About</NavLinks>
                            </NavItem>
                        </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
