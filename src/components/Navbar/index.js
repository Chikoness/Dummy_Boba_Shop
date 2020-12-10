import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import MenuIcon from '@material-ui/icons/Menu';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'><LocalCafeIcon />&nbsp; Boba</NavLogo>
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
                                <NavLinks to='services'>Services</NavLinks>
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
