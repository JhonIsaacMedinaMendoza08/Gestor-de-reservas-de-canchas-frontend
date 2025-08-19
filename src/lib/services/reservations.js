import { get, post, put, del } from '../api'

export const ReservationsService = {
    list: (params) => get('/reservations/get', params),
    create: (payload) => post('/reservations/post', payload),
    update: (id, payload) => put(`/reservations/put/${id}`, payload),
    remove: (id) => del(`/reservations/delete/${id}`),
}