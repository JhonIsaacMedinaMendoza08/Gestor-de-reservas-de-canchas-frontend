'use client'
import { useEffect, useState } from 'react'

const initial = { date: '', start: '', end: '', courtId: '', clientName: '' }

export default function ReservationForm({ value, courts = [], onSubmit, onCancel }) {
    const [form, setForm] = useState(initial)
    useEffect(() => { setForm(value || initial) }, [value])

    const input = `
        w-full px-3 py-2 rounded-xl border border-[#2a355e] 
        bg-[#0f1530]/70 text-white placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-[#5b8cff]
        transition-all duration-200
    `

    function change(e) {
        const { name, value } = e.target
        setForm(f => ({ ...f, [name]: value }))
    }

    function submit(e) {
        e.preventDefault();
        onSubmit?.(form)
    }

    return (
        <div className="bg-[#111936]/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-[#2a355e]">
            <h3 className="text-xl font-bold text-white tracking-wide mb-4">
                {value ? '✏️ Editar reserva' : '🆕 Nueva reserva'}
            </h3>
            <form onSubmit={submit} className="grid gap-5 md:grid-cols-2 mt-3">

                <div>
                    <label className="text-sm text-[#9aa4bf] mb-1 block">📅 Fecha (YYYY-MM-DD)</label>
                    <input className={input} name="date" value={form.date} onChange={change} placeholder="2025-08-20" required />
                </div>

                <div>
                    <label className="text-sm text-[#9aa4bf] mb-1 block">⏰ Hora inicio (HH:mm)</label>
                    <input className={input} name="start" value={form.start} onChange={change} placeholder="19:00" required />
                </div>

                <div>
                    <label className="text-sm text-[#9aa4bf] mb-1 block">⏳ Hora fin (HH:mm)</label>
                    <input className={input} name="end" value={form.end} onChange={change} placeholder="20:00" required />
                </div>

                <div>
                    <label className="text-sm text-[#9aa4bf] mb-1 block">⚽ Cancha</label>
                    <select className={input} name="courtId" value={form.courtId} onChange={change} required>
                        <option value="">Seleccione...</option>
                        {courts.map(c => (
                            <option key={c._id} value={c._id}>
                                {c.name} ({c.type})
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="text-sm text-[#9aa4bf] mb-1 block">👤 Cliente</label>
                    <input className={input} name="clientName" value={form.clientName} onChange={change} required minLength={2} placeholder="Juan Pérez" />
                </div>

                <div className="flex gap-3 items-end md:col-span-2 justify-end">
                    <button
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5b8cff] to-[#3b6bff] 
                                   hover:from-[#6b9cff] hover:to-[#4b7bff]
                                   text-white font-semibold shadow-lg transition-all duration-200"
                        type="submit"
                    >
                        {value ? '💾 Guardar' : '✅ Crear'}
                    </button>
                    {onCancel && (
                        <button
                            className="px-5 py-2.5 rounded-xl bg-[#1e2a52] hover:bg-[#263463] 
                                       text-white font-medium transition-all duration-200"
                            type="button"
                            onClick={onCancel}
                        >
                            ❌ Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}
