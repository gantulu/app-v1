import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ invalid = false, className = '', ...props }: InputProps) {
  const { 'aria-invalid': ariaInvalid, ...inputProps } = props;
  const classes = ['ui-input', invalid ? 'ui-input--invalid' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <input
      className={classes}
      {...inputProps}
      aria-invalid={invalid || ariaInvalid}
    />
  );
}
