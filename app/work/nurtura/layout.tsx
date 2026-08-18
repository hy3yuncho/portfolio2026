import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nurtura",
  description: "Designing emotional safety into an IVF community.",
};

export default function NurturaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
