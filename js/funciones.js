/*Funcion calcula desde fecha actual, cantidad de dias restantes para inicio de Mundial*/
const cantDiasComienzoMundial = () => {
    let diferencia = fechaComienzoMundial.getTime()-hoy.getTime()
    let cantdias = Math.floor(diferencia/(1000*3600*24))
    console.log("Dias Restantes para Mundial: ", cantdias)
    document.getElementById("resultado").innerHTML = String(cantdias) + " dias Restantes para Inicio del Mundial"
}

/*Muestra en Seccion Octavos ID de pais y bandera de pais seleccionado como 1er o 2do puesto  */
const mostrarTextoBanderaOctavos = (posicionOctavos, IDInner, imgBanderaSrc, imgBanderaStyleDisplay) => {
  document.getElementById("textOctavos"+posicionOctavos).innerHTML = IDInner
  document.getElementById("imgOctavos"+posicionOctavos).src = imgBanderaSrc
  document.getElementById("imgOctavos"+posicionOctavos).style.display = imgBanderaStyleDisplay
}

/*Muestra en seccion Grupos Numero de clasificacion, 1 = primero del grupo, 2 = segundo del grupo */
const mostrarPosicionGrupo = (posicionClasificacionGrupo, ID, styleBackgroundColor, styleColor, styleDisplay) => {
    document.getElementById("posicionGrupo"+ID).innerHTML = posicionClasificacionGrupo
    document.getElementById("posicionGrupo"+ID).style.backgroundColor = styleBackgroundColor
    document.getElementById("posicionGrupo"+ID).style.color = styleColor
    document.getElementById("posicionGrupo"+ID).style.display = styleDisplay
}

/*Algoritmo de seleccion para Octavos */
const logicaOctavos = (Aux1, Aux2, pais) => {
  if (Aux1.ID === "" && Aux2.ID === "") {
    grupoTodos.forEach((Z) => {
      if (Z.ID === pais) {
        Aux1.ID = Z.ID
        Aux1.imgBandera = Z.imgBandera
        Aux1.nombre = Z.nombre
      }
    });
  } else if (Aux1.ID != pais && Aux2.ID === "") {
      grupoTodos.forEach((Z) => {
        if (Z.ID === pais) {
          Aux2.ID = Z.ID
          Aux2.imgBandera = Z.imgBandera
          Aux2.nombre = Z.nombre
        }
      });
  } else if (Aux1.ID === pais) {
      Aux1.ID = ""
      Aux1.imgBandera = ""
      Aux1.nombre= ""
  } else if (Aux2.ID === pais) {
      Aux2.ID = ""
      Aux2.imgBandera = ""
      Aux2.nombre = ""
  } else if (Aux1.ID === "" && Aux2.ID != "") {
      grupoTodos.forEach((Z) => {
        if (Z.ID === pais) {
          Aux1.ID = Z.ID
          Aux1.imgBandera = Z.imgBandera
          Aux1.nombre = Z.nombre
        }
      });
  } else if (Aux1.ID != "" && Aux2.ID != "") {
      /*Primero y segundo puesto estan seleccionados, aparece mensaje por consola */
      console.warn("Primer y Segundo Puesto Grupo seleccionados");
  }
}

const mostrarTextoBanderaOctavosBis = (grupo, Octavos1, Octavos2) => {

  if(Octavos1.ID != "" && Octavos2.ID === "") {
    mostrarTextoBanderaOctavos(grupo+"1", Octavos1.nombre, Octavos1.imgBandera, "block")
  } else if (Octavos1.ID != "" && Octavos2.ID != "") {
    mostrarTextoBanderaOctavos(grupo+"1", Octavos1.nombre, Octavos1.imgBandera, "block")
    mostrarTextoBanderaOctavos(grupo+"2", Octavos2.nombre, Octavos2.imgBandera, "block")
  } if (Octavos1.ID === "") {
    mostrarTextoBanderaOctavos(grupo+"1", grupo+"1", "", "none")
  } 
  
  if (Octavos2.ID === "") {
    mostrarTextoBanderaOctavos(grupo+"2", grupo+"2", "", "none")
  }
}

const mostrarPosicionGrupoBis = (posicion1, posicion2, pais) => {

  if (posicion2.ID === "") {
    mostrarPosicionGrupo("", pais, "", "", "none")
  }

  if(posicion1.ID != "" && posicion2.ID === "") {
    mostrarPosicionGrupo("1", posicion1.ID, "black", "white", "block")
  } else if (posicion1.ID === "") {
     mostrarPosicionGrupo("", pais, "", "", "none")
  } else if (posicion1 != "" && posicion2 != "") {
    mostrarPosicionGrupo("1", posicion1.ID, "black", "white", "block")
    mostrarPosicionGrupo("2", posicion2.ID, "black", "white", "block")
  }

} 

/*Funcion que tiene la logica para ver en Seccion Octavos ID y bandera de paises seleccionados*/
const paisSeleccionadoOctavos = (grupo, pais) => {
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

const mostrarTextoBanderaFase = (pais, posicionFase, ganadorPartido, perdedorPartido) => {
  document.getElementById("text"+posicionFase).innerHTML = pais.nombre
  document.getElementById("img"+posicionFase).src = pais.imgBandera
  document.getElementById("img"+posicionFase).style.display = "block"
  document.getElementById("ganador"+ganadorPartido).style.display = "block"
  document.getElementById("ganador"+perdedorPartido).style.display = "none"
}


/*Funcion muestra en Fase Cuartos - Semi y Final ID y bandera de pais seleccionado*/
const paisSeleccionadoFase = (pais, posicionFase, ganadorPartido, perdedorPartido) => {
  switch (posicionFase) {
    case "CuartosO1":
      Object.assign(CuartosO1, pais)
      break;
    case "CuartosO2":
      Object.assign(CuartosO2, pais)
      break;
    case "CuartosO3":
      Object.assign(CuartosO3, pais)
      break;
    case "CuartosO4":
      Object.assign(CuartosO4, pais)
      break;
    case "CuartosO5":
      Object.assign(CuartosO5, pais)
      break;
    case "CuartosO6":
      Object.assign(CuartosO6, pais)
      break;
    case "CuartosO7":
      Object.assign(CuartosO7, pais)
      break;
    case "CuartosO8":
      Object.assign(CuartosO8, pais)
      break;
    case "Semi1":
      Object.assign(Semi1, pais)
      break;
    case "Semi2":
      Object.assign(Semi2, pais)
      break;
    case "Semi3":
      Object.assign(Semi3, pais)
      break;
    case "Semi4":
      Object.assign(Semi4, pais)
      break;
    case "Campeon":
      Object.assign(Campeon, pais)
      break
    default:
      break;
  }

  mostrarTextoBanderaFase(pais, posicionFase, ganadorPartido, perdedorPartido)
}

const paisSeleccionadoFinal = (posicionFinal, ganadorPartido, perdedorPartido) => {
  switch (posicionFinal) {
    case "Final1A":
        Object.assign(Final1, Semi1)
        Object.assign(Tercer1, Semi2)
        mostrarTextoBanderaFase(Final1, "Final1", ganadorPartido, perdedorPartido)
        mostrarTextoBanderaFase(Tercer1, "Tercer1", ganadorPartido, perdedorPartido)
      break
    case "Final1B":
        Object.assign(Final1, Semi2)
        Object.assign(Tercer1, Semi1)
        mostrarTextoBanderaFase(Final1, "Final1", ganadorPartido, perdedorPartido)
        mostrarTextoBanderaFase(Tercer1, "Tercer1", ganadorPartido, perdedorPartido)
      break
    case "Final2A":
        Object.assign(Final2, Semi3)
        Object.assign(Tercer2, Semi4)
        mostrarTextoBanderaFase(Final2, "Final2", ganadorPartido, perdedorPartido)
        mostrarTextoBanderaFase(Tercer2, "Tercer2", ganadorPartido, perdedorPartido)
      break
    case "Final2B":
        Object.assign(Final2, Semi4)
        Object.assign(Tercer2, Semi3)
        mostrarTextoBanderaFase(Final2, "Final2", ganadorPartido, perdedorPartido)
        mostrarTextoBanderaFase(Tercer2, "Tercer2", ganadorPartido, perdedorPartido)
      break
    default:
      break
  }
}

/*Llamada a funcion que muestra cantidad de dias restantes para inicio de mundial*/
cantDiasComienzoMundial()

