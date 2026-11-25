
import { createRouter, createWebHashHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Servicios from '../views/Servicios.vue'
import Planes from '../views/Planes.vue'
import Motivacion from '../views/Motivacion.vue'
import Inscripcion from '../views/Inscripcion.vue'

const routes = [
    { path: '/', component: Inicio },
    { path: '/servicios', component: Servicios },
    { path: '/planes', component: Planes },
    { path: '/motivacion', component: Motivacion },
    { path: '/inscripcion', component: Inscripcion }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
