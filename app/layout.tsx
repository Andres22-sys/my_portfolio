import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://andresdominguez.dev'),
  title: 'Andres Dominguez | Full-Stack Engineer',
  description: 'Portfolio of Andres Dominguez, Full-Stack Engineer',
  openGraph: {
    images: ['/web-profile.png'],
  },
  icons: {
    icon: '/white-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>{children}</body>
    </html>
  );
}
