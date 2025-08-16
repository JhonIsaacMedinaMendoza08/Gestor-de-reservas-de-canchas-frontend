import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#0b1020] text-white">
        <div className="max-w-5xl mx-auto p-6">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
