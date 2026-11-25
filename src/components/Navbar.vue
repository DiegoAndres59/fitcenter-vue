
<template>
    <header class="header">
        <div class="container nav">

            <RouterLink class="logo" to="/">
                FIT<span>CENTER</span><b>.</b>
            </RouterLink>

            <nav aria-label="Navegación principal">
                <RouterLink to="/">Inicio</RouterLink>
                <RouterLink to="/servicios">Servicios</RouterLink>
                <RouterLink to="/planes">Planes</RouterLink>
                <RouterLink to="/motivacion">Motivación</RouterLink>
                <RouterLink to="/inscripcion">Inscripción</RouterLink>
            </nav>

            <RouterLink class="nav-button" to="/inscripcion">
                ÚNETE AHORA <span>↗</span>
            </RouterLink>

        </div>
    </header>
</template>
