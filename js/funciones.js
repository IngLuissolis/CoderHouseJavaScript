/*Funcion calcula desde fecha actual, cantidad de dias restantes para inicio de Mundial*/
const cantDiasComienzoMundial = () => {
    let diferencia = fechaComienzoMundial.getTime()-hoy.getTime()
    let cantdias = Math.floor(diferencia/(1000*3600*24))
    console.log("Dias Restantes para Mundial: ", cantdias)
    document.getElementById("resultado").innerHTML = String(cantdias) + " dias Restantes para Inicio del Mundial"
}


/*Funcion muestra en octavos nombre y bandera de paises seleccionnados*/
const paisSeleccionadoOctavos = (grupo, pais) => {

    switch (grupo) {
      case "A":
        /* */
        if (A1.nombre === "" && A2.nombre === "") {
          grupoA.forEach((A) => {
            if (A.nombre === pais) {
              A1.nombre = A.nombre
              A1.imgBandera = A.imgBandera
              document.getElementById("textOctavosA1").innerHTML = A1.nombre
              document.getElementById("imgOctavosA1").src = A1.imgBandera
              document.getElementById("imgOctavosA1").style.display = "block"
            }
          });
        } else if (A1.nombre != pais && A2.nombre === "") {
          grupoA.forEach((A) => {
            if (A.nombre === pais) {
              A2.nombre = A.nombre
              A2.imgBandera = A.imgBandera
              document.getElementById("textOctavosA2").innerHTML = A2.nombre
              document.getElementById("imgOctavosA2").src = A2.imgBandera
              document.getElementById("imgOctavosA2").style.display = "block"
            }
          });
        } else if (A1.nombre === pais) {
          A1.nombre = ""
          A1.imgBandera = ""
          document.getElementById("textOctavosA1").innerHTML = "A1"
          document.getElementById("imgOctavosA1").src = ""
          document.getElementById("imgOctavosA1").style.display = "none"
        } else if (A2.nombre === pais) {
          A2.nombre = ""
          A2.imgBandera = ""
          document.getElementById("textOctavosA2").innerHTML = "A2"
          document.getElementById("imgOctavosA2").src = ""
          document.getElementById("imgOctavosA2").style.display = "none"
        } else if (A1.nombre === "" && A2.nombre != "") {
          grupoA.forEach((A) => {
            if (A.nombre === pais) {
              A1.nombre = A.nombre
              A1.imgBandera = A.imgBandera
              document.getElementById("textOctavosA1").innerHTML = A1.nombre
              document.getElementById("imgOctavosA1").src = A1.imgBandera
              document.getElementById("imgOctavosA1").style.display = "block"
            }
          });
        } else if (A1.nombre != "" && A2.nombre != "") {
          /*Primero y segundo puesto estan seleccionados, aparece mensaje por consola */
          console.warn("Primer y Segundo Puesto Grupo A seleccionados");
        }
        break;

      case "B":
        if (B1.nombre === "" && B2.nombre === "") {
          grupoB.forEach((B) => {
            if (B.nombre === pais) {
              B1.nombre = B.nombre
              B1.imgBandera = B.imgBandera
              document.getElementById("textOctavosB1").innerHTML = B1.nombre
              document.getElementById("imgOctavosB1").src = B1.imgBandera
              document.getElementById("imgOctavosB1").style.display = "block"
            }
          });
        } else if (B1.nombre != pais && B2.nombre === "") {
          grupoB.forEach((B) => {
            if (B.nombre === pais) {
              B2.nombre = B.nombre
              B2.imgBandera = B.imgBandera
              document.getElementById("textOctavosB2").innerHTML = B2.nombre
              document.getElementById("imgOctavosB2").src = B2.imgBandera
              document.getElementById("imgOctavosB2").style.display = "block"
            }
          });
        } else if (B1.nombre === pais) {
          B1.nombre = ""
          B1.imgBandera = ""
          document.getElementById("textOctavosB1").innerHTML = "B1"
          document.getElementById("imgOctavosB1").src = ""
          document.getElementById("imgOctavosB1").style.display = "none"
        } else if (B2.nombre === pais) {
          B2.nombre = ""
          B2.imgBandera = ""
          document.getElementById("textOctavosB2").innerHTML = "B2"
          document.getElementById("imgOctavosB2").src = ""
          document.getElementById("imgOctavosB2").style.display = "none"
        } else if (B1.nombre === "" && B2.nombre != "") {
          grupoB.forEach((B) => {
            if (B.nombre === pais) {
              B1.nombre = B.nombre
              B1.imgBandera = B.imgBandera
              document.getElementById("textOctavosB1").innerHTML = B1.nombre
              document.getElementById("imgOctavosB1").src = B1.imgBandera
              document.getElementById("imgOctavosB1").style.display = "block"
            }
          });
        } else if (B1.nombre != "" && B2.nombre != "") {
          /*Primero y segundo puesto estan seleccionados, aparece mensaje por consola */
          console.warn("Primer y Segundo Puesto Grupo B seleccionados");
        }
        break;

      case "C":
        if (C1.nombre === "" && C2.nombre === "") {
          grupoC.forEach((C) => {
            if (C.nombre === pais) {
              C1.nombre = C.nombre
              C1.imgBandera = C.imgBandera
              document.getElementById("textOctavosC1").innerHTML = C1.nombre
              document.getElementById("imgOctavosC1").src = C1.imgBandera
              document.getElementById("imgOctavosC1").style.display = "block"
            }
          });
        } else if (C1.nombre != pais && C2.nombre === "") {
          grupoC.forEach((C) => {
            if (C.nombre === pais) {
              C2.nombre = C.nombre
              C2.imgBandera = C.imgBandera
              document.getElementById("textOctavosC2").innerHTML = C2.nombre
              document.getElementById("imgOctavosC2").src = C2.imgBandera
              document.getElementById("imgOctavosC2").style.display = "block"
            }
          });
        } else if (C1.nombre === pais) {
          C1.nombre = ""
          C1.imgBandera = ""
          document.getElementById("textOctavosC1").innerHTML = "C1"
          document.getElementById("imgOctavosC1").src = ""
          document.getElementById("imgOctavosC1").style.display = "none"
        } else if (C2.nombre === pais) {
          C2.nombre = ""
          C2.imgBandera = ""
          document.getElementById("textOctavosC2").innerHTML = "C2"
          document.getElementById("imgOctavosC2").src = ""
          document.getElementById("imgOctavosC2").style.display = "none"
        } else if (C1.nombre === "" && C2.nombre != "") {
          grupoC.forEach((C) => {
            if (C.nombre === pais) {
              C1.nombre = C.nombre
              C1.imgBandera = C.imgBandera
              document.getElementById("textOctavosC1").innerHTML = C1.nombre
              document.getElementById("imgOctavosC1").src = C1.imgBandera
              document.getElementById("imgOctavosC1").style.display = "block"
            }
          });
        } else if (C1.nombre != "" && C2.nombre != "") {
          /*Primero y segundo puesto estan seleccionados, aparece mensaje por consola */
          console.warn("Primer y Segundo Puesto Grupo C seleccionados");
        }
        break;

      case "D":
        if (D1.nombre === "" && D2.nombre === "") {
          grupoD.forEach((D) => {
            if (D.nombre === pais) {
              D1.nombre = D.nombre
              D1.imgBandera = D.imgBandera
              document.getElementById("textOctavosD1").innerHTML = D1.nombre
              document.getElementById("imgOctavosD1").src = D1.imgBandera
              document.getElementById("imgOctavosD1").style.display = "block"
            }
          });
        } else if (D1.nombre != pais && D2.nombre === "") {
          grupoD.forEach((D) => {
            if (D.nombre === pais) {
              D2.nombre = D.nombre
              D2.imgBandera = D.imgBandera
              document.getElementById("textOctavosD2").innerHTML = D2.nombre
              document.getElementById("imgOctavosD2").src = D2.imgBandera
              document.getElementById("imgOctavosD2").style.display = "block"
            }
          });
        } else if (D1.nombre === pais) {
          D1.nombre = ""
          D1.imgBandera = ""
          document.getElementById("textOctavosD1").innerHTML = "D1"
          document.getElementById("imgOctavosD1").src = ""
          document.getElementById("imgOctavosD1").style.display = "none"
        } else if (D2.nombre === pais) {
          D2.nombre = ""
          D2.imgBandera = ""
          document.getElementById("textOctavosD2").innerHTML = "D2"
          document.getElementById("imgOctavosD2").src = ""
          document.getElementById("imgOctavosD2").style.display = "none"
        } else if (D1.nombre === "" && D2.nombre != "") {
          grupoC.forEach((D) => {
            if (D.nombre === pais) {
              D1.nombre = D.nombre
              D1.imgBandera = D.imgBandera
              document.getElementById("textOctavosD1").innerHTML = D1.nombre
              document.getElementById("imgOctavosD1").src = D1.imgBandera
              document.getElementById("imgOctavosD1").style.display = "block"
            }
          });
        } else if (D1.nombre != "" && D2.nombre != "") {
          /*Primero y segundo puesto estan seleccionados, aparece mensaje por consola */
          console.warn("Primer y Segundo Puesto Grupo C seleccionados");
        }
        break;
        /*Faltan case para objetos E1, E2, F1, F2, G1, G2, H1 y H2 */

      default:
        break;
    }
    
}

/*Funcion muestra en Cuartos nombre y bandera de pais seleccionado*/
const paisSeleccionadoCuartos = (pais, imgBandera, posicionCuartos) => {
  switch (posicionCuartos){
    case 'cuartosO1':
      CuartosO1.nombre = pais
      CuartosO1.imgBandera = imgBandera
      document.getElementById("textCuartosO1").innerHTML = CuartosO1.nombre
      document.getElementById("imgCuartosO1").src = CuartosO1.imgBandera
      document.getElementById("imgCuartosO1").style.display = "block"
      break
    case 'cuartosO2':
      CuartosO2.nombre = pais
      CuartosO2.imgBandera = imgBandera
      document.getElementById("textCuartosO2").innerHTML = CuartosO2.nombre
      document.getElementById("imgCuartosO2").src = CuartosO2.imgBandera
      document.getElementById("imgCuartosO2").style.display = "block"
      break
    case 'cuartosO5':
      CuartosO5.nombre = pais
      CuartosO5.imgBandera = imgBandera
      document.getElementById("textCuartosO5").innerHTML = CuartosO5.nombre
      document.getElementById("imgCuartosO5").src = CuartosO5.imgBandera
      document.getElementById("imgCuartosO5").style.display = "block"
      break
    case 'cuartosO6':
      CuartosO6.nombre = pais
      CuartosO6.imgBandera = imgBandera
      document.getElementById("textCuartosO6").innerHTML = CuartosO6.nombre
      document.getElementById("imgCuartosO6").src = CuartosO6.imgBandera
      document.getElementById("imgCuartosO6").style.display = "block"
      break
    default:
      break;
  }
}

/*Llamada a funcion que muestra cantidad de dias restantes para inicio de mundial*/
cantDiasComienzoMundial()

/*Funcion muestra por consola primer y segundo puesto para grupos A y B */
const seleccionadosProximaFase = () => {
  if (A1 != "" && A2 != "") {
      console.log("Grupo A - Primer Puesto: ", A1)
      console.log("Grupo A - Segundo Puesto: ", A2)
  } 
  else {
      console.error("Error - Falto seleccionar pais en grupo A")
  }

  if (B1 != "" && B2 != "") {
      console.log("Grupo B - Primer Puesto: ", B1)
      console.log("Grupo B - Segundo Puesto: ", B2)
  } 
  else {
      console.error("Error - Falto seleccionar pais en grupo B")
  }
  console.log("-----") 
}

