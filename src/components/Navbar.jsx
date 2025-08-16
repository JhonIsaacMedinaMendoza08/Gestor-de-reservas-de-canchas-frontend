'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const is = (p) => pathname === p
    return (
        <nav className="flex items-center justify-between gap-3 py-3">
            <div className="flex items-center gap-2">
                <span className="bg-[#1f2a52] px-2 py-1 rounded-full text-[#afc3ff] text-xs">Gestor</span>
                <b>Reservas</b>
            </div>
            <div className="flex items-center gap-2">
                <Link className={`px-3 py-2 rounded-lg ${is('/') ? 'bg-[#1a2449] text-white' : 'text-white'}`} href="/">Inicio</Link>
                <Link className={`px-3 py-2 rounded-lg ${is('/courts') ? 'bg-[#1a2449] text-white' : 'text-white'}`} href="/courts">Canchas</Link>
                <Link className={`px-3 py-2 rounded-lg ${is('/reservations') ? 'bg-[#1a2449] text-white' : 'text-white'}`} href="/reservations">Reservas</Link>
            </div>
        </nav>
    )
}
