import React from 'react';

type InputProps = {
  id?: string;
  placeholder?: string;
  value?: string;
};

export default function Input({ id, placeholder = '', value = '' }: InputProps): JSX.Element {
  return (
    <input id={id} defaultValue={value} placeholder={placeholder} className="border border-gray-200 rounded px-3 py-2 w-full" />
  );
}
