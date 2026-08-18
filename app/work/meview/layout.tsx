import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MeView",
  description:
    "Feedback exchange made honest by anonymity, and useful by structure.",
};

export default function MeviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
