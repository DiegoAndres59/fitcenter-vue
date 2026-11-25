
import { ref } from 'vue'

const STORAGE_KEY = 'fitcenter_inscripciones'

export const inscripciones = ref([])
export const planSeleccionado = ref('')

// Recuperar datos guardados
try {
    const datos = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (Array.isArray(datos)) {
        inscripciones.value = datos
    }
} catch (error) {
    console.error('Error al recuperar los datos:', error)
}

// Guardar datos
function guardar(datos) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(datos))
        inscripciones.value = datos
        return true
    } catch (error) {
        alert('No se pudieron guardar los datos.')
        return false
    }
}

// Registrar usuario
export function registrar(datos) {

    const nuevaInscripcion = {
        id: crypto.randomUUID(),
        ...datos,
        fecha: new Date().toLocaleDateString()
    }

    return guardar([...inscripciones.value, nuevaInscripcion])
}

// Editar usuario
export function editar(id) {

    const usuario = inscripciones.value.find(item => item.id === id)

    if (!usuario) return

    const nombre = prompt('Nuevo nombre:', usuario.nombre)

    if (nombre === null) return

    if (nombre.trim().length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.')
        return
    }

    const datos = inscripciones.value.map(item =>
        item.id === id
            ? { ...item, nombre: nombre.trim() }
            : item
    )

    guardar(datos)
}

// Eliminar usuario
export function eliminar(id) {

    if (!confirm('¿Deseas eliminar esta inscripción?')) return

    const datos = inscripciones.value.filter(item => item.id !== id)

    guardar(datos)
}
