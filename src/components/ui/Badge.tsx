import type { HTMLAttributes } from 'react';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ variant = 'neutral', className = '', ...props }: BadgeProps) {
  const classes = ['ui-badge', `ui-badge--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return <span className={classes} {...props} />;
}
