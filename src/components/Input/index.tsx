import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    width: number;
    height: number;
    paddingLeft?: number;
}

export default function Input(props:InputProps) {
  return (
    <Container
        {...props}
    />
  )
}
