/*Clase Elemento*/
class Elemento {
    constructor(ID, imgBandera, nombre, posicionProximaFase, 
        perdedorPartido, perdedorSemi) {
        this.ID = ID
        this.imgBandera = imgBandera
        this.nombre = nombre
        this.posicionProximaFase = posicionProximaFase
        this.perdedorPartido = perdedorPartido
        this.perdedorSemi = perdedorSemi
    }

    borrarElementoFase () {
        this.nombre = ""
        this.imgBandera = ""
    }
}
