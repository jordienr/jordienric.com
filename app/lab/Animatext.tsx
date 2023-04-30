import { useEffect, useState } from "react";

export default function Animatext({ text }: { text: string }) {
  const [loadingText, setLoadingText] = useState(text);

  function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890$%&*()_+{}[]<>?/@#~";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  useEffect(() => {}, [text]);

  return <span>{loadingText}</span>;
}
