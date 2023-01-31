import styled from 'styled-components';
import { device } from "../breakpoint";


const LogoImg = styled.img`
    display: block;
    max-height: 30px;
    transition: height .3s ease-in;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    max-width: none;
    box-sizing: border-box;

    @media ${device.large} {
        max-height: 40px;
    }
`;

export default LogoImg;
