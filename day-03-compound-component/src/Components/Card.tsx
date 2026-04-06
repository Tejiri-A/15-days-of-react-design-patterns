import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className }: Props) {
  return <article className={`card card-border shadow-md overflow-hidden ${className || ""}`}>{children}</article>;
}

function CardHeader({ children, className }: Props) {
  return <header className={`card-title p-4 pb-2 ${className || ""}`}>{children}</header>;
}

function CardBody({ children, className }: Props) {
  return <div className={`card-body p-4 pt-2 flex-1 ${className || ""}`}>{children}</div>;
}

function CardFooter({ children, className }: Props) {
  return <footer className={`card-actions p-4 pt-0 ${className || ""}`}>{children}</footer>;
}

function CardImage({ src, alt, className }: { src: string; alt?: string; className?: string }) {
  return (
    <figure className={`${className || ""}`}>
      <img src={src} alt={alt || ""} className="w-full h-full object-cover" />
    </figure>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
