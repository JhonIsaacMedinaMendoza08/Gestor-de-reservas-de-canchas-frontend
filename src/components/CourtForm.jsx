'use client'
import { useEffect, useState } from 'react'

const initial = { name: '', type: 'futbol', pricePerHour: 0 }

export default function CourtForm({ value, onSubmit, onCancel }) {
    const [form, setForm] = useState(initial)
    useEffect(() => { setForm(value || initial) }, [value])

    const input = 'w-full px-4 py-2 rounded-xl border border-[#2a355e] bg-[#0f1530] text-white focus:ring-2 focus:ring-[#5b8cff] focus:border-[#5b8cff] transition-all duration-200 placeholder-gray-400'
    function change(e) {
        const { name, value } = e.target
        setForm(f => ({ ...f, [name]: name === 'pricePerHour' ? Number(value) : value }))
    }
    function submit(e) { e.preventDefault(); onSubmit?.(form) }

    return (
        <div className="bg-gradient-to-br from-[#111936] to-[#0b1025] rounded-2xl p-8 shadow-2xl border border-[#1e2a52]">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                {value ? '✏️ Editar cancha' : '➕ Nueva cancha'}
            </h3>

            <form onSubmit={submit} className="grid gap-6 md:grid-cols-2">
                {/* Nombre */}
                <div>
                    <label className="text-sm text-[#9aa4bf] mb-2 block">Nombre</label>
                    <input
                        className={input}
                        name="name"
                        value={form.name}
                        onChange={change}
                        required
                        minLength={2}
                        placeholder="Ej: Cancha Norte"
                    />
                </div>

                {/* Tipo */}
                <div>
                    <label className="text-sm text-[#9aa4bf] mb-2 block">Tipo</label>
                    <select
                        className={input}
                        name="type"
                        value={form.type}
                        onChange={change}
                    >
                        <option value="futbol">⚽ Fútbol</option>
                        <option value="baloncesto">🏀 Baloncesto</option>
                        <option value="tenis">🎾 Tenis</option>
                    </select>
                </div>

                {/* Precio */}
                <div>
                    <label className="text-sm text-[#9aa4bf] mb-2 block">Precio por hora</label>
                    <input
                        className={input}
                        name="pricePerHour"
                        type="number"
                        step="0.01"
                        min="0"
                        value={form.pricePerHour}
                        onChange={change}
                        required
                        placeholder="Ej: 50000"
                    />
                </div>

                {/* Botones */}
                <div className="flex gap-3 items-end">
                    <button
                        className="flex-1 px-4 py-2 rounded-xl bg-gradient-to-r from-[#5b8cff] to-[#3a6dff] text-white font-semibold hover:scale-105 transition-transform shadow-lg"
                        type="submit"
                    >
                        {value ? '💾 Guardar' : '✅ Crear'}
                    </button>

                    {onCancel && (
                        <button
                            className="px-4 py-2 rounded-xl bg-[#1e2a52] text-white font-medium hover:bg-[#28376f] transition-all"
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
