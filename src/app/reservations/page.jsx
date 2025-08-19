'use client'
import { useEffect, useState } from 'react'
import { ReservationsService } from '../../lib/services/reservations'
import { CourtsService } from '../../lib/services/courts.js'
import ReservationsTable from '../../components/ReservationsTable'
import ReservationForm from '../../components/ReservationForm'
import Toast from '../../components/Toast'

export default function ReservationsPage() {
    const [items, setItems] = useState([])
    const [courts, setCourts] = useState([])
    const [editing, setEditing] = useState(null)
    const [filters, setFilters] = useState({})
    const [toast, setToast] = useState('')

    async function load() {
        try {
            const [list, cs] = await Promise.all([
                ReservationsService.list(filters.date || filters.courtId ? filters : undefined),
                CourtsService.list()
            ])
            setItems(list); setCourts(cs)
        } catch (e) { setToast(e.message || 'Error cargando reservas') }
    }
    useEffect(() => { load() }, [])

    async function submit(form) {
        try {
            if (editing) { await ReservationsService.update(editing._id, form); setToast('Reserva actualizada') }
            else { await ReservationsService.create(form); setToast('Reserva creada') }
            setEditing(null); await load()
        } catch (e) { setToast(e.message || 'Error') }
    }

    async function remove(r) {
        if (!confirm('¿Eliminar reserva?')) return
        try { await ReservationsService.remove(r._id); setToast('Reserva eliminada'); await load() }
        catch (e) { setToast(e.message || 'Error') }
    }

    return (
        <div className="grid gap-6">
            <div className="bg-[#111936] rounded-2xl p-6 shadow-xl">
                <h3 className="text-lg font-semibold">Filtros</h3>
                <div className="grid gap-4 md:grid-cols-2 mt-3">
                    <div>
                        <label className="text-sm text-[#9aa4bf] mb-1 block">Fecha (YYYY-MM-DD)</label>
                        <input
                            className="w-full px-3 py-2 rounded-xl border border-[#2a355e] bg-[#0f1530] text-white"
                            name="date"
                            value={filters.date || ''}
                            onChange={(e) => setFilters(f => ({ ...f, date: e.target.value }))}
                            placeholder="2025-08-20"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-[#9aa4bf] mb-1 block">Cancha</label>
                        <select
                            className="w-full px-3 py-2 rounded-xl border border-[#2a355e] bg-[#0f1530] text-white"
                            name="courtId"
                            value={filters.courtId || ''}
                            onChange={(e) => setFilters(f => ({ ...f, courtId: e.target.value }))}
                        >
                            <option value="">Todas</option>
                            {courts.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                        </select>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-2 rounded-xl bg-[#5b8cff] text-white" onClick={load}>Aplicar</button>
                        <button className="px-3 py-2 rounded-xl bg-[#1e2a52] text-white" onClick={() => { setFilters({}); load() }}>Limpiar</button>
                    </div>
                </div>
            </div>

            <ReservationForm value={editing || undefined} courts={courts} onSubmit={submit} onCancel={() => setEditing(null)} />
            <ReservationsTable items={items} onEdit={setEditing} onDelete={remove} />
            <Toast message={toast} onClose={() => setToast('')} />
        </div>
    )
}
