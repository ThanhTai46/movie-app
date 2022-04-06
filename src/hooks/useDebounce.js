import { useEffect, useState } from "react";

export default function useDebounce(initialValue, delay = 2000) {
  const [debounceValue, setDebounceValue] = useState(initialValue);
  useEffect(() => {
    const timer = setInterval(() => {
      setDebounceValue(initialValue);
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay, initialValue]);

  return debounceValue;
}
