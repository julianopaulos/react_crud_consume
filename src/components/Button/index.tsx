import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    text: string;
    width: number;
    height: number;
    color: string;
    background: string;
    hoverBackground: string;
}

export default function Button(prop: ButtonProps) {
  return (
    <Container 
        width={prop.width} 
        height={prop.height}
        color={prop.color}
        background={prop.background} 
        hoverBackground={prop.hoverBackground}
    >
        {prop.text}
    </Container>
  )
}
