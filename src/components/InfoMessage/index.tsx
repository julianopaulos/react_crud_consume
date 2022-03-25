import React, { FormHTMLAttributes } from 'react';
import { SpanElement } from './styles';

interface SpanProps extends React.Component<React.HTMLProps<HTMLSpanElement>, void> {
    backgroundColor: string;
}

export default function Span(props: SpanProps) {
  return (
    <SpanElement
        {...props}
    >
    </SpanElement>
  )
}
