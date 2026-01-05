"use client";

import { ReactNode } from "react";
import LenisProvider from "@/providers/LenisProvider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <LenisProvider>{children}</LenisProvider>;
};

export default Providers;