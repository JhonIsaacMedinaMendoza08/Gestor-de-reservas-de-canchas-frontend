'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Route error:', error);
    }, [error]);

    return (
        <div className="bg-card rounded-2xl p-4 shadow-xl">
            <h3 className="text-lg font-semibold">Algo salió mal</h3>
            <pre className="text-xs text-muted whitespace-pre-wrap">
                {String(error?.message || error)}
            </pre>
            <div className="mt-3 flex gap-2">
                <button className="px-3 py-2 rounded-xl bg-primary text-white" onClick={() => reset()}>
                    Reintentar
                </button>
                <button className="px-3 py-2 rounded-xl bg-[#1e2a52] text-white" onClick={() => location.reload()}>
                    Recargar
                </button>
            </div>
        </div>
    );
}
