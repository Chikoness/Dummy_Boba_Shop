import React from 'react'

const Menu = () => {
    return (
        <MenuContainer id="menu">
            <MenuH1>Our Menu</MenuH1>
            <MenuWrapper>

                {/* Cards Start */}
                <MenuCard>
                    <MenuIcon src={Icon1} />
                    <MenuH2>Milk Tea</MenuH2>
                    <MenuP>Original, chocolate, strawberry and matcha</MenuP>
                </MenuCard>

                <MenuCard>
                    <MenuIcon src={Icon2} />
                    <MenuH2>Coffee</MenuH2>
                    <MenuP>Cappucino, Mocha, Latte, and Macchiato</MenuP>
                </MenuCard>

                <MenuCard>
                    <MenuIcon src={Icon3} />
                    <MenuH2>Fruit Tea</MenuH2>
                    <MenuP>Happy Pink, Detox Green, and Funky Yellow</MenuP>
                </MenuCard>

                <MenuCard>
                    <MenuIcon src={Icon4} />
                    <MenuH2>Toppings</MenuH2>
                    <MenuP>Black pearl, grass jelly, wild rice and coconut jelly</MenuP>
                </MenuCard>
                {/* Cards End */}
                
            </MenuWrapper>
        </MenuContainer>
    )
}

export default Menu
