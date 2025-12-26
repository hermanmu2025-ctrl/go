import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TogelPro | Live Result Tercepat & Akurat',
  description: 'Portal hasil keluaran togel HK, SGP, Sydney terlengkap dan terpercaya.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <nav className="bg-dark text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tighter text-brand">TOGEL<span className="text-white">PRO</span></h1>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-brand transition">HOME</a>
              <a href="#" className="hover:text-brand transition">SINGAPORE</a>
              <a href="#" className="hover:text-brand transition">HONGKONG</a>
              <a href="#" className="hover:text-brand transition">SYDNEY</a>
              <a href="#" className="hover:text-brand transition">PREDIKSI</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-dark text-slate-400 py-10 mt-12 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm">© 2025 TogelPro Elite. Data diperbarui secara real-time.</p>
            <p className="text-xs mt-2 italic text-slate-500 font-light">Peringatan: Bertanggung jawablah dalam bermain.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}