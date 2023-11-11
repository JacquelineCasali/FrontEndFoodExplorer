import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;
    height: 7.1rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
    padding: 1.5rem 7.6rem;
    align-items: center;
    border-radius: .3rem;

   > .buttonLogout {
    border: none;
    background-color: transparent;


    > svg {
        width: 2rem;
        height: 2rem;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
   }

   > .signOut {
    display: none;
   }

   @media(max-width: ${DEVICE_BREAKPOINTS.SMALL}) {
        input {
            display: none;
        }

        button {
            text-indent: -9999px;
            background-color: transparent;
        }

        > .buttonLogout {
            display: none;
        }


   }
`;

export const Logo = styled.div`
    display: flex;
    width: 12.31rem;


    > svg {
        width: 1.8rem;
        height: 1.8rem;
        color: ${({theme}) => theme.COLORS.BLUE};

    }

    > h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
    }

`;