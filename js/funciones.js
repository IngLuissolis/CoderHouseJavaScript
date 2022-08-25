/*Llamada a funcion que muestra cantidad de dias restantes para inicio de mundial*/
cantDiasComienzoMundial()

/*Funcion calcula cantidad de dias restantes para inicio de Mundial*/
function cantDiasComienzoMundial () {
    let diferencia = fechaComienzoMundial.getTime()-hoy.getTime()
    let cantdias = Math.floor(diferencia/(1000*3600*24))
    console.log("Dias Restantes para Mundial: ", cantdias)
    document.getElementById("resultado").innerHTML = String(cantdias) + " dias Restantes para el Mundial"
}

/*Funcion muestra por consola pais seleccionado, grupo y puesto*/
function seleccionadoGrupo (grupo, pais) {

    switch (grupo) {

        case "A":

            if (grupoA1 === pais ) {
                grupoA1 = ""
            }

            else if (grupoA2 === pais ) {
                grupoA2 = ""

            }

            else if (grupoA1 === "" && grupoA2 === "") {
                grupoA1 = pais
                console.log("Seleccionado Primero Grupo A")
            }   
            
            else if (grupoA1 != "" && grupoA2 === "") {
                grupoA2 = pais
                console.log("Seleccionado Segundo Grupo A")
            }
        
            else if (grupoA1 != "" && grupoA2 != "") {
                console.log("Primer y Segundo Puesto Grupo A seleccionados")
            }

            console.log("Grupo: " + grupo + ", Primer Puesto: " + grupoA1)
            console.log("Grupo: " + grupo + ", Segundo Puesto: " + grupoA2)
            console.log("-----")

            break
        
        case "B":

            if (grupoB1 === pais ) {
                grupoB1 = ""
            }

            else if (grupoB2 === pais ) {
                grupoB2 = ""

            }

            else if (grupoB1 === "" && grupoB2 === "") {
                grupoB1 = pais
                console.log("Seleccionado Primero Grupo B")
            }   
            
            else if (grupoB1 != "" && grupoB2 === "") {
                grupoB2 = pais
                console.log("Seleccionado Segundo Grupo B")
            }
        
            else if (grupoB1 != "" && grupoB2 != "") {
                console.log("Primer y Segundo Puesto Grupo B seleccionados")
            }

            console.log("Grupo: " + grupo + ", Primer Puesto: " + grupoB1)
            console.log("Grupo: " + grupo + ", Segundo Puesto: " + grupoB2)
            console.log("-----")

            break
    }

}

/*Funcion muestra por consola primer y segundo puesto para grupos A y B */
function seleccionadosProximaFase () {
    if (grupoA1 != "" && grupoA2 != "") {
        console.log("Grupo A - Primer Puesto: ", grupoA1)
        console.log("Grupo A - Segundo Puesto: ", grupoA2)
    } 
    else {
        console.error("Error - Falto seleccionar pais en grupo A")
    }

    if (grupoB1 != "" && grupoB2 != "") {
        console.log("Grupo B - Primer Puesto: ", grupoB1)
        console.log("Grupo B - Segundo Puesto: ", grupoB2)
    } 
    else {
        console.error("Error - Falto seleccionar pais en grupo B")
    }

    console.log("-----")
    
}
