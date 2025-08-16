import { get, post, put, del } from '../api'

export const CourtsService = {
    list: () => get('/courts'),
    create: (payload) => post('/courts', payload),
    update: (id, payload) => put(`/courts/${id}`, payload),
    remove: (id) => del(`/courts/${id}`),
}