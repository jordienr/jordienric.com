import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV - Jordi Enric",
  description:
    "Senior Frontend Developer with 7+ years of experience. Currently working at Supabase. Specialized in React, TypeScript, Next.js, and web performance.",
};

export default function CvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
