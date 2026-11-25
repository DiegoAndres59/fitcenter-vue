
<script setup>
defineProps({
    frase: Object
})
</script>

<template>
    <article class="quote-card">

        <p>"{{ frase.quote }}"</p>

        <h4>— {{ frase.author }}</h4>

    </article>
</template>
