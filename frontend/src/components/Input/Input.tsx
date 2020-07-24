import React from "react";

interface Props {
  isPassword?: boolean;
  label: string;
  onChange: (arg: string) => void;
  value: string;
}

const Input = ({ isPassword = false, label, onChange, value }: Props) => {
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: updatedValue },
    } = e;

    onChange(updatedValue);
  };

  return (
    <input
      className='Input'
      type={isPassword ? "password" : "text"}
      onChange={_onChange}
      value={value}
      placeholder={label}
    />
  );
};

export default Input;
