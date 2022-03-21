import styled from 'styled-components';

interface ContainerProps {
    width: number;
    height: number;
    paddingLeft?: number;
}

export const Container = styled.input<ContainerProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border: 2px solid rgba(200, 200, 200, .6);
    border-radius: 5px;
    padding-left: ${(props) => props.paddingLeft?props.paddingLeft:0}px;`