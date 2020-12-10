import styled from 'styled-components'

export const MenuContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FEF9EF;
    color: #FE6D73;

    @media screen and (max-width: 768px) {
        height: 1400px;
    }

    @media screen and (max-width: 480px) {
        height: 1800px;
    }
`;

export const MenuWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const MenuCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const MenuIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const MenuH1 = styled.h1`
    font-size: 2.5rem;
    color: #FE6D73;
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        padding-bottom: 10px;
        font-size: 2rem;
    }
`;

export const MenuH2 = styled.h2`
    color: #227C9D;
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

export const MenuP = styled.p`
    font-size: 1rem;
    text-align: center;    
`