import { defineStore } from "pinia";
import axios from "axios";

export const useUsuarios = defineStore("usuario", {
  state: () => ({
    usuario: {
      id: "",
      documento: "",
      nombreUsuario: "",
      correo: "",
      ciudad: "",
      descripcion: "",
      fechaNacimiento: "",
      celular: "",
      Edad: "",
      posicion: "",
      fileInput: "",
      equipo_tiene: 0,
      esLider: false,
      isLoggedIn: false,
    },
  }),
  actions: {

    async setUsuario(userData) {
      Object.assign(this.usuario, userData);
      this.usuario.isLoggedIn = true;

      if (this.usuario.equipo_tiene !== 0) {
        try {
          // Añadimos withCredentials para que esta petición 
          const response = await axios.get(
            `http://127.0.0.1:8000/es_lider/${this.usuario.documento}`,
            { withCredentials: true }
          );
          this.usuario.esLider = response.data.esLider;
        } catch (error) {
          console.error("Error al verificar si el usuario es líder:", error);
          this.usuario.esLider = false;
        }
      }
    },

    // Acción para limpiar todo al salir
    cerrarSesion() {
      this.$reset(); // Pinia tiene esta función mágica para volver al estado inicial
    },

    actualizarEquipo(equipo_tiene) {
      this.usuario.equipo_tiene = equipo_tiene;
      this.usuario.esLider = false;
    },


    async logout() {
      try {
        // 1. Llamar al backend para borrar la cookie
        await axios.post("http://127.0.0.1:8000/salir", {}, { withCredentials: true });
      } catch (error) {
        console.error("Error al borrar cookie en el back:", error);
      } finally {
        sessionStorage.clear()
        // 2. Limpiar el estado de Pinia sin importar si el back falló
        this.$reset();
      }
    }
  },
  persist: {
    storage: sessionStorage, // Recomendado usar sessionStorage para que al cerrar el navegador se limpie por seguridad
  },
});