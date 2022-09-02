/*Funcion calcula desde fecha actual, cantidad de dias restantes para inicio de Mundial*/
const cantDiasComienzoMundial = () => {
    let diferencia = fechaComienzoMundial.getTime()-hoy.getTime()
    let cantdias = Math.floor(diferencia/(1000*3600*24))
    console.log("Dias Restantes para Mundial: ", cantdias)
    document.getElementById("resultado").innerHTML = String(cantdias) + " dias Restantes para Inicio del Mundial"
}

/*Muestra en Seccion Octavos nombre de pais y bandera de pais seleccionado como 1er o 2do puesto  */
const mostrarTextoBanderaOctavos = (posicionOctavos, nombreInner, imgBanderaSrc, imgBanderaStyleDisplay) => {
  document.getElementById("textOctavos"+posicionOctavos).innerHTML = nombreInner
  document.getElementById("imgOctavos"+posicionOctavos).src = imgBanderaSrc
  document.getElementById("imgOctavos"+posicionOctavos).style.display = imgBanderaStyleDisplay
}

/*Muestra en seccion Grupos Numero de clasificacion, 1 = primero del grupo, 2 = segundo del grupo */
const mostrarPosicionGrupo = (posicionClasificacionGrupo, nombre, styleBackgroundColor, styleColor, styleDisplay) => {
    document.getElementById("posicionGrupo"+nombre).innerHTML = posicionClasificacionGrupo
    document.getElementById("posicionGrupo"+nombre).style.backgroundColor = styleBackgroundColor
    document.getElementById("posicionGrupo"+nombre).style.color = styleColor
    document.getElementById("posicionGrupo"+nombre).style.display = styleDisplay
}

/*Algoritmo de seleccion para Octavos */
const logicaOctavos = (Aux1, Aux2, pais) => {
  if (Aux1.nombre === "" && Aux2.nombre === "") {
    grupoTodos.forEach((Z) => {
      if (Z.nombre === pais) {
        Aux1.nombre = Z.nombre
        Aux1.imgBandera = Z.imgBandera
      }
    });
  } else if (Aux1.nombre != pais && Aux2.nombre === "") {
      grupoTodos.forEach((Z) => {
        if (Z.nombre === pais) {
          Aux2.nombre = Z.nombre
          Aux2.imgBandera = Z.imgBandera
        }
      });
  } else if (Aux1.nombre === pais) {
      Aux1.nombre = ""
      Aux1.imgBandera = ""
  } else if (Aux2.nombre === pais) {
      Aux2.nombre = ""
      Aux2.imgBandera = ""
  } else if (Aux1.nombre === "" && Aux2.nombre != "") {
      grupoTodos.forEach((Z) => {
        if (Z.nombre === pais) {
          Aux1.nombre = Z.nombre
          Aux1.imgBandera = Z.imgBandera
        }
      });
  } else if (Aux1.nombre != "" && Aux2.nombre != "") {
      /*Primero y segundo puesto estan seleccionados, aparece mensaje por consola */
      console.warn("Primer y Segundo Puesto Grupo seleccionados");
  }
}

const mostrarTextoBanderaOctavosBis = (grupo, Octavos1, Octavos2, pais) => {

  console.warn("Mostrar Octavos1: ", Octavos1)
  console.warn("Mostrar Octavos2: ", Octavos2)

  if(Octavos1.nombre != "" && Octavos2.nombre === "") {
    mostrarTextoBanderaOctavos(grupo+"1", Octavos1.nombre, Octavos1.imgBandera, "block")
    console.warn("posicion Octavos1")
  } else if (Octavos1.nombre != "" && Octavos2.nombre != "") {
    mostrarTextoBanderaOctavos(grupo+"1", Octavos1.nombre, Octavos1.imgBandera, "block")
    mostrarTextoBanderaOctavos(grupo+"2", Octavos2.nombre, Octavos2.imgBandera, "block")
    console.warn("posicion Octavos2")
  } if (Octavos1.nombre === "") {
    mostrarTextoBanderaOctavos(grupo+"1", grupo+"1", "", "none")
    console.warn("limpiar Octavos1")
  } 
  
  if (Octavos2.nombre === "") {
    mostrarTextoBanderaOctavos(grupo+"2", grupo+"2", "", "none")
    console.warn("limpiar Octavos2")
  }
}

const mostrarPosicionGrupoBis = (posicion1, posicion2, pais) => {

  if (posicion2.nombre === "") {
    mostrarPosicionGrupo("", pais, "", "", "none")
  }

  if(posicion1.nombre != "" && posicion2.nombre === "") {
    mostrarPosicionGrupo("1", posicion1.nombre, "black", "white", "block")
  } else if (posicion1.nombre === "") {
     mostrarPosicionGrupo("", pais, "", "", "none")
  } else if (posicion1 != "" && posicion2 != "") {
    mostrarPosicionGrupo("1", posicion1.nombre, "black", "white", "block")
    mostrarPosicionGrupo("2", posicion2.nombre, "black", "white", "block")
  }

} 

/*Funcion que tiene la logica para ver en Seccion Octavos nombre y bandera de paises seleccionados*/
const paisSeleccionadoOctavosBis = (grupo, pais) => {

  switch (grupo) {
    case "A":
      logicaOctavos(A1, A2, pais)
      mostrarTextoBanderaOctavosBis("A", A1, A2, pais)
      mostrarPosicionGrupoBis (A1, A2, pais)

      break;
    case "B":
      logicaOctavos(B1, B2, pais)
      mostrarTextoBanderaOctavosBis("B", B1, B2, pais)
      mostrarPosicionGrupoBis (B1, B2, pais)

      break;
    case "C":
      logicaOctavos(C1, C2, pais)
      mostrarTextoBanderaOctavosBis("C", C1, C2, pais)
      mostrarPosicionGrupoBis (C1, C2, pais)
      break;
    case "D":
      logicaOctavos(D1, D2, pais)
      mostrarTextoBanderaOctavosBis("D", D1, D2, pais)
      mostrarPosicionGrupoBis (D1, D2, pais)
      break
    case "E":
        logicaOctavos(E1, E2, pais)
        mostrarTextoBanderaOctavosBis("E", E1, E2, pais)
        mostrarPosicionGrupoBis (E1, E2, pais)
      break
    case "F":
        logicaOctavos(F1, F2, pais)
        mostrarTextoBanderaOctavosBis("F", F1, F2, pais)
        mostrarPosicionGrupoBis (F1, F2, pais)
      break
    case "G":
        logicaOctavos(G1, G2, pais)
        mostrarTextoBanderaOctavosBis("G", G1, G2, pais)
        mostrarPosicionGrupoBis (G1, G2, pais)
      break
    case "H":
        logicaOctavos(H1, H2, pais)
        mostrarTextoBanderaOctavosBis("H", H1, H2, pais)
        mostrarPosicionGrupoBis (H1, H2, pais)
      break
    default:
      console.warn("Error bis");
      break;
  }

}

/*Funcion muestra en Cuartos nombre y bandera de pais seleccionado*/
const paisSeleccionadoCuartos = (pais, imgBandera, posicionCuartos) => {
  switch (posicionCuartos) {
    case "cuartosO1":
      if(CuartosO1.nombre === pais) {
        document.getElementById("textCuartosO1").innerHTML = "CUARTOS O1"
        document.getElementById("imgCuartosO1").style.display = "none"
      } else {
        CuartosO1.nombre = pais;
        CuartosO1.imgBandera = imgBandera;
        document.getElementById("textCuartosO1").innerHTML = CuartosO1.nombre;
        document.getElementById("imgCuartosO1").src = CuartosO1.imgBandera;
        document.getElementById("imgCuartosO1").style.display = "block";
      }
      break;
    case "cuartosO2":
      CuartosO2.nombre = pais;
      CuartosO2.imgBandera = imgBandera;
      document.getElementById("textCuartosO2").innerHTML = CuartosO2.nombre;
      document.getElementById("imgCuartosO2").src = CuartosO2.imgBandera;
      document.getElementById("imgCuartosO2").style.display = "block";
      break;
    case "cuartosO3":
      CuartosO3.nombre = pais;
      CuartosO3.imgBandera = imgBandera;
      document.getElementById("textCuartosO3").innerHTML = CuartosO3.nombre;
      document.getElementById("imgCuartosO3").src = CuartosO3.imgBandera;
      document.getElementById("imgCuartosO3").style.display = "block";
      break;
    case "cuartosO4":
      CuartosO4.nombre = pais;
      CuartosO4.imgBandera = imgBandera;
      document.getElementById("textCuartosO4").innerHTML = CuartosO4.nombre;
      document.getElementById("imgCuartosO4").src = CuartosO4.imgBandera;
      document.getElementById("imgCuartosO4").style.display = "block";
      break;
    case "cuartosO5":
      CuartosO5.nombre = pais;
      CuartosO5.imgBandera = imgBandera;
      document.getElementById("textCuartosO5").innerHTML = CuartosO5.nombre;
      document.getElementById("imgCuartosO5").src = CuartosO5.imgBandera;
      document.getElementById("imgCuartosO5").style.display = "block";
      break;
    case "cuartosO6":
      CuartosO6.nombre = pais;
      CuartosO6.imgBandera = imgBandera;
      document.getElementById("textCuartosO6").innerHTML = CuartosO6.nombre;
      document.getElementById("imgCuartosO6").src = CuartosO6.imgBandera;
      document.getElementById("imgCuartosO6").style.display = "block";
      break;
    case "cuartosO7":
      CuartosO7.nombre = pais;
      CuartosO7.imgBandera = imgBandera;
      document.getElementById("textCuartosO7").innerHTML = CuartosO7.nombre;
      document.getElementById("imgCuartosO7").src = CuartosO7.imgBandera;
      document.getElementById("imgCuartosO7").style.display = "block";
      break;
    case "cuartosO8":
      CuartosO8.nombre = pais;
      CuartosO8.imgBandera = imgBandera;
      document.getElementById("textCuartosO8").innerHTML = CuartosO8.nombre;
      document.getElementById("imgCuartosO8").src = CuartosO8.imgBandera;
      document.getElementById("imgCuartosO8").style.display = "block";
      break;
    default:
      break;
  }
};

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

