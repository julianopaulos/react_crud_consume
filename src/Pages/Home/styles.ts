import styled from 'styled-components';


export const Div = styled.div`
    background-color: rgba(200, 200, 200, .6);
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Section = styled.section`
    display:flex;
    align-items: center;
    margin-bottom: 25px;
`;

export const H3 = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: rgba(245, 245, 245, 1);
    margin-bottom: 80px;
    line-height: 30px;
    font-size: 1.5em;
    font-weight: bold;
    width: 100%;
    background-color: rgba(180, 180, 180, .8);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 100px;
    box-shadow: 0 3px 3px rgba(130,140,150,0.5);
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