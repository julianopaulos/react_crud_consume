import styled from 'styled-components';


export const Container = styled.form`
    width: 25%;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: none;
    border-width: 0;
    border-radius: 15px;
    background-color: rgba(250, 250, 250, .6);
    box-shadow: 1px 2px 2px rgba(0,0,0,0.5);

    @media only screen and (max-width: 1200px) {
        width: 50%;
        margin: 100px auto;
    }

    @media only screen and (max-width: 700px) {
        width: 80%;
    }

    @media only screen and (max-width: 440px) {
        width: 90%;
    }
`;