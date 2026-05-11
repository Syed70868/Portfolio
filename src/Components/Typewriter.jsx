import { useEffect, useState } from 'react';

const Typewriter = ({ text = [], className = '', prefix = 'I am ' }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!text.length) return;

    const current = text[index];

    const speed = deleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.substring(0, display.length + 1);
        setDisplay(next);

        if (next === current) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        const next = current.substring(0, display.length - 1);
        setDisplay(next);

        if (next === '') {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % text.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [display, deleting, index, text]);

  return (
    <span className={`${className} text-amber-50 inline-block`}>
      {prefix}
      <span className="text-red-800 text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem]">
        {display}
      </span>
      <span className="my-underline-r-2  my-underline-gray-600/50 ml-1 animate-pulse"></span>
    </span>
  );
};

export default Typewriter;
