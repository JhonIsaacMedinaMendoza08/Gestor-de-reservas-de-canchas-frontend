'use client'

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api';

function buildURL(path, params) {
    const url = new URL(path.replace(/^\/+/, ''), API_BASE + '/');
    if (params) Object.entries(params).forEach(([k, v]) => {
        if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
    });
    return url.toString();
}

export async function api(path, opts = {}) {
    const { method = 'GET', params, body } = opts;
    const res = await fetch(buildURL(path, params), {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
        // credentials: 'include',  // ❌ quítalo
        mode: 'cors',               // ✅ explícito (aunque es default en navegador)
        cache: 'no-store',
    });
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) {
        const message = data?.message || (data?.errors ? data.errors.map((e) => e.msg || `${e.path}: inválido`).join(', ') : 'Error de solicitud');
        const err = new Error(message);
        err.status = res.status;
        err.details = data;
        throw err;
    }
    return data;
}

export const get = (path, params) => api(path, { method: 'GET', params });
export const post = (path, body) => api(path, { method: 'POST', body });
export const put = (path, body) => api(path, { method: 'PUT', body });
export const del = (path) => api(path, { method: 'DELETE' });