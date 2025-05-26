
import Script from 'next/script'; // Added import for next/script
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PragneshKumar S. Singh - Cyber Security',
  description: "PragneshKumar S. Singh's digital portfolio, showcasing expertise in cyber security. A harmonious blend of professionalism and approachability, inviting exploration and connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6318553158118544"
          crossOrigin="anonymous"
          strategy="afterInteractive" // Loads the script after the page is interactive
        />
      </body>
    </html>
  );
}
