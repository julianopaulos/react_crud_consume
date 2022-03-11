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
    font-weight: bold;
    cursor: pointer;

    background-color: ${(props) => props.background};

    &:hover{
        background-color: ${(props) => props.hoverBackground};
    }
`;