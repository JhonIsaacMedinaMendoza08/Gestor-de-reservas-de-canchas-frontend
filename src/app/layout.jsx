import '../styles/tailwind.css'
import Navbar from '../components/Navbar'


export const metadata = {
  title: 'Gestor de Reservas',
  description: 'Frontend Next.js para gestionar canchas y reservas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#2c344e] text-white min-h-screen">
        <div className="max-w-5xl mx-auto p-6">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
