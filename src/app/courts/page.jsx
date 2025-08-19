'use client'
import { useEffect, useState } from 'react'
import { CourtsService } from '../../lib/services/courts'
import CourtsTable from '../../components/CourtsTable'
import CourtForm from '../../components/CourtForm'
import Toast from '../../components/Toast'

export default function CourtsPage(){
  const [items, setItems] = useState([])
  const [editing, setEditing] = useState(null)
  const [toast, setToast] = useState('')

  async function load(){
    try { setItems(await CourtsService.list()) }
    catch (e){ setToast(e.message || 'Error cargando canchas') }
  }
  useEffect(()=>{ load() }, [])

  async function submit(form){
    try {
      if (editing) { await CourtsService.update(editing._id, form); setToast('Cancha actualizada') }
      else { await CourtsService.create(form); setToast('Cancha creada') }
      setEditing(null)
      await load()
    } catch (e) { setToast(e.message || 'Error') }
  }

  async function remove(c){
    if (!confirm('¿Eliminar cancha?')) return
    try { await CourtsService.remove(c._id); setToast('Cancha eliminada'); await load() }
    catch (e) { setToast(e.message || 'Error') }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <CourtForm value={editing || undefined} onSubmit={submit} onCancel={()=>setEditing(null)} />
      <CourtsTable items={items} onEdit={setEditing} onDelete={remove} />
      <Toast message={toast} onClose={()=>setToast('')} />
    </div>
  )
}
