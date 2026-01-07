import React from 'react';

type ButtonProps = {
  href: string;
  label: string;
  primary?: boolean;
  className?: string;
};

export default function Button({ href, label, primary = false, className = '' }: ButtonProps): JSX.Element {
  const base = 'btn';
  const style = primary ? 'bg-accent text-black' : 'bg-white text-black border';
  return (
    <a href={href} className={`${base} ${style} ${className}`} role="button">{label}</a>
  );
}
