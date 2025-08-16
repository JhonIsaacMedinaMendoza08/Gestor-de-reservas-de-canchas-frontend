'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const is = (p) => pathname === p
    return (
        <div className="nav">
            <div className="flex items-center gap-2"><span className="badge">Gestor</span><b>Reservas</b></div>
            <div className="flex items-center gap-2">
                <Link className={`navlink ${is('/') && 'navlink-active'}`} href="/">Inicio</Link>
                <Link className={`navlink ${is('/courts') && 'navlink-active'}`} href="/courts">Canchas</Link>
                <Link className={`navlink ${is('/reservations') && 'navlink-active'}`} href="/reservations">Reservas</Link>
            </div>
        </div>
    )
}