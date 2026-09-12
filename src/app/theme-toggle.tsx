"use client";

import { useLayoutEffect } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  try {
    const storedTheme = localStorage.getItem("theme");

    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : systemTheme;
  } catch {
    return systemTheme;
  }
}

export function ThemeToggle() {
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = getPreferredTheme();
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
  }

  return (
    <button
      aria-label="Toggle color theme"
      className="group grid size-10 place-items-center border border-foreground transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      onClick={toggleTheme}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="theme-icon theme-icon-light size-5 group-hover:text-background"
        fill="none"
        viewBox="0 0 20 20"
      >
        <circle cx="10" cy="10" r="3.25" stroke="currentColor" />
        <path
          d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4M14.6 14.6 16 16M16 4l-1.4 1.4M5.4 14.6 4 16"
          stroke="currentColor"
          strokeLinecap="square"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="theme-icon theme-icon-dark size-5 group-hover:text-background"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          d="M17 12.1A7 7 0 0 1 7.9 3 7 7 0 1 0 17 12.1Z"
          stroke="currentColor"
          strokeLinejoin="bevel"
        />
      </svg>
    </button>
  );
}
