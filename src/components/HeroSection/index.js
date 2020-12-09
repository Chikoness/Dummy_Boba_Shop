import React from 'react'
import { HeroBg, HeroContainer, ImgBg } from './HeroElements'
import CoverPicture from '../../images/boba-cover.jpg'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={CoverPicture} />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
