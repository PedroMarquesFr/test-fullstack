import React from "react";
import Link from "next/link";

interface LinkProps {
  message: string;
  href: string;
}

const LinkStyled: React.FC<LinkProps> = ({ href, message }) => {
  return (
    <Link
      href={href}
      className="h-10 border border-orange-400 text-orange-400 py-2 px-6 rounded hover:bg-orange-400 hover:text-white transition-all text-center"
    >
      {message}
    </Link>
  );
};

export default LinkStyled;
