import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggleAndHandleClick, click }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><LocalCafeIcon />&nbsp; Boba</NavLogo>
                        <MobileIcon onClick={toggleAndHandleClick}>
                            {click ? <CloseIcon /> : <MenuIcon />}
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='menu'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>Menu</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contact'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
