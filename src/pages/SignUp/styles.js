import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;

display: flex;
align-items: center;
justify-content: space-between;

padding: 5.6rem 6.7rem;



`;

export const Logo = styled.form`
display: flex;
>svg{
    width: 3rem;
    height: 3rem;
    color: ${({theme}) => theme.COLORS.BLUE};
    margin-right: 0.5rem;
}
>h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 700;

    
}


`;


export const Form = styled.form`
    width: 29.7rem;
    /* height: 38.8rem; */
    border-radius: 1rem;
    padding: 4rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    >h1 {
        text-align: center;
        margin-bottom: 2rem;
    }

    >label {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_400};
    }

    > button {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }

    :nth-child(3) {
        margin-bottom: 2rem;
    }

    :nth-child(5) {
        margin-bottom: 2rem;
    }



    
`;