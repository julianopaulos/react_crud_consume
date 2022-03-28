import styled, { createGlobalStyle } from 'styled-components';

interface SpanElementProps{
    display: string;
    fontSize: number;
    backgroundColor: string;
    color: string;
}

export const MessageFadeOutStyle = createGlobalStyle`
    .message{
        transition: .5s;
    }
    .message .fadeIn{
        display: flex;
    }
    .message .fadeOut{
        display: none;
    }
`;

export const SpanElement = styled.span<SpanElementProps>`
    display: ${(props) => props.display};
    top: 100px;
    right: 0;
    position: absolute;
    font-size: ${(props) => props.fontSize}px;
    max-width:10%;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    padding: 20px 40px;
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;