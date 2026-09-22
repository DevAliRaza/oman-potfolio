"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<{ theme: "dark"; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ visibility: "hidden" }}>{children}</div>;

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggle: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}
