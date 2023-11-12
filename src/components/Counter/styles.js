import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 0.8rem;
   
    
    > input {
        width: 1.6rem;
        height: 1.6rem;
        background: transparent;
        border: none;
        
        color: ${({theme}) => theme.COLORS.WHITE};
        
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 700;

    }
    
    > button {
        color: ${({theme}) => theme.COLORS.WHITE};
        border: none;
        background: transparent;

        >svg {
            width: 1.6rem;
            height: 1.6rem;
        }

    }
    
    ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }

    @media(max-width: ${DEVICE_BREAKPOINTS.SMALL}){
        > input {
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        
        color: ${({theme}) => theme.COLORS.WHITE};
        
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 700;

    }
    
    > button {
        color: ${({theme}) => theme.COLORS.WHITE};
        border: none;
        background: transparent;

        >svg {
            width: 2rem;
            height: 2rem;
        }

    }
    }
    
    `;