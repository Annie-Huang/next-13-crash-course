import './globals.css';

export const metadata = {
  title: 'Traversy Media',
  description: 'Web development tutorials and courses',
  keywords:
    'web development, web design, javascript, react, node, angular, vue, html, css',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
