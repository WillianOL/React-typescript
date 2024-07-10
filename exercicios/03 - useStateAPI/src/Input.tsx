import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ label, setValue, ...props }: InputProps) => {
  return (
    <label>
      {label}
      <input
        type="text"
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </label>
  );
};

export default Input;
