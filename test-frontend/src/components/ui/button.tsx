import React from "react";

interface ButtonProps {
  message: string;
}

const Button: React.FC<ButtonProps> = ({ message }) => {
  return (
    <button className="h-10 border border-orange-400 text-orange-400 py-2 px-6 rounded hover:bg-orange-400 hover:text-white transition-all">
      {message}
    </button>
  );
};

export default Button;
