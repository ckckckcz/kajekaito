import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    ["UI/UX", "Designer"],
    ["Front-End", "Developer"],
  ];
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll("span");
      gsap.fromTo(
        chars,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.05,
        }
      );
    }
  }, [textIndex]);
  const wrapWithSpan = (textParts: string[]) => {
    return textParts.map((part, partIndex) => (
      <React.Fragment key={partIndex}>
        {part.split("").map((char, charIndex) => (
          <span key={charIndex}>{char}</span>
        ))}
        {partIndex < textParts.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className="header">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-2 text-4xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl dark:text-white text-semibold">Hey, Riovaldo here! A</h1>
        <h1 ref={textRef} className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-8xl dark:text-white text-bold">
          {wrapWithSpan(texts[textIndex])}
        </h1>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white text-semibold">based in Malang</h1>
      </div>
    </section>
  );
};

export default Header;
