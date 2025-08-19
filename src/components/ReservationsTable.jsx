'use client'
import { Pencil, Trash2 } from "lucide-react"

export default function ReservationsTable({ items = [], courts = [], onEdit, onDelete }) {
    const th = "px-4 py-2 text-left text-sm font-semibold text-[#cdd5f7]"
    const td = "px-4 py-3 text-sm text-[#e0e4f4]"

    // Mapa id → nombre
    const courtMap = Object.fromEntries(courts.map(c => [c._id, c.name]));

    return (
        <div className="bg-[#111936] rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-white">⚽ Reservas Activas</h3>
            <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-2">
                    <thead className="bg-gradient-to-r from-[#1e2a52] to-[#26315a]">
                        <tr>
                            <th className={th}>Fecha</th>
                            <th className={th}>Inicio</th>
                            <th className={th}>Fin</th>
                            <th className={th}>Cliente</th>
                            <th className={th}>Cancha</th>
                            <th className={th}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(r => (
                            <tr key={r._id} className="bg-[#1a2240] hover:bg-[#212b4e] transition rounded-xl">
                                <td className={td}>{r.date}</td>
                                <td className={td}>{r.start}</td>
                                <td className={td}>{r.end}</td>
                                <td className={td}>
                                    <span className="px-2 py-1 bg-[#2c3b66] text-[#cdd5f7] rounded-full text-xs">
                                        {r.clientName}
                                    </span>
                                </td>
                                <td className={td}>
                                    <span className="px-2 py-1 bg-[#334477] text-[#9aa4bf] rounded-full text-xs">
                                        {courtMap[r.courtId] || r.courtName || "Cancha"}
                                    </span>
                                </td>
                                <td className={td}>
                                    <div className="flex gap-2">
                                        <button
                                            className="p-2 rounded-xl bg-[#1e2a52] hover:bg-[#2a3970] transition"
                                            onClick={() => onEdit?.(r)}
                                        >
                                            <Pencil className="w-4 h-4 text-[#cdd5f7]" />
                                        </button>
                                        <button
                                            className="p-2 rounded-xl bg-[#ff5b7f] hover:bg-[#ff6f8f] transition"
                                            onClick={() => onDelete?.(r)}
                                        >
                                            <Trash2 className="w-4 h-4 text-white" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {items.length === 0 && (
                            <tr>
                                <td className="text-xs text-[#9aa4bf] p-4 text-center" colSpan={6}>
                                    🚫 No hay reservas activas
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
