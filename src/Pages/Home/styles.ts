import styled from 'styled-components';


export const Div = styled.div`
    background-color: rgba(220, 220, 220, .6);
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const Section = styled.section`
    display:flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const H3 = styled.h3`
    margin: 10px auto;
    margin-bottom: 30px;
    line-height: 30px;
    font-size: 1.3em;
    font-weight: bold;
`;

export const Span = styled.span`
    margin-top: 20px;
    font-size: 1em;
    a{
        text-decoration: none;
        font-weight: bold;
        color: rgba(100, 160, 100, .8);
    }
`;