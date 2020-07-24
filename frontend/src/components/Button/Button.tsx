import React from "react";

interface Props {
  onClick: () => void;
  label: string;
  isActive?: boolean;
  className?: string;
}

const Button = ({ onClick, label, isActive = true, className = "" }: Props) => {
  const _onClick = () => {
    if (!isActive) return;

    onClick();
  };

  return (
    <button
      className={`Button ${isActive ? "" : "disabled"} ${className}`}
      onClick={_onClick}
    >
      {label}
    </button>
  );
};

export default Button;
