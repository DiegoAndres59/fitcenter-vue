
<script setup>
defineProps({
    servicio: Object
})
</script>

<template>
    <article class="service-card" :class="servicio.clase">

        <div class="service-top">
            <span>{{ servicio.numero }}</span>
            <span class="service-icon">{{ servicio.icono }}</span>
        </div>

        <div class="service-card-content">

            <h3>{{ servicio.nombre }}</h3>

            <p>{{ servicio.descripcion }}</p>

            <RouterLink to="/inscripcion">
                CONOCE MÁS <span>↗</span>
            </RouterLink>

        </div>

    </article>
</template>
