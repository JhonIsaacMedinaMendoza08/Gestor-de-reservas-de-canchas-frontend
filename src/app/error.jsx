'use client'

export default function Error({ error, reset }) {
    return (
        <div className="card">
            <h3 className="text-lg font-semibold">Algo salió mal</h3>
            <pre className="small whitespace-pre-wrap">{String(error)}</pre>
            <button className="btn mt-2" onClick={() => reset()}>Reintentar</button>
        </div>
    )
}