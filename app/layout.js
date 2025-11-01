import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });

export const metadata = {
  title: 'FMC | Portfolio',
  description: 'Portofolio Developer Muda - Node.js, JavaScript, HTML',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-light text-dark`}>
        {children}
      </body>
    </html>
  );
}
