"use client";

import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";

export function GlobalProvider({ children }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <ToastContainer position="bottom-right" />

        {children}
      </ThemeProvider>
    </>
  );
}
