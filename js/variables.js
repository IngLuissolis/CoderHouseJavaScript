/*Variables para calcular dias restantes para el Mundial*/
let hoy = new Date()
let fechaComienzoMundial = new Date("11/20/2022")
let guardarAPIWorldCup
let imgWeather

let guardarAPIWorldCupSimulacion = [
  {
    Country: "Russia",
    Fourth: "England",
    Second_place: "Croatia",
    Third: "Belgium",
    Winner: "France",
    Year: 2018,
  }
]

/*Variables jquery */
let jqueryContadorOctavos
let jqueryArrayOctavos

/*Descomposicion */
let [jqueryOctavosPrimero,jqueryOctavosSegundo] = [ "", ""]