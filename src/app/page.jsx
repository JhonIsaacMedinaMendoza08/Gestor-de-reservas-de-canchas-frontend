'use client'
import { useEffect, useState } from 'react'
import { get, API_BASE } from '../lib/api'

export default function Home() {
  const [health, setHealth] = useState('checking...')
  const [courts, setCourts] = useState([])
  const [reservations, setReservations] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      try {
        // Health
        const data = await get('/health')
        setHealth(data?.status || 'ok')

        // Canchas
        const courtsData = await get('/courts/get')
        setCourts(courtsData || [])

        // Reservas (todas, solo como ejemplo)
        const reservationsData = await get('/reservations/get')
        setReservations(reservationsData || [])
      } catch (e) {
        setHealth('down')
        setError(e.message)
      }
    })()
  }, [])

  return (
    <div className="bg-[#111936] rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold">Gestor de Reservas de Canchas</h2>
      <p className="text-xs text-[#9aa4bf]">
        Frontend en Next.js consumiendo la API del backend.
      </p>

      <hr className="h-px bg-[#26315a] my-4 border-0"/>

      

      {error && (
        <pre className="text-xs text-[#ff7b7b] whitespace-pre-wrap mb-4">{error}</pre>
      )}

      {/* Resumen */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#1f2a52] p-4 rounded-xl shadow">
          <h3 className="text-sm text-[#afc3ff] mb-1">Canchas registradas</h3>
          <p className="text-lg font-bold text-white">{courts.length}</p>
        </div>
        <div className="bg-[#1f2a52] p-4 rounded-xl shadow">
          <h3 className="text-sm text-[#afc3ff] mb-1">Reservas Actuales</h3>
          <p className="text-lg font-bold text-white">{reservations.length}</p>
        </div>
      </div>

      {/* Lista de canchas */}
      {courts.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-white mb-2">Listado de Canchas</h3>
          <ul className="space-y-2 text-xs text-[#c5d1ff]">
            {courts.map(court => (
              <li key={court._id} className="bg-[#26315a] rounded-lg p-2 flex justify-between">
                <span>{court.name} ({court.type})</span>
                <span>${court.pricePerHour}/h</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Estado de API */}
      
      <div className="flex flex-wrap items-center gap-3 mb-4 my-5.5">
        <span className="bg-[#1f2a52] px-2 py-1 rounded-full text-[#afc3ff] text-xs">{API_BASE}</span>
        <span className={`px-2 py-1 rounded-full text-xs ${health==='ok' ? 'bg-green-700' : 'bg-[#ff0000]'}`}>
          {health}
        </span>
      </div>
    </div>

    
  )
}
