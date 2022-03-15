import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
        {...prop}
    >
        {prop.text}
    </Container>
  )
}
