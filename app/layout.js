import './globals.css';

export const metadata = {
  title: 'Portfolio CMS-Lite - Your Name',
  description: 'A modern portfolio built with Next.js and content management made simple',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
