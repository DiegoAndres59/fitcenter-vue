
<script setup>
import RegistrationForm from '../components/RegistrationForm.vue'
import RegistrationList from '../components/RegistrationList.vue'
</script>

<template>

    <section class="section registration-section" id="inscripcion">

        <div class="container registration-layout">

            <div class="registration-info">

                <p class="eyebrow">
                    <span></span> TU SIGUIENTE NIVEL TE ESPERA
                </p>

                <h2>
                    HOY ES UN<br>
                    BUEN DÍA PARA<br>
                    <em>EMPEZAR.</em>
                </h2>

                <p>
                    Déjanos tus datos y el plan que te interesa.
                    Estamos un paso más cerca de alcanzar tus objetivos.
                </p>

                <div class="info-line">
                    <span>✦</span> Entrena con propósito
                </div>

                <div class="info-line">
                    <span>✦</span> Construye hábitos saludables
                </div>

                <div class="info-line">
                    <span>✦</span> Avanza a tu propio ritmo
                </div>

                <div class="registration-stamp">
                    FITCENTER <b>+</b>
                    <small>COMIENZA TU PROCESO</small>
                </div>

            </div>

            <RegistrationForm />

            <RegistrationList />

        </div>

    </section>

</template>
