'use client'

export default function CourtsTable({ items = [], onEdit, onDelete }) {
    const th = 'border-b border-[#26315a] p-2 text-left'
    const td = th
    return (
        <div className="bg-[#111936] rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-semibold">Canchas</h3>
            <table className="w-full border-collapse mt-3">
                <thead>
                    <tr>
                        <th className={th}>Nombre</th>
                        <th className={th}>Tipo</th>
                        <th className={th}>$ / hora</th>
                        <th className={th}></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(c => (
                        <tr key={c._id}>
                            <td className={td}>{c.name}</td>
                            <td className={td}><span className="bg-[#1f2a52] px-2 py-1 rounded-full text-[#afc3ff] text-xs">{c.type}</span></td>
                            <td className={td}>{c.pricePerHour}</td>
                            <td className={td}>
                                <div className="flex gap-2">
                                    <button className="px-3 py-2 rounded-xl bg-[#1e2a52] text-white" onClick={() => onEdit?.(c)}>Editar</button>
                                    <button className="px-3 py-2 rounded-xl bg-[#ff5b7f] text-white" onClick={() => onDelete?.(c)}>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {items.length === 0 && <tr><td className="text-xs text-[#9aa4bf] p-2" colSpan={4}>Sin registros</td></tr>}
                </tbody>
            </table>
        </div>
    )
}
