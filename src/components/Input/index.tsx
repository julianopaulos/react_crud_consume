import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    width: number;
    height: number;
}

export default function Input(prop:InputProps) {
  return (
    <Container
        {...prop}
    />
  )
}
