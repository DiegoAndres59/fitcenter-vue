
<script setup>
import {
    inscripciones,
    editar,
    eliminar
} from '../store/registrations.js'
</script>

<template>

    <section class="registrations-section">

        <div class="registrations-heading">

            <div>

                <p class="eyebrow">GESTIÓN DE REGISTROS</p>

                <h3>
                    INSCRIPCIONES <em>REGISTRADAS.</em>
                </h3>

                <p class="list-description">
                    Usuarios almacenados en este navegador.
                </p>

            </div>

            <p id="registration-count">
                Inscritos: {{ inscripciones.length }}
            </p>

        </div>

        <div id="registrations-list" aria-live="polite">

            <p
                v-if="inscripciones.length === 0"
                class="empty-message">

                Todavía no hay inscripciones registradas.

            </p>

            <template v-else>

                <article
                    v-for="usuario in inscripciones"
                    :key="usuario.id"
                    class="registration-card">

                    <h4>{{ usuario.nombre }}</h4>

                    <p>Correo: {{ usuario.correo }}</p>

                    <p>Teléfono: {{ usuario.telefono }}</p>

                    <p>Plan: {{ usuario.plan }}</p>

                    <div class="registration-actions">

                        <button
                            type="button"
                            class="action-button edit-button"
                            @click="editar(usuario.id)">
                            Editar
                        </button>

                        <button
                            type="button"
                            class="action-button delete-button"
                            @click="eliminar(usuario.id)">
                            Eliminar
                        </button>

                    </div>

                </article>

            </template>

        </div>

    </section>

</template>
