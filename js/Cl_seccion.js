

import Cl_estudiante from "./Cl_estudiante.js"

export default class Seccion {
    constructor() {
        this.cantadoAprobados = 0
        this.cantadoReprobados = 0
        this.notaPromedio = 0
    }
    procesar(estud) {
        if (estud.aprobado()) {
            this.cantadoAprobados++
        } else {
            this.cantadoReprobados++
        }
        this.notaPromedio += estud.nota
    }
}