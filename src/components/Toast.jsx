'use client';
import { useEffect, useState } from 'react';

export default function Toast({ message, type = 'info', onClose, duration = 3000 }) {
    const [open, setOpen] = useState(Boolean(message));
    useEffect(() => { if (!message) return; setOpen(true); const id = setTimeout(() => { setOpen(false); onClose?.() }, duration); return () => clearTimeout(id); }, [message]);
    if (!open || !message) return null;
    return (
        <div style={{ position: 'fixed', right: 16, bottom: 16, background: type === 'error' ? '#ff5b7f' : '#1f8a5a', color: '#fff', padding: '12px 14px', borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,.4)' }}>
            {message}
        </div>
    );
}
