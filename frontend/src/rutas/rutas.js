import AboutUs from "@/components/vistas/AboutUs.vue";
import iniciosesion from "@/components/auth/Iniciosesion.vue";
import Perfil from "@/components/vistas/Perfil.vue";
import Videohome from "@/components/vistas/videohome.vue";
import actualizar_perfil from "@/components/auth/actualizar_perfil.vue";
import home from "@/components/vistas/home.vue";
import Contacto from "@/components/vistas/Contacto.vue";
import equipo from "@/components/equipos/equipo.vue";
import Eventos from "@/components/vistas/Eventos.vue";
import subir_video from "@/components/shared/subir_video.vue";
import Notificaciones from "@/components/layout/Notificaciones.vue";
import crearequipo from "@/components/equipos/crearequipo_form.vue";
import crearpartido from "@/components/partidos/crearpartido.vue";
import diegos from "@/components/shared/diegos.vue";
import { createRouter, createWebHistory } from "vue-router";
import Torneos_guardado from "@/components/partidos/torneos_guardado.vue";
import Torneos_creados from "@/components/partidos/torneos_creados.vue";
import Perfiles from "@/components/vistas/perfiles.vue";
import Jugadores from "@/components/jugadores/jugadores.vue";
import Invitar from "@/components/vistas/invitar.vue";
import Videos from "@/components/shared/videos.vue";
import Pagos from "@/components/shared/pagos.vue";
import ganadortorneo from "@/components/equipos/ganadortorneo.vue";
import jugadorestorneo from "@/components/jugadores/jugadorestorneo.vue";
import targetas from "@/components/shared/targetas.vue";
import Galeria from "@/components/vistas/galeria.vue";
import Vender from "@/components/shared/vender.vue";
import Creartorneo from "@/components/partidos/creartorneo.vue";
import One_video from "@/components/shared/one_video.vue";
import Stores from "@/components/shared/stores.vue";
import Partidos_creado from "@/components/partidos/partidos_creado.vue";
import Sala_espera_partidos from "@/components/partidos/sala_espera_partidos.vue";
import Ganador_partido from "@/components/partidos/ganador_partido.vue";
import Resultados_partidos from "@/components/partidos/resultados_partidos.vue";
import Partidos_finalizados from "@/components/partidos/partidos_finalizados.vue";
import Inpeccion_equipo from "@/components/equipos/inpeccion_equipo.vue";
import Torneos_finalizados from "@/components/partidos/torneos_finalizados.vue";
import Torneo_sala_espera from "@/components/partidos/torneo_sala_espera.vue";
import Solicitud_teams from "@/components/partidos/solicitud_teams.vue";
import Torneoscreador from "@/components/partidos/torneoscreador.vue";
import { useUsuarios } from '@/stores/usuario';



const routes = [
  {
    path: '/contactanos',//sobre nosotros
    name: 'contactanos',
    component: AboutUs,

  },
  {
    path: '/videohome',//video de inicio
    name: 'videohome',
    component: Videohome,

  },
  {
    path: '/partidos_creados',//partidos ver los creados
    name: 'partidos_creados',
    component: Partidos_creado,
    meta: { requiresAuth: true }

  },

  {
    path: '/sala_partidos/:id', 
    name: 'sala_partidos',
    component: Sala_espera_partidos,
    props: true, // opcional: pasa el id como prop
    meta: { requiresAuth: true }
  },
  {
    path: '/iniciosesion',
    name: 'iniciosesion',
    component: iniciosesion,

  },
  {
    path: '/Perfil',//perfil del usuario
    name: 'Perfil',
    component: Perfil,
    meta: { requiresAuth: true }

  },
  {
    path: '/solicitud_teams',//perfil del usuario
    name: 'soliicitud_teams',
    component: Solicitud_teams,
    meta: { requiresAuth: true }

  },
  {
    path: '/actualizar_perfil',//donde se actualiza
    name: 'actualizar_perfil',
    component: actualizar_perfil,
    meta: { requiresAuth: true }

  },
  {
    path: '/home',//donde se ve la hora , ayuda, cerrar sesion y mas
    name: 'home',
    component: home,
    meta: { requiresAuth: true }

  },
  {
    path: '/contacto',//para enviar pqrs
    name: 'contacto',
    component: Contacto,

    meta: { requiresAuth: true }
  },

  {
    path: '/torneos',// interfaz base de partidos torneos
    name: 'torneos',
    component: Eventos,
    meta: { requiresAuth: true }

  },
  {
    path: '/equipos',//interfaz lider equipo
    name: 'equipos',
    component: equipo,
    meta: { requiresAuth: true }

  },

  {
    path: "/one_video/:id",//para ver un video en especifico
    name: "One_Video",
    component: One_video,
    meta: { requiresAuth: true }
  },
  {
    path: '/videos',//tik tok barrio gol
    name: 'videos',
    component: Videos,
    meta: { requiresAuth: true }

  },
  {
    path: '/subirvideo',//fomr de subir los videos
    name: 'subirvideo',
    component: subir_video,
    meta: { requiresAuth: true }

  },
  {
    path: '/notificaciones',//notificaciones de pqrs
    name: 'notificaciones',
    component: Notificaciones,
    meta: { requiresAuth: true }

  },
  {
    path: '/creartorneo',//formulario para crear torneo
    name: 'creartorneo',
    component: Creartorneo,
    meta: { requiresAuth: true }

  },
  {
    path: '/creacionequipo',//formulario para crear equipo
    name: 'creacionequipo',
    component: crearequipo,
    meta: { requiresAuth: true }

  },
  {
    path: '/resultados_partidos/:id', // ← Agregamos ":id" para recibir el ID del partido
    name: 'resultados_partidos',
    component: Resultados_partidos,
    props: true,// Opcional: Pasa el id como una prop
    meta: { requiresAuth: true }
  },
  {
    path: '/crearpartido',//formulario para crear partido
    name: 'crearpartido',
    component: crearpartido,
    meta: { requiresAuth: true }
  },
  {
    path: '/partido_finalizados',//formulario para crear partido
    name: 'partidos_finalizados',
    component: Partidos_finalizados,
    meta: { requiresAuth: true }

  },
  {
    path: '/ganador_partido/:id',//ganador de partido
    name: 'ganador_partido',
    component: Ganador_partido,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/diegos',//torneos anterior creador
    name: 'diegos',
    component: diegos,
    meta: { requiresAuth: true }

  },

  {
    path: '/torneo_guardado',//torneos de equipo
    name: 'torneo_guardado',
    component: Torneos_guardado,
    meta: { requiresAuth: true }
  },
  {
    path: '/torneo_sala_espera/:id_torneo', // Ruta dinámica con el id_torneo
    name: 'torneo_sala_espera',
    component: Torneo_sala_espera,
    props: true, // Esto pasa el parámetro id_torneo como prop al componente
    meta: { requiresAuth: true }
  },
  {
    path: '/torneo_creados',
    name: 'torneo_creados',
    component: Torneos_creados,
    meta: { requiresAuth: true }
  },
  {
    path: '/torneos_finalizados',
    name: 'torneos_finalizados',
    component: Torneos_finalizados,
    meta: { requiresAuth: true }
  },
  {
    path: '/perfiles/:documento',
    name: 'perfiles',
    component: Perfiles,
    meta: { requiresAuth: true }
  },
  {
    path: '/inspeccion_equipo/:id',
    name: 'inspeccion_equipo',
    component: Inpeccion_equipo,
    meta: { requiresAuth: true }
  },
  {
    path: '/jugadores',
    name: 'jugadores',
    component: Jugadores,
    meta: { requiresAuth: true }
  },
  {
    path: '/invitar',//inivtar a equipo
    name: 'invitar',
    component: Invitar,
    meta: { requiresAuth: true }
  },
  {
    path: '/pay',//billetera
    name: 'pay',
    component: Pagos,
    meta: { requiresAuth: true }
  },
  {
    path: '/torneoscreador/:id_torneo', // interfaz creador torneo
    name: 'torneoscreador',
    component: Torneoscreador,
    meta: { requiresAuth: true }
  },
  {
    path: '/gana',//escoger ganador torneo
    name: 'ganadortorneo',
    component: ganadortorneo,
    meta: { requiresAuth: true }
  },
  {
    path: '/jugadorestorneo',//interfaz de torneo(goles)
    name: 'jugadorestorneo',
    component: jugadorestorneo,
    meta: { requiresAuth: true }
  },
  {
    path: '/targetas',//donde se sacan tarjetas rojas azules,amarilas
    name: 'targetas',
    component: targetas,
    meta: { requiresAuth: true }
  },
  {
    path: '/galeria',//galeria de equipo
    name: 'galeria',
    component: Galeria,
    meta: { requiresAuth: true }

  },
  {
    path: '/galeria-insepccion/:id',
    name: 'GaleriaInsepccion',
    component: () => import('@/components/shared/galeria_insepccion.vue'),
    meta: { requiresAuth: true }

  },
  {
    path: '/stores',
    name: 'stores',
    component: Stores,
    meta: { requiresAuth: true }

  },
  {
    path: '/vendedor',//interfaz de vendedor
    name: 'vendedor',
    component: Vender,
    meta: { requiresAuth: true }


  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
})



router.beforeEach((to, from, next) => {
  const authStore = useUsuarios();

  if (to.meta.requiresAuth && !authStore.usuario.isLoggedIn) {
    next('/inicioSesion');
  } else {
    next();
  }
});


export default router


