import styled from 'styled-components';

interface ContainerProps {
    width: number;
    height: number;
}

export const Container = styled.input<ContainerProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-style: none;
    border-width: 0;
    border: none;
    border-radius: 5px;
`