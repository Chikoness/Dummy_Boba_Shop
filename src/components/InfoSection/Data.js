import imageOne from '../../images/img-1.png'
import imageThree from '../../images/contact-us.svg'

export const aboutSection = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About BobaShop',
    headLine: 'How did we start',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonVisibility : false,
    buttonLabel: 'Back to Top',
    imgStart: true,
    img: imageOne,
    alt: 'Boba',
    dark: true,
    primary: true,
    darkText: false
}

export const servicesSection = {
    id: 'services',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Services',
    headLine: 'What we do',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonVisibility : false,
    buttonLabel: 'Back to Top',
    imgStart: false,
    img: imageOne,
    alt: 'Boba',
    dark: true,
    primary: true,
    darkText: false
}

export const contactSection = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Contact',
    headLine: 'Reach out to us!',
    description: 'Reach out to us at Boba@boba.com or call us at +01 234 5678',
    buttonVisibility : true,
    buttonLabel: 'Back to Top',
    imgStart: true,
    img: imageThree,
    alt: 'Boba-2',
    dark: true,
    primary: true,
    darkText: true
}