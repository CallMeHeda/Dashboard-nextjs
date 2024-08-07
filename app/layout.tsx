import '@/app/ui/global.css';
import '@/app/ui/fonts';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-slate-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
