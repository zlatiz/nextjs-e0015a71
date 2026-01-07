import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps): JSX.Element {
  return (
    <div className="card-root">
      {children}
    </div>
  );
}
