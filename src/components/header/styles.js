import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 7.1rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
`;