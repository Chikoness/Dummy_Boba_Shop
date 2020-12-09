import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Boba</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <MenuIcon />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about'>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='menu'>Menu</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services'>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contact'>Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
