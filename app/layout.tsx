import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://stephen-frontend-ui.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Stephen A. Ibitoye — Full-Stack JavaScript Developer & UI/UX Designer",
  description:
    "Full-Stack JavaScript Developer with 6+ years of experience building fast, accessible, production-ready web apps with React, Next.js, and TypeScript.",
  keywords: [
    "Stephen Ayomide Ibitoye",
    "Stephen A. Ibitoye",
    "Full-Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX Designer",
    "Lagos Nigeria",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Stephen A. Ibitoye — Full-Stack JavaScript Developer & UI/UX Designer",
    description:
      "Full-Stack JavaScript Developer building fast, accessible, production-ready web products with React, Next.js, and TypeScript.",
    siteName: "Stephen A. Ibitoye Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen A. Ibitoye — Full-Stack JavaScript Developer & UI/UX Designer",
    description:
      "Full-Stack JavaScript Developer building fast, accessible, production-ready web products with React, Next.js, and TypeScript.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stephen Ayomide Ibitoye",
  alternateName: "Stephen A. Ibitoye",
  jobTitle:
    "Full-Stack JavaScript Developer | React, Next.js & TypeScript | UI/UX Designer",
  url: siteUrl,
  email: "jibzzade@gmail.com",
  sameAs: [
    "https://github.com/rapheallzz",
    "https://linkedin.com/in/stephen-ibitoye-238962175",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "Nigeria",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}
