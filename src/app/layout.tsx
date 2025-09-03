import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next"

const title = 'Numera Solutions | Expert Tax, Bookkeeping, & Payroll Services';
const description = 'Numera Solutions offers expert tax preparation, bookkeeping, payroll, and financial consulting for small businesses. Simplify your finances and amplify your success. Get a free consultation today.';
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
        alt: 'Numera Solutions Logo',
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
        <meta name="google-site-verification" content="1KW9GRC2u-KNwt3zBln0IKBvY4NbIhj7CzI2L8NYS84" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <SpeedInsights/>
      </body>
    </html>
  );
}
