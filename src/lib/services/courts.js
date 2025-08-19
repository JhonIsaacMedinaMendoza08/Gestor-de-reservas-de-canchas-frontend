import { get, post, put, del } from '../api'

export const CourtsService = {
    list: () => get('/courts/get'),
    create: (payload) => post('/courts/post', payload),
    update: (id, payload) => put(`/courts/put/${id}`, payload),
    remove: (id) => del(`/courts/delete/${id}`),
}