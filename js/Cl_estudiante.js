export default class Estudiante {
    constructor(ced, nota) {
        this.ced = ced
        this.nota = nota
    }
    setCed(ced) {
        this._ced = ced
    }
    getCed() {
        return this._ced
    }
    setNota(nota) {
        this._nota = nota
    }
    getNota() {
        return this._nota
    }
    aprobado() {
        if (this.nota >= 48) {
            return true
        } else {
            return false
        }
    }
}
