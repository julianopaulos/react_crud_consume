import styled from 'styled-components';

interface SpanElementProps{
    backgroundColor: string;
}

export const SpanElement = styled.span<SpanElementProps>`
    max-width:10%;

`;