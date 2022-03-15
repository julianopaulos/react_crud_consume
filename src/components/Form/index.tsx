import { FormHTMLAttributes } from 'react';
import { Container } from './styles';

export default function Form(prop: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <Container
        {...prop}
    >
    </Container>
  )
}
