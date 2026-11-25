
<script setup>
import { ref, onMounted } from 'vue'
import QuoteCard from '../components/QuoteCard.vue'

// Variables reactivas
const frases = ref([])
const cargando = ref(false)
const error = ref('')

// Consumir API
async function cargarFrases() {

    cargando.value = true
    error.value = ''
    frases.value = []

    try {

        const peticiones = Array.from({ length: 4 }, () =>
            fetch('https://dummyjson.com/quotes/random')
        )

        const respuestas = await Promise.all(peticiones)

        if (respuestas.some(respuesta => !respuesta.ok)) {
            throw new Error('No se pudieron cargar las frases')
        }

        frases.value = await Promise.all(
            respuestas.map(respuesta => respuesta.json())
        )

    } catch (e) {

        error.value = 'No se pudieron cargar las frases. Intenta nuevamente.'
        console.error(e)

    } finally {

        cargando.value = false

    }
}

// Cargar frases al entrar a la vista
onMounted(cargarFrases)
</script>

<template>
    <section class="section motivation-section" id="motivacion">

        <div class="container">

            <div class="section-heading">

                <p class="eyebrow">
                    <span></span> UNA MENTE FUERTE
                </p>

                <h2>
                    LA MOTIVACIÓN TAMBIÉN<br>
                    <em>SE ENTRENA.</em>
                </h2>

                <p>
                    Una idea puede cambiar tu día.
                    Encuentra inspiración para seguir avanzando.
                </p>

            </div>

            <div aria-live="polite">

                <p v-if="cargando" class="api-message">
                    Cargando frases motivacionales...
                </p>

                <p v-else-if="error" class="api-message">
                    {{ error }}
                </p>

                <p v-else class="api-message">
                    Frases actualizadas correctamente.
                </p>

            </div>

            <div class="quotes-grid">

                <QuoteCard
                    v-for="(frase, indice) in frases"
                    :key="indice"
                    :frase="frase"
                />

            </div>

            <div class="quotes-action">

                <button
                    type="button"
                    id="reload-quotes"
                    class="button button-orange"
                    :disabled="cargando"
                    @click="cargarFrases">

                    OTRAS FRASES <span>↻</span>

                </button>

            </div>

        </div>

    </section>
</template>
