import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detectify",
  description:
    "A design system for a B2B security product where accessibility is the standard.",
};

export default function DetectifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
