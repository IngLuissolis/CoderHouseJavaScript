/*Declaracion de Objetos*/
/*objetos paises Grupo A
const Qatar = new Pais ("Qatar", "./img/qatar.png", "Qatar")
const Ecuador = new Pais ("Ecuador", "./img/ecuador.png", "Ecuador")
const Senegal = new Pais ("Senegal", "./img/senegal.png", "Senegal")
const PaisesBajos = new Pais ("PaisesBajos", "./img/netherlands.png", "Paises Bajos")
*/

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

/*objetos paises Grupo B*/
const Inglaterra = new Pais ("Inglaterra", "./img/england.png", "Inglaterra")
const Iran = new Pais ("Iran", "./img/iran.png", "Iran")
const EstadosUnidos = new Pais ("EstadosUnidos", "./img/united-states.png", "Estados Unidos")
const Gales = new Pais ("Gales", "./img/wales.png", "Gales")
/*objetos paises Grupo C*/
const Argentina = new Pais ("Argentina", "./img/argentina.png", "Argentina")
const Arabia = new Pais ("ArabiaSaudita", "./img/saudi-arabia.png", "Arabia Saudita")
const Mexico = new Pais ("Mexico", "./img/mexico.png", "Mexico")
const Polonia = new Pais ("Polonia", "./img/poland.png", "Polonia")
/*objetos paises Grupo D*/
const Francia = new Pais ("Francia", "./img/france.png", "Francia")
const Australia = new Pais ("Australia", "./img/australia.png", "Australia")
const Dinamarca = new Pais ("Dinamarca", "./img/denmark.png", "Dinamarca")
const Tunez = new Pais ("Tunez", "./img/tunisia.png", "Tunez")
/*objetos paises Grupo E*/
const España = new Pais ("España", "./img/spain.png", "España")
const CostaRica = new Pais ("CostaRica", "./img/costa-rica.png", "Costa Rica")
const Alemania = new Pais ("Alemania", "./img/germany.png", "Alemania")
const Japon = new Pais ("Japon", "./img/japan.png", "Japon")
/*objetos paises Grupo F*/
const Belgica = new Pais ("Belgica", "./img/belgium.png", "Belgica")
const Canada = new Pais ("Canada", "./img/canada.png", "Canada")
const Marruecos = new Pais ("Marruecos", "./img/morocco.png", "Marruecos")
const Croacia = new Pais ("Croacia", "./img/croatia.png", "Croacia")
/*objetos paises Grupo G*/
const Brasil = new Pais ("Brasil", "./img/brazil-flag.png", "Brasil")
const Serbia = new Pais ("Serbia", "./img/serbia.png", "Serbia")
const Suiza = new Pais ("Suiza", "./img/switzerland.png", "Suiza")
const Camerun = new Pais ("Camerun", "./img/cameroon.png", "Camerun")
/*objetos paises Grupo H*/
const Portugal = new Pais ("Portugal", "./img/portugal.png", "Portugal")
const Ghana = new Pais ("Ghana", "./img/ghana.png", "Ghana")
const Uruguay = new Pais ("Uruguay", "./img/uruguay.png", "Uruguay")
const CoreaDelSur = new Pais ("CoreadelSur", "./img/south-korea.png", "Corea del Sur")

/*Arrays Grupos */
const GrupoA = [Qatar, Ecuador, Senegal, PaisesBajos]
const GrupoB = [Inglaterra, Iran, EstadosUnidos, Gales]
const GrupoC = [Argentina, Arabia, Mexico, Polonia]
const GrupoD = [Francia, Australia, Dinamarca, Tunez]
const GrupoE = [España, CostaRica, Alemania, Japon]
const GrupoF = [Belgica, Canada, Marruecos, Croacia]
const GrupoG = [Brasil, Serbia, Suiza, Camerun]
const GrupoH = [Portugal, Ghana, Uruguay, CoreaDelSur]

const grupoTodos = [{nombre: "Grupo A", paises: GrupoA, grupo: "A"},
                    {nombre: "Grupo B", paises: GrupoB, grupo: "B"},
                    {nombre: "Grupo C", paises: GrupoC, grupo: "C"},
                    {nombre: "Grupo D", paises: GrupoD, grupo: "D"},
                    {nombre: "Grupo E", paises: GrupoE, grupo: "E"},
                    {nombre: "Grupo F", paises: GrupoF, grupo: "F"},
                    {nombre: "Grupo G", paises: GrupoG, grupo: "G"},
                    {nombre: "Grupo H", paises: GrupoH, grupo: "H"}]

/*Objetos */
/*const XX = new Pais ("ID", "imgBandera", "nombre", "posicionProximaFase", "perdedorPartido")*/
const A1 = new Pais ("A1", "", "", "CuartosO1", "B2")
const A2 = new Pais ("A2", "", "", "CuartosO5", "B1")
const B1 = new Pais ("B1", "", "", "CuartosO5", "A2")
const B2 = new Pais ("B2", "", "", "CuartosO1", "A1")
const C1 = new Pais ("C1", "", "", "CuartosO2", "D2")
const C2 = new Pais ("C2", "", "", "CuartosO6", "D1")
const D1 = new Pais ("D1", "", "", "CuartosO6", "C2")
const D2 = new Pais ("D2", "", "", "CuartosO2", "C1")
const E1 = new Pais ("E1", "", "", "CuartosO3", "F2")
const E2 = new Pais ("E2", "", "", "CuartosO7", "F1")
const F1 = new Pais ("F1", "", "", "CuartosO7", "E2")
const F2 = new Pais ("F2", "", "", "CuartosO3", "E1")
const G1 = new Pais ("G1", "", "", "CuartosO4", "H2")
const G2 = new Pais ("G2", "", "", "CuartosO8", "H1")
const H1 = new Pais ("H1", "", "", "CuartosO8", "G2")
const H2 = new Pais ("H2", "", "", "CuartosO4", "G1")

/*Array que se utiliza para armar plantilla en DOM*/
const OctavosIzquierdo = [A1,C1,E1,G1,A2,C2,E2,G2]
const OctavosDerecho = [B2,D2,F2,H2,B1,D1,F1,H1]

/*Array que se recorre en funcion jqueryLogicaFase() */
const Octavos = [A1,A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2,G1,G2,H1,H2]

/*Objetos Cuartos*/
/*const XX = new Pais ("ID", "imgBandera", "nombre", "posicionProximaFase", "perdedorPartido")*/
const CuartosO1 = new Pais ("CuartosO1", "", "", 'Semi1', 'CuartosO2')
const CuartosO2 = new Pais ("CuartosO2", "", "", 'Semi1', 'CuartosO1')
const CuartosO3 = new Pais ("CuartosO3", "", "", 'Semi2', 'CuartosO4')
const CuartosO4 = new Pais ("CuartosO4", "", "", 'Semi2', 'CuartosO3')
const CuartosO5 = new Pais ("CuartosO5", "", "", 'Semi3', 'CuartosO6')
const CuartosO6 = new Pais ("CuartosO6", "", "", 'Semi3', 'CuartosO5')
const CuartosO7 = new Pais ("CuartosO7", "", "", 'Semi4', 'CuartosO8')
const CuartosO8 = new Pais ("CuartosO8", "", "", 'Semi4', 'CuartosO7')

const CuartosIzquierdo = [CuartosO1,CuartosO3,CuartosO5,CuartosO7]
const CuartosDerecho = [CuartosO2,CuartosO4,CuartosO6,CuartosO8]

const Cuartos = [CuartosO1,CuartosO3,CuartosO5,CuartosO7,
    CuartosO2,CuartosO4,CuartosO6,CuartosO8]

/*Objetos Semis*/
const Semi1 = new Pais ("Semi1", "", "", "Final1", "Semi2", "Tercer1")
const Semi2 = new Pais ("Semi2", "", "", "Final1", "Semi1", "Tercer1")
const Semi3 = new Pais ("Semi3", "", "", "Final2", "Semi4", "Tercer2")
const Semi4 = new Pais ("Semi4", "", "", "Final2", "Semi3", "Tercer2")

const SemiIzquierdo = [Semi1, Semi3]
const SemiDerecho = [Semi2, Semi4]

const Semi = [Semi1, Semi2, Semi3, Semi4]

/*Objetos TercerPuesto*/
/*const XX = new Pais ("ID", "imgBandera", "nombre", "posicionProximaFase", "perdedorPartido")*/
const Tercer1 = new Pais ("Tercer1", "", "", "", "Tercer2")
const Tercer2 = new Pais ("Tercer2", "", "", "", "Tercer1")

const TercerIzquierdo = [Tercer1]
const TercerDerecho = [Tercer2]

const Tercer = [Tercer1, Tercer2]

/*Objetos Final*/
const Final1 = new Pais ("Final1", "", "", "Campeon", "Final2")
const Final2 = new Pais ("Final2", "", "", "Campeon", "Final1")

const FinalIzquierdo = [Final1]
const FinalDerecho = [Final2]

const Final = [Final1, Final2]

/*Array Campeon */

const Campeon = [{ID: "Campeon", imgBandera: "", nombre: "", posicionProximaFase: "Campeon"}]

/*jquery Array */
// const jqueryOctavos = [A1,A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2,G1,G2,H1,H2]