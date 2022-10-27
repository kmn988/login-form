import { useState, useEffect } from "react";

function getStorageValue( key: any, defaultValue: any) {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = JSON.parse(localStorage.getItem(key) as any);
    if (saved) return saved
    return defaultValue;
  }
}

export const useLocalStorage = ( key: any, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key as any, defaultValue  as any);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
    return localStorage.removeItem(key)
    // {key, defaultValue}: any
    // {key, defaultValue} as any

  }, [ value]);

  return [value, setValue];
};
