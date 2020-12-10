import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Info from '../components/InfoSection'
import { aboutSection } from '../components/InfoSection/Data'
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
        </>
    )
}

export default Home
