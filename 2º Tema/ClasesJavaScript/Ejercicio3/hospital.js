// Usamos el modo estricto
"use strict";


// Definimos la clase hospital

class Hospital {
    constructor(nombre, ciudad, nPacientes) {
        // Atributos clase hospital
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.pacientes = new Array();

        // Inicializamos pacientes
        for (let i = 0; i < nPacientes; i++) {
            this.pacientes[i] = new Paciente(i, "Paciente" + i, "Constipado");
        }
    }

    // Eliminamos paciente
    eliminarPaciente(n) {
        // Eliminamos el paciente de la posicion n
        this.pacientes.splice(n, 1);
    }




    // Imprime todos los pacientes
    imprimirPacientes() {
        for (let i = 0; i < this.pacientes.length; i++) {
            alert(this.pacientes[i].nombre);

        }
    }




}

// Definimos la paciente

class Paciente {
    constructor(codigo, nombre, enfermedad) {
        // Atributos del vuelo
        this.codigo = codigo;
        this.nombre = nombre;
        this.enfermedad = enfermedad;
    }

    // Creo un hospital
}

let miHospi = new Hospital("CEED", "Valencia", 10);
miHospi.imprimirPacientes();
miHospi.eliminarPaciente(0);
miHospi.imprimirPacientes();
miHospi.eliminarPaciente(0);
miHospi.imprimirPacientes();
miHospi.eliminarPaciente(0);


