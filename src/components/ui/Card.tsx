import type { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
}

export function Card({ padded = true, className = '', ...props }: CardProps) {
  const classes = ['ui-card', padded ? 'ui-card--padded' : '', className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes} {...props} />;
}
