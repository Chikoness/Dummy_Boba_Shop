import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, ImgBg } from './HeroElements'
import CoverPicture from '../../images/boba-cover.jpg'
import CoverPicture2 from '../../images/boba2.jpg'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={CoverPicture} />
                <ImgBg src={CoverPicture2} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Boba Shop!</HeroH1>
                <HeroP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
