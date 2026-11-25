
<script setup>
defineProps({
    plan: Object
})

const emit = defineEmits(['seleccionar'])
</script>

<template>
    <article class="plan-card" :class="{ featured: plan.destacado }">

        <span v-if="plan.destacado" class="popular">
            MÁS ELEGIDO
        </span>

        <p class="plan-index">PLAN / {{ plan.numero }}</p>

        <p class="plan-name">{{ plan.nombre }}</p>

        <h3>
            {{ plan.precio }}
            <small>/ {{ plan.duracion }}</small>
        </h3>

        <p class="plan-description">
            {{ plan.descripcion }}
        </p>

        <ul>
            <li
                v-for="beneficio in plan.beneficios"
                :key="beneficio">
                {{ beneficio }}
            </li>
        </ul>

        <button
            type="button"
            class="button button-full"
            :class="plan.destacado ? 'button-orange' : 'button-outline'"
            @click="emit('seleccionar', plan.id)">

            {{ plan.destacado ? 'QUIERO ESTE PLAN' : 'SELECCIONAR PLAN' }}

            <span>↗</span>

        </button>

    </article>
</template>
