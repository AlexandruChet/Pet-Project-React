import React, { type JSX } from "react";

interface BtnAttributes {
  text: string;
  onClick?: () => void;
  onSubmit?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  title?: string;
}

const Btn: React.FC<BtnAttributes> = ({
  text,
  onClick,
  onSubmit,
  type = "button",
  disabled = false,
  className = "",
  style,
  ariaLabel,
  title,
}): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      className={className}
      style={style}
      aria-label={ariaLabel}
      title={title}
    >
      {text}
    </button>
  );
};

export default Btn;
