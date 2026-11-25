
<script setup>
import PlanCard from '../components/PlanCard.vue'
import { useRouter } from 'vue-router'
import { planSeleccionado } from '../store/registrations.js'

const router = useRouter()

const planes = [
    {
        id: 'basico',
        numero: '01',
        nombre: 'BÁSICO',
        precio: '$60.000',
        duracion: 'mes',
        descripcion: 'Lo esencial para comenzar a construir tu hábito.',
        beneficios: [
            'Acceso a zona de musculación',
            'Horario regular',
            'Orientación inicial'
        ],
        destacado: false
    },
    {
        id: 'premium',
        numero: '02',
        nombre: 'PREMIUM',
        precio: '$90.000',
        duracion: 'mes',
        descripcion: 'Una experiencia más completa para llevar tu progreso al siguiente nivel.',
        beneficios: [
            'Acceso completo al gimnasio',
            'Clases grupales',
            'Seguimiento básico'
        ],
        destacado: true
    },
    {
        id: 'dia',
        numero: '03',
        nombre: 'DÍA',
        precio: '$10.000',
        duracion: 'visita',
        descripcion: 'Conoce el espacio y entrena cuando quieras probar.',
        beneficios: [
            'Acceso por un día',
            'Uso de equipos disponibles',
            'Ideal para probar'
        ],
        destacado: false
    }
]

function seleccionarPlan(id) {
    planSeleccionado.value = id

    router.push({
        path: '/inscripcion',
        query: { plan: id }
    })
}
</script>

<template>
    <section class="section plans-section" id="planes">

        <div class="container">

            <div class="section-heading">

                <p class="eyebrow">
                    <span></span> INVIERTE EN TI
                </p>

                <h2>ELIGE TU <em>PLAN.</em></h2>

                <p>
                    Empieza con el plan que se adapte a tu ritmo.
                    El primer paso depende de ti.
                </p>

            </div>

            <div class="plans-grid">

                <PlanCard
                    v-for="plan in planes"
                    :key="plan.id"
                    :plan="plan"
                    @seleccionar="seleccionarPlan"
                />

            </div>

            <p class="note">
                * Los precios son de ejemplo y pueden modificarse
                según las condiciones del gimnasio.
            </p>

        </div>

    </section>
</template>
