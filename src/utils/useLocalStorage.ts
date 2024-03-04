import React from "react";

export function useLocalStorage<T>(
  key: string
): [T | undefined, (value: T) => void] {
  const [value, setValue] = React.useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      return undefined;
    }
  });
  const set = React.useCallback(
    (newValue: T) => {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    [key]
  );
  return [value, set];
}
