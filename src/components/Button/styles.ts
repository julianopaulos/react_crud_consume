import styled from 'styled-components';

interface ContainerProps {
    width: number;
    height: number;
    color: string;
    background: string;
    hoverBackground: string;
}

export const Container = styled.button<ContainerProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-style: none;
    border-width: 0;
    border-radius: 5px;
    color: ${(props) => props.color};
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;

    background-color: ${(props) => props.background};
    box-shadow: 2px 2px 3px rgba(0,0,0,0.5);
    transition: .3s;
    &:hover{
        background-color: ${(props) => props.hoverBackground};
    }
`;