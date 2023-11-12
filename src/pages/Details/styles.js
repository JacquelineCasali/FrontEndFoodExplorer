import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 114px auto;
    grid-template-areas:
    "header"
    "button"
    "content"
    "footer"
    ;

    > .buttonBack {
        display: flex;
        grid-area: button;
        align-items: center;
        background: transparent;
        border: none;

        color: ${({theme}) => theme.COLORS.WHITE};

        margin: 1.5rem 7.6rem 0;


        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
}

@media(max-width: ${DEVICE_BREAKPOINTS.SMALL}) {
    display: flex;
    flex-direction: column;
    padding: 0;

    > .buttonBack {
        display: flex;
        grid-area: button;
        align-items: center;
        background: transparent;
        border: none;

        color: ${({theme}) => theme.COLORS.WHITE};

        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
}
}
`;

export const Content = styled.div`
display: flex;
padding: 2.6rem 7.5rem;

grid-area: content;



> img {
    width: 24.37rem;
    height: 24.37rem;

    margin-right: 3rem;

    border-radius: 100%;


}

>.dishDescription {
    display: flex;
    flex-direction: column;
   justify-content: center;

    >h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 500;

        margin-bottom: 1.5rem;
    }

    >p {
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        margin-bottom: 1.5rem;

    }

    >.tags {
        margin-bottom: 3rem;
    }

    >.includeDish {
        display: flex;
        gap: 1rem;
    }
}

@media(max-width: ${DEVICE_BREAKPOINTS.SMALL}) {
    display: flex;
    flex-direction: column;
    margin-top: 7.1rem;

    padding: 0 3.5rem;

    > img {
    width: 16.5rem;
    height: 16.5rem;

    border-radius: 100%;

    margin-bottom: 1rem;
}

>.dishDescription {
    display: flex;
    flex-direction: column;
    padding: 0;
    

    >h1 {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;

        margin-bottom: 1.5rem;
    }

    >p {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        margin-bottom: 1.5rem;

    }

    >.tags {
        display: grid;
        grid-template-columns: auto auto auto;
    }

    >.includeDish {
        display: flex;
        gap: 2rem;
        margin-bottom: 3.3rem;
    }
}







}

`;