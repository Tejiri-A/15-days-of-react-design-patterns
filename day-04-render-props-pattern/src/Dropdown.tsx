import { useEffect, useRef, useState, type JSX } from "react";

type Props = {
  children: () => JSX.Element;
};

function Dropdown({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    const handleCloseMenu = (e: MouseEvent) => {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleCloseMenu);

    return () => document.removeEventListener("click", handleCloseMenu);
  }, []);
  return (
    <details className="dropdown" ref={detailsRef} open={isOpen}>
      <summary
        className="btn mb-1 capitalize"
        role="button"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {!isOpen ? "open" : "close"}
      </summary>
      {isOpen ? children() : null}
    </details>
  );
}

export default Dropdown;
