'use client'
import { useEffect, useState } from 'react'

const initial = { name: '', type: 'futbol', pricePerHour: 0 }

export default function CourtForm({ value, onSubmit, onCancel }) {
    const [form, setForm] = useState(initial)
    useEffect(() => { setForm(value || initial) }, [value])

    const input = 'w-full px-3 py-2 rounded-xl border border-[#2a355e] bg-[#0f1530] text-white'
    function change(e) { const { name, value } = e.target; setForm(f => ({ ...f, [name]: name === 'pricePerHour' ? Number(value) : value })) }
    function submit(e) { e.preventDefault(); onSubmit?.(form) }

    return (
        <div className="bg-[#111936] rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-semibold">{value ? 'Editar cancha' : 'Nueva cancha'}</h3>
            <form onSubmit={submit} className="grid gap-4 md:grid-cols-2 mt-3">
                <div>
                    <label className="text-sm text-[#9aa4bf] mb-1 block">Nombre</label>
                    <input className={input} name="name" value={form.name} onChange={change} required minLength={2} />
                </div>
                <div>
                    <label className="text-sm text-[#9aa4bf] mb-1 block">Tipo</label>
                    <select className={input} name="type" value={form.type} onChange={change}>
                        <option value="futbol">futbol</option>
                        <option value="baloncesto">baloncesto</option>
                        <option value="tenis">tenis</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm text-[#9aa4bf] mb-1 block">Precio por hora</label>
                    <input className={input} name="pricePerHour" type="number" step="0.01" min="0" value={form.pricePerHour} onChange={change} required />
                </div>
                <div className="flex gap-2 items-end">
                    <button className="px-3 py-2 rounded-xl bg-[#5b8cff] text-white" type="submit">{value ? 'Guardar' : 'Crear'}</button>
                    {onCancel && <button className="px-3 py-2 rounded-xl bg-[#1e2a52] text-white" type="button" onClick={onCancel}>Cancelar</button>}
                </div>
            </form>
        </div>
    )
}
