'use client'
import { useEffect, useState } from 'react'
import { get, API_BASE } from '../lib/api.js'

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
    <div className="card">
      <h2 className="text-xl font-semibold">Gestor de Reservas de Canchas</h2>
      <p className="small">Frontend en Next.js consumiendo la API del backend.</p>
      <div className="sep" />
      <p className="small">Backend base: <span className="badge">{API_BASE}</span></p>
      <p className="small">Health: <span className="badge">{health}</span></p>
      {error && <pre className="small whitespace-pre-wrap">{error}</pre>}
    </div>
  )
}