"use client";

import { SessionProvider } from "next-auth/react";
import HomePage from "./home/page";

export default function App() {
  return (
    <>
      <SessionProvider>
        <HomePage />
      </SessionProvider>
    </>
  );
}
