/*Declaracion de Objetos*/
/*objetos paises Grupo A*/
const Qatar = new Pais ("Qatar", "./img/qatar.png", "Qatar")
const Ecuador = new Pais ("Ecuador", "./img/ecuador.png", "Ecuador")
const Senegal = new Pais ("Senegal", "./img/senegal.png", "Senegal")
const PaisesBajos = new Pais ("PaisesBajos", "./img/netherlands.png", "Paises Bajos")
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
const Brazil = new Pais ("Brazil", "./img/brazil-flag.png", "Brasil")
const Serbia = new Pais ("Serbia", "./img/serbia.png", "Serbia")
const Suiza = new Pais ("Suiza", "./img/switzerland.png", "Suiza")
const Camerun = new Pais ("Camerun", "./img/cameroon.png", "Camerun")
/*objetos paises Grupo H*/
const Portugal = new Pais ("Portugal", "./img/portugal.png", "Portugal")
const Ghana = new Pais ("Ghana", "./img/ghana.png", "Ghana")
const Uruguay = new Pais ("Uruguay", "./img/uruguay.png", "Uruguay")
const CoreaDelSur = new Pais ("CoreadelSur", "./img/south-korea.png", "Corea del Sur")

// /*Array de Objetos Paises*/
const grupoTodos = [Qatar, Ecuador, Senegal, PaisesBajos,
    Inglaterra, Iran, EstadosUnidos, Gales,
    Argentina, Arabia, Mexico, Polonia,
    Francia, Australia, Dinamarca, Tunez,
    España, CostaRica, Alemania, Japon,
    Belgica, Canada, Marruecos, Croacia,
    Brazil, Serbia, Suiza, Camerun,
    Portugal, Ghana, Uruguay, CoreaDelSur]

const GrupoA = [Qatar, Ecuador, Senegal, PaisesBajos]
const GrupoB = [Inglaterra, Iran, EstadosUnidos, Gales]
const GrupoC = [Argentina, Arabia, Mexico, Polonia]
const GrupoD = [Francia, Australia, Dinamarca, Tunez]
const GrupoE = [España, CostaRica, Alemania, Japon]
const GrupoF = [Belgica, Canada, Marruecos, Croacia]
const GrupoG = [Brazil, Serbia, Suiza, Camerun]
const GrupoH = [Portugal, Ghana, Uruguay, CoreaDelSur]

const paisesTodos = [{nombre: "Grupo A", paises: GrupoA, grupo: "A"},
                    {nombre: "Grupo B", paises: GrupoB, grupo: "B"},
                    {nombre: "Grupo C", paises: GrupoC, grupo: "C"},
                    {nombre: "Grupo D", paises: GrupoD, grupo: "D"},
                    {nombre: "Grupo E", paises: GrupoE, grupo: "E"},
                    {nombre: "Grupo F", paises: GrupoF, grupo: "F"},
                    {nombre: "Grupo G", paises: GrupoG, grupo: "G"},
                    {nombre: "Grupo H", paises: GrupoH, grupo: "H"}]

/*Objetos Octavos*/
/*const XX = new Pais ("ID", "imgBandera", "nombre", "posicionProximaFase", "ganadorPartido", 
        "perdedorPartido", "faseActual")*/
const A1 = new Pais ("", "", "A1", "CuartosO1", "OctavosA1", "OctavosB2", "A1")
const A2 = new Pais ("", "", "A2", "CuartosO5", "OctavosA2", "OctavosB1", "A2")
const B1 = new Pais ("", "", "B1", "CuartosO5", "OctavosB1", "OctavosA2", "B1")
const B2 = new Pais ("", "", "B2", "CuartosO1", "OctavosB2", "OctavosA1", "B2")
const C1 = new Pais ("", "", "C1", "CuartosO2", "OctavosC1", "OctavosD2", "C1")
const C2 = new Pais ("", "", "C2", "CuartosO6", "OctavosC2", "OctavosD1", "C2")
const D1 = new Pais ("", "", "D1", "CuartosO6", "OctavosD1", "OctavosC2", "D1")
const D2 = new Pais ("", "", "D2", "CuartosO2", "OctavosD2", "OctavosC1", "D2")
const E1 = new Pais ("", "", "E1", "CuartosO3", "OctavosE1", "OctavosF2", "E1")
const E2 = new Pais ("", "", "E2", "CuartosO7", "OctavosE2", "OctavosF1", "E2")
const F1 = new Pais ("", "", "F1", "CuartosO7", "OctavosF1", "OctavosE2", "F1")
const F2 = new Pais ("", "", "F2", "CuartosO3", "OctavosF2", "OctavosE1", "F2")
const G1 = new Pais ("", "", "G1", "CuartosO4", "OctavosG1", "OctavosH2", "G1")
const G2 = new Pais ("", "", "G2", "CuartosO8", "OctavosG2", "OctavosH1", "G2")
const H1 = new Pais ("", "", "H1", "CuartosO8", "OctavosH1", "OctavosG2", "H1")
const H2 = new Pais ("", "", "H2", "CuartosO4", "OctavosH2", "OctavosG1", "H2")

const OctavosIzquierdo = [A1,C1,E1,G1,A2,C2,E2,G2]
const OctavosDerecho = [B2,D2,F2,H2,B1,D1,F1,H1]

const Octavos = [A1,C1,E1,G1,A2,C2,E2,G2,B2,D2,F2,H2,B1,D1,F1,H1]

/*Objetos Cuartos*/
/*const XX = new Pais ("ID", "imgBandera", "nombre", "posicionProximaFase", "ganadorPartido", 
        "perdedorPartido", "faseActual")*/
const CuartosO1 = new Pais ("", "", "CuartosO1", 'Semi1', 'CuartosO1', 'CuartosO2', 'CuartosO1')
const CuartosO2 = new Pais ("", "", "CuartosO2", 'Semi1', 'CuartosO2', 'CuartosO1', 'CuartosO2')
const CuartosO3 = new Pais ("", "", "CuartosO3", 'Semi2', 'CuartosO3', 'CuartosO4', 'CuartosO3')
const CuartosO4 = new Pais ("", "", "CuartosO4", 'Semi2', 'CuartosO4', 'CuartosO3', 'CuartosO4')
const CuartosO5 = new Pais ("", "", "CuartosO5", 'Semi3', 'CuartosO5', 'CuartosO6', 'CuartosO5')
const CuartosO6 = new Pais ("", "", "CuartosO6", 'Semi3', 'CuartosO6', 'CuartosO5', 'CuartosO6')
const CuartosO7 = new Pais ("", "", "CuartosO7", 'Semi4', 'CuartosO7', 'CuartosO8', 'CuartosO7')
const CuartosO8 = new Pais ("", "", "CuartosO8", 'Semi4', 'CuartosO8', 'CuartosO7', 'CuartosO8')

const CuartosIzquierdo = [CuartosO1,CuartosO3,CuartosO5,CuartosO7]
const CuartosDerecho = [CuartosO2,CuartosO4,CuartosO6,CuartosO8]

const Cuartos = [CuartosO1,CuartosO3,CuartosO5,CuartosO7,
    CuartosO2,CuartosO4,CuartosO6,CuartosO8]

/*Objetos Semis*/
const Semi1 = new Pais ("", "", "")
const Semi2 = new Pais ("", "", "")
const Semi3 = new Pais ("", "", "")
const Semi4 = new Pais ("", "", "")

/*Objetos Final*/
const Final1 = new Pais ("", "", "")
const Final2 = new Pais ("", "", "")

/*Objetos TercerPuesto*/
const Tercer1 = new Pais ("", "", "")
const Tercer2 = new Pais ("", "", "")

const Campeon = new Pais ("", "", "")
