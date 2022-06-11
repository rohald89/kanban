import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

const useLocalStorage = (key, initial = null) => {
  const [value, setValue] = useState(() => {
    if (isBrowser) {
      const saved = window.localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    }
    return initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
