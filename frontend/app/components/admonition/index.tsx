import { h } from 'preact';
import clsx from 'clsx';

import styles from './admonition.module.css';

interface AdmonitionProps {
  json: string;
}

export function Admonition({ json }: AdmonitionProps) {
  const lines: string[] = JSON.parse(json);
  return (
    <div className={clsx('admonition', styles.root)}>
      <ul>
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
