<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Barrio Gol</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>

        <div class="offcanvas-body d-flex flex-column align-items-start">
          <router-link class="nav-link mb-2" to="/Perfil">
            <i class="pi pi-user Icons-vue"></i> Perfil
          </router-link>

          <router-link class="nav-link mb-2" to="/jugadores">
            <i class="pi pi-plus-circle Icons-vue"></i> Jugadores
          </router-link>

          <router-link class="nav-link " to="/videos">
            <i class="pi pi-youtube Icons-vue"></i> Videos
          </router-link>


          <router-link class="nav-link mb-2" to="/equipos">
            <i class="pi pi-users Icons-vue"></i> Equipos
          </router-link>

          <router-link class="nav-link mb-2" to="/stores">
            <i class="pi pi-shopping-bag " style="color: white"></i> Tienda
          </router-link>

          <router-link class="nav-link mb-2" to="/home">
            <i class="pi pi-home Icons-vue"></i> Home
          </router-link>

          <router-link class="nav-link mb-3" to="/notificaciones">
            <i class="pi pi-bell "></i> Notificaciones
          </router-link>

          <router-link class="nav-link" to="/inicioSesion">
            <td><i class="pi pi-sign-out"></i>Cerra Sesion</td>
          </router-link>
          <div class="mt-4 text-light small">
            No tienes Notificaciones Hoy: {{ fecha }}
          </div>
        </div>
      </div>
    </div>
  </nav>


</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


import { ref } from 'vue';
import { onMounted, onBeforeUnmount } from 'vue';


const fecha = ref('')
onMounted(() => {

  // Actualiza la fecha cada segundo
  const interval = setInterval(() => {
    fecha.value = new Date().toLocaleString();
  }, 1000);

  onBeforeUnmount(() => {
    clearInterval(interval);
  });
});
</script>

<style scoped>
/* Estilo para el body */
body {
  background:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('../src/assets/imagenes/fondo.jpeg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
}


#cerrar_sesion_link {
  top: 35%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: transparent;
  border: none;
}

.api8 {
  position: relative;
  height: 110px;
  width: auto;
  border-right: black;
  border-right-style: solid;
  border-right-width: 1px;
}

.api8:hover {
  animation: bounce 0.6s ease-in-out;
}

.loader {
  width: fit-content;
  height: fit-content;
  background-color: rgb(58, 58, 58);
  border-radius: 7px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: 0.2s;
}

.loader:hover {
  background-color: rgb(26, 26, 26);
}

.loader:hover svg {
  color: white;
}

.loader svg {
  color: rgba(255, 255, 255, 0.651);
  transform: scale(1.2);
  transition: 0.2s;
}

.point {
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 6px;
  height: 6px;
  background-color: rgb(0, 255, 0);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.point::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 1px;
  background-color: rgb(0, 255, 0);
  border-radius: 25px;
  animation: loop 1s 0s infinite;
}

.notification {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 8px;
  border-radius: 5px;
  white-space: nowrap;
  display: none;
  font-size: 12px;
  z-index: 10;
  top: 45px;
}

.loader:hover .notification {
  display: block;
}

@keyframes loop {
  0% {
    background-color: rgb(0, 255, 0);
    width: 1px;
    height: 1px;
  }

  100% {
    background-color: rgba(0, 255, 0, 0);
    width: 30px;
    height: 30px;
  }
}

.header1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: 1000;
  background: linear-gradient(rgb(129, 126, 126), rgb(255, 255, 255));
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  height: auto;
  overflow: hidden;

}

.Icons-vue {
  font-size: 1rem;
  margin-bottom: 1rem;
  padding-right: 0.10rem;
}


@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}



@media (min-width: 320px) and (max-width: 480px) {
  .header1 {
    background: linear-gradient(rgb(56, 118, 103), rgb(255, 255, 255));
    width: 100%;

  }

  .api8 {
    position: relative;
    height: 36px;
    width: auto;
    border-right: black;
    border-right-style: solid;
    border-right-width: 1px;
  }

}


@media (min-width: 481px) and (max-width: 600px) {

  .header1 {
    background: linear-gradient(rgb(56, 118, 103), rgb(255, 255, 255));


  }

  .api8 {
    position: relative;
    height: 70px;
    width: auto;
    border-right: black;
    border-right-style: solid;
    border-right-width: 1px;
  }

}


@media (min-width: 601px) and (max-width: 768px) {

  .header1 {
    background: linear-gradient(rgb(56, 118, 103), rgb(255, 255, 255));

  }

  .api8 {
    position: relative;
    height: 70px;
    width: auto;
    border-right: black;
    border-right-style: solid;
    border-right-width: 1px;
  }

}


@media (min-width: 769px) and (max-width: 1024px) {

  .header1 {
    background: linear-gradient(rgb(56, 118, 103), rgb(255, 255, 255));

  }

  .api8 {
    position: relative;
    height: 70px;
    width: auto;
    border-right: black;
    border-right-style: solid;
    border-right-width: 1px;
  }

}


@media (min-width: 1025px) and (max-width: 1280px) {

  .header1 {
    background: linear-gradient(rgb(56, 118, 103), rgb(255, 255, 255));

  }

  .api8 {
    position: relative;
    height: 70px;
    width: auto;
    border-right: black;
    border-right-style: solid;
    border-right-width: 1px;
  }

}
</style>