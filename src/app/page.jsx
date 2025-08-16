'use client'
import { useEffect, useState } from 'react'
import { get, API_BASE } from '../lib/api'

export default function Home() {
  const [health, setHealth] = useState('checking...')
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      try { const data = await get('/health'); setHealth(data?.status || 'ok') }
      catch (e) { setHealth('down'); setError(e.message) }
    })()
  }, [])

  return (
    <div className="bg-[#111936] rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold">Gestor de Reservas de Canchas</h2>
      <p className="text-xs text-[#9aa4bf]">Frontend en Next.js consumiendo la API del backend.</p>
      <hr className="h-px bg-[#26315a] my-4 border-0"/>
      <div className="flex flex-wrap items-center gap-3">
        <span className="bg-[#1f2a52] px-2 py-1 rounded-full text-[#afc3ff] text-xs">{API_BASE}</span>
        <span className={`px-2 py-1 rounded-full text-xs ${health==='ok' ? 'bg-green-700' : 'bg-[#1f2a52]'}`}>{health}</span>
      </div>
      {error && <pre className="text-xs text-[#9aa4bf] whitespace-pre-wrap mt-3">{error}</pre>}
    </div>
  )
}
