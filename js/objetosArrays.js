/*Objetos Fase de Grupos*/
/*const XX = new Elemento ("ID", "imgBandera", "nombre", "posicionProximaFase", "perdedorPartido")*/
const A1 = new Elemento ("A1", "", "", "CuartosO1", "B2")
const A2 = new Elemento ("A2", "", "", "CuartosO5", "B1")
const B1 = new Elemento ("B1", "", "", "CuartosO5", "A2")
const B2 = new Elemento ("B2", "", "", "CuartosO1", "A1")
const C1 = new Elemento ("C1", "", "", "CuartosO2", "D2")
const C2 = new Elemento ("C2", "", "", "CuartosO6", "D1")
const D1 = new Elemento ("D1", "", "", "CuartosO6", "C2")
const D2 = new Elemento ("D2", "", "", "CuartosO2", "C1")
const E1 = new Elemento ("E1", "", "", "CuartosO3", "F2")
const E2 = new Elemento ("E2", "", "", "CuartosO7", "F1")
const F1 = new Elemento ("F1", "", "", "CuartosO7", "E2")
const F2 = new Elemento ("F2", "", "", "CuartosO3", "E1")
const G1 = new Elemento ("G1", "", "", "CuartosO4", "H2")
const G2 = new Elemento ("G2", "", "", "CuartosO8", "H1")
const H1 = new Elemento ("H1", "", "", "CuartosO8", "G2")
const H2 = new Elemento ("H2", "", "", "CuartosO4", "G1")

/*Array que se utiliza para armar plantilla en DOM*/
const OctavosIzquierdo = [A1,C1,E1,G1,A2,C2,E2,G2]
const OctavosDerecho = [B2,D2,F2,H2,B1,D1,F1,H1]

/*Array que se recorre en funcion LogicaFase() */
const Octavos = [A1,A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2,G1,G2,H1,H2]

/*Objetos Cuartos*/
/*const XX = new Elemento ("ID", "imgBandera", "nombre", "posicionProximaFase", "perdedorPartido")*/
const CuartosO1 = new Elemento ("CuartosO1", "", "", 'Semi1', 'CuartosO2')
const CuartosO2 = new Elemento ("CuartosO2", "", "", 'Semi1', 'CuartosO1')
const CuartosO3 = new Elemento ("CuartosO3", "", "", 'Semi2', 'CuartosO4')
const CuartosO4 = new Elemento ("CuartosO4", "", "", 'Semi2', 'CuartosO3')
const CuartosO5 = new Elemento ("CuartosO5", "", "", 'Semi3', 'CuartosO6')
const CuartosO6 = new Elemento ("CuartosO6", "", "", 'Semi3', 'CuartosO5')
const CuartosO7 = new Elemento ("CuartosO7", "", "", 'Semi4', 'CuartosO8')
const CuartosO8 = new Elemento ("CuartosO8", "", "", 'Semi4', 'CuartosO7')

/*Array que se utiliza para armar plantilla en DOM*/
const CuartosIzquierdo = [CuartosO1,CuartosO3,CuartosO5,CuartosO7]
const CuartosDerecho = [CuartosO2,CuartosO4,CuartosO6,CuartosO8]

/*Array que se recorre en funcion LogicaFase() */
const Cuartos = [CuartosO1,CuartosO3,CuartosO5,CuartosO7,
    CuartosO2,CuartosO4,CuartosO6,CuartosO8]

/*Objetos Semis*/
const Semi1 = new Elemento ("Semi1", "", "", "Final1", "Semi2", "Tercer1")
const Semi2 = new Elemento ("Semi2", "", "", "Final1", "Semi1", "Tercer1")
const Semi3 = new Elemento ("Semi3", "", "", "Final2", "Semi4", "Tercer2")
const Semi4 = new Elemento ("Semi4", "", "", "Final2", "Semi3", "Tercer2")

/*Array que se utiliza para armar plantilla en DOM*/
const SemiIzquierdo = [Semi1, Semi3]
const SemiDerecho = [Semi2, Semi4]

const Semi = [Semi1, Semi2, Semi3, Semi4]

/*Objetos TercerPuesto*/
/*const XX = new Elemento ("ID", "imgBandera", "nombre", "posicionProximaFase", "perdedorPartido")*/
const Tercer1 = new Elemento ("Tercer1", "", "", "", "Tercer2")
const Tercer2 = new Elemento ("Tercer2", "", "", "", "Tercer1")

const TercerIzquierdo = [Tercer1]
const TercerDerecho = [Tercer2]

const Tercer = [Tercer1, Tercer2]

/*Objetos Final*/
const Final1 = new Elemento ("Final1", "", "", "Campeon", "Final2")
const Final2 = new Elemento ("Final2", "", "", "Campeon", "Final1")

const FinalIzquierdo = [Final1]
const FinalDerecho = [Final2]

const Final = [Final1, Final2]

/*Objeto Campeon*/
const ObjetoCampeon = new Elemento ("Campeon", "", "", "Campeon")

/*Array Campeon */

const Campeon = [ObjetoCampeon]



/*Guardando datos el localStorage*/
/*objetos paises Grupo A*/
const QatarObjeto = {ID: "Qatar", imgBandera: "./img/qatar.png", nombre: "Qatar"}
const EcuadorObjeto = {ID: "Ecuador", imgBandera: "./img/ecuador.png", nombre: "Ecuador"}
const SenegalObjeto = {ID: "Senegal", imgBandera: "./img/senegal.png", nombre: "Senegal"}
const PaisesBajosObjeto = {ID: "PaisesBajos", imgBandera: "./img/netherlands.png", nombre: "Paises Bajos"}

/*Conversion Objetos paises grupo A a JSON*/
const QatarJSON = JSON.stringify(QatarObjeto)
const EcuadorJSON = JSON.stringify(EcuadorObjeto)
const SenegalJSON = JSON.stringify(SenegalObjeto)
const PaisesBajosJSON = JSON.stringify(PaisesBajosObjeto)

/*Guardar JSON en localStorage */
localStorage.setItem("Qatar", QatarJSON)
localStorage.setItem("Ecuador", EcuadorJSON)
localStorage.setItem("Senegal", SenegalJSON)
localStorage.setItem("PaisesBajos", PaisesBajosJSON)

/*JSON almacenado en localStorage se extrae y se guarda en variables JSON2*/
const QatarJSON2 = localStorage.getItem("Qatar")
const EcuadorJSON2 = localStorage.getItem("Ecuador")
const SenegalJSON2 = localStorage.getItem("Senegal")
const PaisesBajosJSON2 = localStorage.getItem("PaisesBajos")

/*Conversion JSON a objeto */
const Qatar = JSON.parse(QatarJSON2)
const Ecuador = JSON.parse(EcuadorJSON2)
const Senegal = JSON.parse(SenegalJSON2)
const PaisesBajos = JSON.parse(PaisesBajosJSON2)