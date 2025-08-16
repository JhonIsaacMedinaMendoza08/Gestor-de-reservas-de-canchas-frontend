'use client';
import { useEffect, useState } from 'react';
import { get, API_BASE } from '../lib/api';

export default function Home() {
  const [health, setHealth] = useState('checking...');
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try { const data = await get('/health'); setHealth(data?.status || 'ok'); }
      catch (e) { setHealth('down'); setError(e.message); }
    })();
  }, []);

  return (
    <div className="bg-card rounded-2xl p-4 shadow-xl">
      <h2 className="text-xl font-semibold">Gestor de Reservas de Canchas</h2>
      <p className="text-xs text-muted">Frontend en Next.js consumiendo la API del backend.</p>
      <div className="h-px bg-[#26315a] my-4" />
      <p className="text-xs text-muted">Backend base:
        <span className="bg-[#1f2a52] px-2 py-1 rounded-full text-[#afc3ff] text-xs ml-2">{API_BASE}</span>
      </p>
      <p className="text-xs text-muted">Health:
        <span className="bg-[#1f2a52] px-2 py-1 rounded-full text-[#afc3ff] text-xs ml-2">{health}</span>
      </p>
      {error && <pre className="text-xs text-muted whitespace-pre-wrap mt-2">{error}</pre>}
    </div>
  );
}
