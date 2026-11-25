
<script setup>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { registrar, planSeleccionado } from '../store/registrations.js'

const route = useRoute()

const planes = {
    basico: 'Básico',
    premium: 'Premium',
    dia: 'Por día'
}

const planInicial = route.query.plan || planSeleccionado.value

const formulario = reactive({
    nombre: '',
    correo: '',
    telefono: '',
    plan: Object.hasOwn(planes, planInicial) ? planInicial : '',
    mensaje: '',
    aceptacion: false
})

const tocados = reactive({})

// Validaciones
const errores = computed(() => ({
    nombre: formulario.nombre.trim().length < 3
        ? 'Ingresa al menos 3 caracteres.' : '',

    correo: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)
        ? 'Ingresa un correo válido.' : '',

    telefono: !/^[0-9 ]{7,15}$/.test(formulario.telefono)
        || formulario.telefono.replace(/\s/g, '').length < 7
        ? 'Ingresa un teléfono válido.' : '',

    plan: !Object.hasOwn(planes, formulario.plan)
        ? 'Selecciona un plan.' : '',

    aceptacion: !formulario.aceptacion
        ? 'Debes aceptar esta condición.' : ''
}))

function validar(campo) {
    tocados[campo] = true
}

function claseCampo(campo) {
    if (!tocados[campo]) return ''

    return errores.value[campo] ? 'invalid' : 'valid'
}

// Enviar formulario
function enviarFormulario() {

    Object.keys(errores.value).forEach(validar)

    if (Object.values(errores.value).some(error => error)) {
        return
    }

    const guardado = registrar({
        nombre: formulario.nombre.trim(),
        correo: formulario.correo.trim(),
        telefono: formulario.telefono.trim(),
        plan: planes[formulario.plan],
        mensaje: formulario.mensaje.trim()
    })

    if (!guardado) return

    alert('¡Inscripción registrada correctamente!')

    Object.assign(formulario, {
        nombre: '',
        correo: '',
        telefono: '',
        plan: '',
        mensaje: '',
        aceptacion: false
    })

    planSeleccionado.value = ''

    Object.keys(tocados).forEach(campo => {
        delete tocados[campo]
    })
}
</script>

<template>

    <form
        class="registration-form"
        @submit.prevent="enviarFormulario"
        novalidate>

        <div class="form-heading">

            <p class="eyebrow">FORMULARIO / 01</p>

            <h3>INSCRÍBETE <em>AHORA.</em></h3>

            <p>Completa la información para registrar tu interés.</p>

        </div>

        <div class="form-grid">

            <div class="form-group">

                <label for="nombre">Nombre completo</label>

                <input
                    id="nombre"
                    type="text"
                    v-model="formulario.nombre"
                    :class="claseCampo('nombre')"
                    @input="validar('nombre')"
                    placeholder="Ej. Juan Pérez"
                    minlength="3"
                    autocomplete="name"
                    required>

                <small
                    v-if="tocados.nombre && errores.nombre"
                    class="error-message">
                    {{ errores.nombre }}
                </small>

            </div>

            <div class="form-group">

                <label for="correo">Correo electrónico</label>

                <input
                    id="correo"
                    type="email"
                    v-model="formulario.correo"
                    :class="claseCampo('correo')"
                    @input="validar('correo')"
                    placeholder="nombre@correo.com"
                    autocomplete="email"
                    required>

                <small
                    v-if="tocados.correo && errores.correo"
                    class="error-message">
                    {{ errores.correo }}
                </small>

            </div>

            <div class="form-group">

                <label for="telefono">Teléfono</label>

                <input
                    id="telefono"
                    type="tel"
                    v-model="formulario.telefono"
                    :class="claseCampo('telefono')"
                    @input="validar('telefono')"
                    placeholder="300 000 0000"
                    pattern="[0-9 ]{7,15}"
                    autocomplete="tel"
                    required>

                <small
                    v-if="tocados.telefono && errores.telefono"
                    class="error-message">
                    {{ errores.telefono }}
                </small>

            </div>

            <div class="form-group">

                <label for="plan">Plan de interés</label>

                <select
                    id="plan"
                    v-model="formulario.plan"
                    :class="claseCampo('plan')"
                    @change="validar('plan')"
                    required>

                    <option value="" disabled>
                        Selecciona un plan
                    </option>

                    <option value="basico">Básico</option>
                    <option value="premium">Premium</option>
                    <option value="dia">Por día</option>

                </select>

                <small
                    v-if="tocados.plan && errores.plan"
                    class="error-message">
                    {{ errores.plan }}
                </small>

            </div>

        </div>

        <div class="form-group">

            <label for="mensaje">
                ¿Cuál es tu objetivo? (opcional)
            </label>

            <textarea
                id="mensaje"
                v-model="formulario.mensaje"
                rows="4"
                placeholder="Cuéntanos qué quieres conseguir...">
            </textarea>

        </div>

        <label class="check-label">

            <input
                type="checkbox"
                v-model="formulario.aceptacion"
                @change="validar('aceptacion')"
                required>

            <span>
                Acepto que el gimnasio se comunique conmigo.
            </span>

        </label>

        <p
            v-if="tocados.aceptacion && errores.aceptacion"
            class="error-message">
            {{ errores.aceptacion }}
        </p>

        <button
            class="button button-orange button-full"
            type="submit">

            ENVIAR INSCRIPCIÓN <span>↗</span>

        </button>

        <p class="form-note">
            Formulario demostrativo. Los datos se almacenan
            localmente en este navegador mediante localStorage.
        </p>

    </form>

</template>
