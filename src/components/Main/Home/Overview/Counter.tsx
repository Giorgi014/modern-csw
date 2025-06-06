import { useEffect, useRef } from "react";

interface CounterProps {
  target: number;
  className?: string;
}

const Counter = ({ target, className }: CounterProps) => {
  const numberRef = useRef<HTMLParagraphElement>(null);
  const speed = 500;

  useEffect(() => {
    const updateNumber = () => {
      if (!numberRef.current) return;

      const current = Number(numberRef.current.innerText.replace(/\D/g, ""));
      const increment = target / speed;

      if (current < target) {
        const newValue = current + increment;
        numberRef.current.innerText =
          Math.ceil(newValue).toLocaleString() + "+";
        setTimeout(updateNumber, 1);
      } else {
        numberRef.current.innerText = target.toLocaleString() + "+";
      }
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateNumber();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) observer.unobserve(numberRef.current);
    };
  }, [target]);

  return (
    <p ref={numberRef} className={className}>
      0+
    </p>
  );
};

export default Counter;
