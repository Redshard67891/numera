import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const title = 'Numera Solutions - Tax & Bookkeeping';
const description = 'Expert tax, bookkeeping, and financial consulting services to help your business thrive. Contact Numera Solutions for a free consultation.';
const url = 'https://numera.live';
const imageUrl = 'https://picsum.photos/800/800';

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    images: [
      {
        url: imageUrl,
        width: 800,
        height: 800,
        alt: 'Numera Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [imageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
