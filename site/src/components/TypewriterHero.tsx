"use client";

import { useState, useEffect } from "react";

const phrases = ["Diploma Online", "Anywhere in the World"];

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPING = 1500;
const PAUSE_AFTER_DELETING = 500;

export function TypewriterHero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && displayText === currentPhrase) {
      // Finished typing — pause then start deleting
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      // Finished deleting — pause then move to next phrase
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, PAUSE_AFTER_DELETING);
      return () => clearTimeout(timeout);
    }

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentPhrase.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <span className="text-secondary">
      {" "}
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
}
