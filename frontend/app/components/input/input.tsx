import { h, JSX } from 'preact';
import clsx from 'clsx';

import styles from './input.module.css';

type Props = {
  invalid?: boolean;
  type?: string;
  className?: string;
} & JSX.HTMLAttributes<HTMLInputElement>;

export function Input({ children, className, type = 'text', invalid, ...props }: Props) {
  return (
    <input className={clsx(className, styles.input, { [styles.input]: invalid })} type={type} {...props}>
      {children}
    </input>
  );
}

type CheckboxProps = {
  label: string;
  name: string;
  className?: string;
} & JSX.HTMLAttributes<HTMLInputElement>;

const idPrefix = 'auth-checkbox-';

export function Checkbox({ name, label, className, ...props }: CheckboxProps) {
  return (
    <label for={idPrefix + name} className={clsx(className, styles.checkbox)}>
      <input id={idPrefix + name} type="checkbox" name={name} {...props} /> {label}
    </label>
  );
}
