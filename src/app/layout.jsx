import '../styles/tailwind.css'
import Navbar from '../components/Navbar'
import Toast from '../components/Toast'
import CourtForm from '@/components/CourtForm'
import CourtsTable from '@/components/CourtsTable'


export const metadata = {
  title: 'Gestor de Reservas',
  description: 'Frontend Next.js para gestionar canchas y reservas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#0b1020] text-white min-h-screen">
        <div className="max-w-5xl mx-auto p-6">
          <Navbar />
          <Toast />


          {children}
        </div>
      </body>
    </html>
  )
}
