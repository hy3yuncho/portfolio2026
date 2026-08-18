import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appstract",
  description:
    "When the product already exists but no one notices it, awareness becomes a design problem.",
};

export default function AppstractLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
