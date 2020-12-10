import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcon } from './FooterElements'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>

                        {/* Footer link column 1 */}
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/">Locate a Store</FooterLink>
                                <FooterLink to="/">Franchise</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Terms and Condition</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/">Locate a Store</FooterLink>
                                <FooterLink to="/">Franchise</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Terms and Condition</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                        {/* Footer link column 1 end*/}

                        {/* Footer link column 2 */}
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/">Locate a Store</FooterLink>
                                <FooterLink to="/">Franchise</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Terms and Condition</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/">Locate a Store</FooterLink>
                                <FooterLink to="/">Franchise</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Terms and Condition</FooterLink>
                        </FooterLinkItems>                     
                    </FooterLinksWrapper>
                    {/* Footer link column 2 end*/}

                </FooterLinksContainer>

                {/* The final row of footer */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <LocalCafeIcon />&nbsp; Boba
                        </SocialLogo>
                        <WebsiteRights>Boba &copy; {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcon>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook"><FacebookIcon /></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Twitter"><TwitterIcon /></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram"><InstagramIcon /></SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
                {/* The final row of footer end*/}

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
