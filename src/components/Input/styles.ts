import styled from 'styled-components';

interface ContainerProps {
    width: number;
    height: number;
    paddingLeft?: number;
}

export const Container = styled.input<ContainerProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    border: none;
    border-radius: 5px;
    padding-left: ${(props) => props.paddingLeft?props.paddingLeft:0}px;
`;