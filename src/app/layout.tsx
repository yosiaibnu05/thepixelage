import type { Metadata } from 'next';
import '@/styles/styles.scss';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'My Awesome Site',
  description: 'Built with Next.js, SCSS, Bootstrap, and GSAP',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap" 
      rel="stylesheet" />
      </head>
      <body>
        <div className="smooth-wrapper">
          <div className="smooth-content">
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
