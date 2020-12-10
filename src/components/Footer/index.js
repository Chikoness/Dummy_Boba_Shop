import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap } from './FooterElements'

const Footer = () => {
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
                        {/* Footer link column 1 end*/}

                        {/* Footer link column 2 */}
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
                        {/* Footer link column 2 end*/}

                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
