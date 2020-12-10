import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Info from '../components/InfoSection'
import { aboutSection, servicesSection, contactSection } from '../components/InfoSection/Data'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Info {...aboutSection}/>
            <Menu />
            <Info {...servicesSection} />
            <Info {...contactSection} />
        </>

    )
}

export default Home
