import React, { HTMLAttributes } from 'react';
import { SpanElement } from './styles';

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
    display: string;
    fontSize: number;
    backgroundColor: string;
    color: string;
}

export default function Span(props: SpanProps) {
  return (
    <SpanElement
        {...props}
    >
    </SpanElement>
  )
}