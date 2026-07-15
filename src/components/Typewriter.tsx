import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypewriterProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  delayBeforeDelete?: number;
  className?: string;
}

export function Typewriter({
  strings,
  typeSpeed = 100,
  backSpeed = 50,
  delayBeforeDelete = 1500,
  className = '',
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === strings[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), delayBeforeDelete);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      Math.max(
        reverse ? backSpeed : typeSpeed,
        Math.random() * (reverse ? backSpeed / 2 : typeSpeed / 2) + (reverse ? backSpeed / 2 : typeSpeed / 2)
      )
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, strings, typeSpeed, backSpeed, delayBeforeDelete]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{strings[index].substring(0, subIndex)}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1.2em] ml-[2px] bg-current"
      />
    </span>
  );
}
