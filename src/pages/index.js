import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Info from '../components/InfoSection'
import { aboutSection, servicesSection, contactSection } from '../components/InfoSection/Data'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [click, setClick] = useState(false);

    const toggleAndHandleClick = () => {
        setIsOpen(!isOpen)
        setClick(!click)
    }

    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggleAndHandleClick}/>
            <Navbar toggle={toggleAndHandleClick} click={click}/>
            <HeroSection />
            <Info {...aboutSection}/>
            <Menu />
            <Info {...servicesSection} />
            <Info {...contactSection} />
            <Footer />
        </>

    )
}

export default Home
