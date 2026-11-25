
<script setup>
import ServiceCard from '../components/ServiceCard.vue'

const servicios = [
    {
        id: 1,
        numero: '01 / FUERZA',
        icono: '✳',
        nombre: 'MUSCULACIÓN',
        descripcion: 'Desarrolla fuerza y resistencia con equipos para cada etapa de tu entrenamiento.',
        clase: 'service-strength'
    },
    {
        id: 2,
        numero: '02 / ENERGÍA',
        icono: '↗',
        nombre: 'CARDIO',
        descripcion: 'Activa tu cuerpo, mejora tu condición física y lleva tu energía más lejos.',
        clase: 'service-cardio'
    },
    {
        id: 3,
        numero: '03 / PROGRESO',
        icono: '◎',
        nombre: 'ENTRENAMIENTO GUIADO',
        descripcion: 'Recibe orientación para entrenar con técnica, seguridad y objetivos claros.',
        clase: 'service-guided'
    }
]
</script>

<template>
    <section class="section services-section" id="servicios">

        <div class="container">

            <div class="section-heading section-heading-split">

                <div>
                    <p class="eyebrow">
                        <span></span> ENTRENAMIENTO A TU MEDIDA
                    </p>

                    <h2>
                        ENCUENTRA TU<br>
                        <em>MEJOR RITMO.</em>
                    </h2>
                </div>

                <p>
                    Todo lo que necesitas para trabajar por tus
                    objetivos, mejorar tu rendimiento y disfrutar
                    el proceso.
                </p>

            </div>

            <div class="services-grid">

                <ServiceCard
                    v-for="servicio in servicios"
                    :key="servicio.id"
                    :servicio="servicio"
                />

            </div>

        </div>

    </section>
</template>
