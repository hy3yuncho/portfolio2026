"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} style={{ animation: "page-fade-in 0.3s ease" }}>
      {children}
    </div>
  );
}
