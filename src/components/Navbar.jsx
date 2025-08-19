'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const is = (p) => pathname === p

    const base = 'px-3 py-2 rounded-lg text-white'
    const active = 'bg-[#1a2449]'

    return (
        <nav className="flex items-center justify-between gap-3 py-3">
            <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-full bg-gray-800 flex items-center">
                    <img
                        src="balonIcon.png"
                        alt="Mis reservas"
                        className="w-7 h-7"
                    />
                </span>                <b></b>
            </div>
            <div className="flex items-center gap-2">
                <Link className={`${base} ${is('/') && active}`} href="/">Inicio</Link>
                <Link className={`${base} ${is('/courts') && active}`} href="/courts">Canchas</Link>
                <Link className={`${base} ${is('/reservations') && active}`} href="/reservations">Reservas</Link>
            </div>
        </nav>
    )
}
