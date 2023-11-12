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

   > .inputSearch {
    width: 100%;
   }

   > .signOut, .buttonMenu {
    display: none;
   }



   @media(max-width: ${DEVICE_BREAKPOINTS.SMALL}) {
        display: flex;
        padding: 3.7rem 1.7rem 1.7rem ;

        > .inputSearch {
            display: none;
        }

        button {
            text-indent: -9999px;
            background-color: transparent;
        }

        > .buttonLogout {
            display: none;
        }

        > .buttonMenu {
            display: flex;
            background-color: transparent;
            border: none;
            > svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${({theme}) => theme.COLORS.WHITE};
            }
                

        }


   }
`;

export const Logo = styled.div`
    display: flex;
    gap: 0.5rem;
    min-width: 12.31rem;


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

    @media(max-width: ${DEVICE_BREAKPOINTS.SMALL}) {
        display: flex;

        > h1 {
        font-size: 1.3rem;
        }

        > svg {
        
        width: 1.5rem;
        height: 1.5rem;
        }


    }

`;