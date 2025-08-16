import { get, post, put, del } from '../api'

export const ReservationsService = {
    list: (params) => get('/reservations', params),
    create: (payload) => post('/reservations', payload),
    update: (id, payload) => put(`/reservations/${id}`, payload),
    remove: (id) => del(`/reservations/${id}`),
}