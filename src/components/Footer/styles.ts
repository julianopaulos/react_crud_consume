import styled from 'styled-components';

export const FooterElement = styled.footer`
    display:flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    position: absolute;
    width: 100%;
    min-height: 50px;
    background-color: rgba(55, 55, 255, .5);
    @media only screen and (max-width: 440px) {
        position: relative;
    }
`;

export const Span = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`;