/*Funcion calcula desde fecha actual, cantidad de dias restantes para inicio de Mundial*/
const cantDiasComienzoMundial = () => {
    let diferencia = fechaComienzoMundial.getTime()-hoy.getTime()
    let cantdias = Math.floor(diferencia/(1000*3600*24))
    console.log("Dias Restantes para Mundial: ", cantdias)
    document.getElementById("resultado").innerHTML = String(cantdias) + " dias Restantes para Inicio del Mundial"
}


/*Algoritmo de seleccion de pais desde Grupos a Octavos */
const logicaOctavos = (Aux1, Aux2, pais) => {

  /*Se saca espacio de cadenas para que coincidan con id en imagen */
  VarAux1 = reemplazarEspacioCadena(Aux1.nombre)
  VarAux2 = reemplazarEspacioCadena(Aux2.nombre)

  if(VarAux1 === pais) {
    Aux1.nombre = VarAux1
  }

  if(VarAux2 === pais) {
    Aux2.nombre = VarAux2
  }

  if (Aux1.nombre === "" && Aux2.nombre === "") {
      paisesTodos.forEach((Z) => {
      if (Z.ID === pais) {
        Aux1.imgBandera = Z.imgBandera
        Aux1.nombre = Z.nombre
      }
    });
  } else if (Aux1.nombre != pais && Aux2.nombre === "") {
      paisesTodos.forEach((Z) => {
        if (Z.ID === pais) {
          Aux2.imgBandera = Z.imgBandera
          Aux2.nombre = Z.nombre
        }
      });
  } else if (Aux1.nombre === pais) {
      Aux1.imgBandera = ""
      Aux1.nombre= ""
  } else if (Aux2.nombre === pais) {
      Aux2.imgBandera = ""
      Aux2.nombre = ""
  } else if (Aux1.nombre === "" && Aux2.nombre != "") {
      paisesTodos.forEach((Z) => {
        if (Z.ID === pais) {
          Aux1.imgBandera = Z.imgBandera
          Aux1.nombre = Z.nombre
        }
      });
  } else if (Aux1.nombre != "" && Aux2.nombre != "" && Aux1.nombre != pais && Aux2.nombre != pais){
      /*Primero y segundo puesto estan seleccionados, aparece mensaje por consola */
      console.warn("Primer y Segundo Puesto Grupo seleccionados");
  }

}

/*Muestra en Seccion Octavos ID de pais y bandera de pais seleccionado como 1er o 2do puesto  */
const mostrarTextoBanderaOctavos = (posicionOctavos, IDInner, imgBanderaSrc, imgBanderaStyleDisplay) => {
  document.getElementById("text"+posicionOctavos).innerHTML = IDInner
  document.getElementById("img"+posicionOctavos).src = imgBanderaSrc
  document.getElementById("img"+posicionOctavos).style.display = imgBanderaStyleDisplay
}

const mostrarTextoBanderaOctavosBis = (grupo, Octavos1, Octavos2) => {

  if(Octavos1.nombre != "" && Octavos2.nombre === "") {
    mostrarTextoBanderaOctavos(grupo+"1", Octavos1.nombre, Octavos1.imgBandera, "block")
  } else if (Octavos1.nombre != "" && Octavos2.nombre != "") {
    mostrarTextoBanderaOctavos(grupo+"1", Octavos1.nombre, Octavos1.imgBandera, "block")
    mostrarTextoBanderaOctavos(grupo+"2", Octavos2.nombre, Octavos2.imgBandera, "block")
  } if (Octavos1.nombre === "") {
    mostrarTextoBanderaOctavos(grupo+"1", grupo+"1", "", "none")
  } 
  
  if (Octavos2.nombre === "") {
    mostrarTextoBanderaOctavos(grupo+"2", grupo+"2", "", "none")
  }
}

const reemplazarEspacioCadena = (cadena) => {

  cadena = cadena.replace(" ", "")
  cadena = cadena.replace(" ", "")

  return cadena

}

/*Muestra en seccion Grupos Numero de clasificacion, 1 = primero del grupo, 2 = segundo del grupo */
const mostrarPosicionGrupo = (posicionClasificacionGrupo, ID, styleBackgroundColor, styleColor, styleDisplay) => {
  document.getElementById("posicionGrupo"+ID).innerHTML = posicionClasificacionGrupo
  document.getElementById("posicionGrupo"+ID).style.backgroundColor = styleBackgroundColor
  document.getElementById("posicionGrupo"+ID).style.color = styleColor
  document.getElementById("posicionGrupo"+ID).style.display = styleDisplay
}

const mostrarPosicionGrupoBis = (posicion1, posicion2, pais) => {

  posicion1aux = reemplazarEspacioCadena(posicion1.nombre)
  posicion2aux = reemplazarEspacioCadena(posicion2.nombre)

  if(posicion1aux != "" && posicion1aux == pais && posicion2aux === "") {
    mostrarPosicionGrupo("1", pais, "black", "white", "block")
  } else if (posicion1aux === "") {
     mostrarPosicionGrupo("", pais, "", "", "none")
  } else if (posicion2aux === "") {
    mostrarPosicionGrupo("2", pais, "", "", "none")
  } else if (posicion1aux != "" && posicion2aux != "") {
    mostrarPosicionGrupo("1", posicion1aux, "black", "white", "block")
    mostrarPosicionGrupo("2", posicion2aux, "black", "white", "block")
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

  /*Se habilita escucharClickCuartos cuando se eligieron todos los ganadores de Octavos */
  if( A1.nombre != "" && A2.nombre != "" && B1.nombre != "" && B2.nombre != ""
  && C1.nombre != "" && C2.nombre != "" && D1.nombre != "" && D2.nombre != ""
  && E1.nombre != "" && E2.nombre != "" && F1.nombre != "" && F2.nombre != ""
  && G1.nombre != "" && G2.nombre != "" && H1.nombre != "" && H2.nombre != "") {
    escucharClickCuartos()
  }

}

const mostrarTextoBanderaFase = (pais, posicionProximaFase, perdedorPartido) => {
  document.getElementById("text"+posicionProximaFase).innerHTML = pais.nombre
  document.getElementById("img"+posicionProximaFase).src = pais.imgBandera
  document.getElementById("img"+posicionProximaFase).style.display = "block"
  document.getElementById("ganador"+pais.ID).style.display = "block"
  document.getElementById("ganador"+perdedorPartido).style.display = "none"
}


/*Funcion muestra en Fase Cuartos - Semi y Final ID y bandera de pais seleccionado*/
const paisSeleccionadoFase = (pais, posicionProximaFase, perdedorPartido) => {

  if (pais.nombre === "") {
    console.warn("Pais No seleccionado!!!")
  } else {
      switch (posicionProximaFase) {
        case "CuartosO1":
          CuartosO1.nombre = pais.nombre
          CuartosO1.imgBandera = pais.imgBandera
          break;
        case "CuartosO2":
          CuartosO2.nombre = pais.nombre
          CuartosO2.imgBandera = pais.imgBandera
          break;
        case "CuartosO3":
          CuartosO3.nombre = pais.nombre
          CuartosO3.imgBandera = pais.imgBandera
          break;
        case "CuartosO4":
          CuartosO4.nombre = pais.nombre
          CuartosO4.imgBandera = pais.imgBandera
          break;
        case "CuartosO5":
          CuartosO5.nombre = pais.nombre
          CuartosO5.imgBandera = pais.imgBandera
          break;
        case "CuartosO6":
          CuartosO6.nombre = pais.nombre
          CuartosO6.imgBandera = pais.imgBandera
          break;
        case "CuartosO7":
          CuartosO7.nombre = pais.nombre
          CuartosO7.imgBandera = pais.imgBandera
          break;
        case "CuartosO8":
          CuartosO8.nombre = pais.nombre
          CuartosO8.imgBandera = pais.imgBandera
          break;
        case "Semi1":
          Semi1.nombre = pais.nombre
          Semi1.imgBandera = pais.imgBandera
          break;
        case "Semi2":
          Semi2.nombre = pais.nombre
          Semi2.imgBandera = pais.imgBandera
          break;
        case "Semi3":
          Semi3.nombre = pais.nombre
          Semi3.imgBandera = pais.imgBandera
          break;
        case "Semi4":
          Semi4.nombre = pais.nombre
          Semi4.imgBandera = pais.imgBandera
          break
        default:
          break;
      }

    mostrarTextoBanderaFase(pais, posicionProximaFase, perdedorPartido)

    if (CuartosO1.nombre != "" && CuartosO2.nombre != "" && CuartosO3.nombre != "" && CuartosO4.nombre != ""
    && CuartosO5.nombre != "" && CuartosO6.nombre != "" && CuartosO7.nombre != "" && CuartosO8.nombre != ""){
      escucharClickSemi()
      silenciarClickGrupo()
    }

    if (Semi1.nombre != "" && Semi2.nombre != "" && Semi3.nombre != "" && Semi4.nombre !=""){
      silenciarClickOctavos()
    }
  }
}


const paisSeleccionadoFinal = (pais, posicionFinal) => {

  switch (posicionFinal) {
    case "Final1A":
      Final1.nombre = pais.nombre
      Final1.imgBandera = pais.imgBandera
      Tercer1.nombre = Semi2.nombre
      Tercer1.imgBandera = Semi2.imgBandera
      mostrarTextoBanderaFase(Semi2, "Tercer1", pais.ID)
      mostrarTextoBanderaFase(pais, "Final1", pais.perdedorPartido)
      break
    case "Final1B":
      Final1.nombre = pais.nombre
      Final1.imgBandera = pais.imgBandera
      Tercer1.nombre = Semi1.nombre
      Tercer1.imgBandera = Semi1.imgBandera
      mostrarTextoBanderaFase(Semi1, "Tercer1", pais.ID)
      mostrarTextoBanderaFase(pais, "Final1", pais.perdedorPartido)
      break
    case "Final2A":
      Final2.nombre = pais.nombre
      Final2.imgBandera = pais.imgBandera
      Tercer2.nombre = Semi4.nombre
      Tercer2.imgBandera = Semi4.imgBandera
      mostrarTextoBanderaFase(Semi4, "Tercer2", pais.ID)
      mostrarTextoBanderaFase(pais, "Final2", pais.perdedorPartido)
      break
    case "Final2B":
      Final2.nombre = pais.nombre
      Final2.imgBandera = pais.imgBandera
      Tercer2.nombre = Semi3.nombre
      Tercer2.imgBandera = Semi3.imgBandera
      mostrarTextoBanderaFase(Semi3, "Tercer2", pais.ID)
      mostrarTextoBanderaFase(pais, "Final2", pais.perdedorPartido)
      break
    case "Campeon":
      mostrarTextoBanderaFase(pais, "Campeon", pais.perdedorPartido)
      document.getElementById("ganadorCampeon").style.display = "block"
    default:
      mostrarTextoBanderaFase(pais, pais.ID, pais.perdedorPartido)
      break
  }
}

/*Funcion escuchar click en pais de Seccion Grupos*/
const escucharClickGrupo = () => {
  const botonesGrupo = document.querySelectorAll(".grupo button")

  botonesGrupo.forEach(boton => {
      boton.addEventListener("click", (evento) => {

        var stringGrupo = evento.target.id
        var stringPais = evento.target.id
        /*Extraer primer valor de cadena, Grupo - stringGrupo.substring(0,1)*/
        /*resto de cadena es Pais - substring(1)*/
        paisSeleccionadoOctavos(stringGrupo.substring(0,1), stringPais.substring(1))
        console.warn("click Pais: ", stringPais.substring(1))
      })
    })
}

/*Dejar de escuchar click en Seccion Grupos*/
const silenciarClickGrupo = () => {
  const botonesGrupo = document.querySelectorAll(".grupo button")

  console.warn("Silenciar Click Grupo")

  botonesGrupo.forEach(boton => {
    console.warn("Silenciar Click Pais")
    boton.disabled = true
    boton.style.color = "black"
    //boton.removeEventListener("click", escucharClickGrupo)
  })
}

/*Funcion escuchar click en Octavos*/
const escucharClickOctavos = () => {
  const botonesOctavos = document.querySelectorAll(".octavos button")

  botonesOctavos.forEach(boton => {
    boton.addEventListener("click", (evento) => {
      const ganadorOctavos = evento.target.id

      console.warn("Click - evento octavos: ", ganadorOctavos)

      Octavos.forEach(octavo => {
        if(octavo.ID == ganadorOctavos){
          paisSeleccionadoFase(octavo, octavo.posicionProximaFase, octavo.perdedorPartido)
        }
      })
    })
  })
}

/*Dejar de escuchar click en Seccion Octavos*/
const silenciarClickOctavos = () => {
  const botonesOctavos = document.querySelectorAll(".octavos button")

  console.warn("Silenciar Click Octavos")

  botonesOctavos.forEach(boton => {
    boton.disabled = true
    boton.style.background = "white"
    boton.style.color = "black"
    //boton.removeEventListener("click", escucharClickGrupo)
  })
}

/*Funcion escuchar click en Cuartos*/
const escucharClickCuartos = () => {
  const botonesCuartos = document.querySelectorAll(".cuartos button")

  botonesCuartos.forEach(boton => {
    boton.addEventListener("click", (evento) => {
      const ganadorCuartos= evento.target.id

      console.warn("Click - evento cuartos: ", ganadorCuartos)

      Cuartos.forEach(cuarto => {

        if(cuarto.ID == ganadorCuartos){
          paisSeleccionadoFase(cuarto, cuarto.posicionProximaFase, cuarto.perdedorPartido)
        }
      })
    })
  })
}

/*Funcion escuchar click en Semi*/
const escucharClickSemi = () => {
  const botonesSemi = document.querySelectorAll(".semi button")

  botonesSemi.forEach(boton => {
    boton.addEventListener("click", (evento) => {
      const ganadorSemi = evento.target.id

      console.warn("Click - evento semi: ", ganadorSemi)

      Semi.forEach(semi => {
        if(semi.ID == ganadorSemi){
          paisSeleccionadoFinal(semi, semi.posicionProximaFase)
        }
      })
    })
  })
}

/*Funcion que muestra grupos a traves de nodos - MOD en index.html*/
const  mostrarGruposConNodos = () => {

  for (let nombreGrupo of grupoTodos) {

    let div = document.createElement("div")
    let tituloGrupo = document.createElement("tituloGrupo")
    let ul = document.createElement("ul")
    let contenedorPais = document.createElement("contenedorPais")

    div.innerHTML = `<div class="text-center col m-0 p-2"></div>`
    tituloGrupo.innerHTML = `<h5 class="text-center">${nombreGrupo.nombre}</h5>`
    ul.innerHTML += `<ul class="list-group grupo"></ul>`

    for (let paisGrupo of nombreGrupo.paises) {

      const posicion = "posicionGrupo"+paisGrupo.ID

      contenedorPais.innerHTML += `
        <ul class="list-group grupo">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <button class="d-flex justify-content-between align-items-center"
            id=${nombreGrupo.grupo}${paisGrupo.ID}>
              ${paisGrupo.nombre}
              <img src=${paisGrupo.imgBandera}>
            </button>
            <div id=${posicion} class=" text-center m-1 p-1"></div>
          </li>
        </ul>`

    }

    document.getElementById("contenedorGrupo").appendChild(div).appendChild(tituloGrupo).
    appendChild(contenedorPais)

  }

  escucharClickGrupo()
}

/*Funcion que muestra Octavos a traves de nodos - MOD */
const  mostrarOctavosConNodos = () => {

  let contenedorOctavosPaisIzquierdo = document.createElement("contenedorOctavosPaisIzquierdo")
  let contenedorOctavosPaisDerecho = document.createElement("contenedorOctavosPaisDerecho")

  OctavosIzquierdo.forEach((octavo) => {

    contenedorOctavosPaisIzquierdo.innerHTML += `
    <div class="col d-flex justify-content-end p-1">
      <button type="button" class="btn btn-success" id="${octavo.ID}">
        <div class="d-flex justify-content-between align-items-center">
          <div id="text${octavo.ID}">${octavo.ID}</div>
          <img id="ganador${octavo.ID}" src="./img/star-fill.svg" alt="ganador""/>
          <img id="img${octavo.ID}" src="" alt=""/>
        </div>
      </button>
    </div>`
    
  })

  OctavosDerecho.forEach((octavo) => {

    contenedorOctavosPaisDerecho.innerHTML += `
    <div class="col d-flex justify-content-start p-1">
      <button type="button" class="btn btn-success" id="${octavo.ID}">
        <div class="d-flex justify-content-between align-items-center">
          <div id="text${octavo.ID}">${octavo.ID}</div>
          <img id="ganador${octavo.ID}" src="./img/star-fill.svg" alt="ganador"/>
          <img id="img${octavo.ID}" src="" alt=""/>
        </div>
      </button>
    </div>`
  
  })

  contenedorOctavosPaisIzquierdo.className = "m-0 p-0"
  contenedorOctavosPaisDerecho.className = "m-0 p-0"

  document.getElementById("contenedorOctavos").appendChild(contenedorOctavosPaisIzquierdo)
  document.getElementById("contenedorOctavos").appendChild(contenedorOctavosPaisDerecho)

  escucharClickOctavos()
}

/*Funcion que muestra Cuartos a traves de nodos - MOD */
const  mostrarCuartosConNodos = () => {
  let contenedorCuartosIzquierdo = document.createElement("contenedorCuartosIzquierdo")
  let contenedorCuartosDerecho = document.createElement("contenedorCuartosDerecho")

  CuartosIzquierdo.forEach((cuarto) => {

    contenedorCuartosIzquierdo.innerHTML += `
    <div class="col d-flex justify-content-end p-1">
      <button type="button" class="btn btn-success" id="${cuarto.ID}">
        <div class="d-flex justify-content-between align-items-center">
          <div id="text${cuarto.ID}">${cuarto.ID}</div>
          <img id="ganador${cuarto.ID}" src="./img/star-fill.svg" alt="ganador"/>
          <img id="img${cuarto.ID}" src="" alt=""/>
        </div>
      </button>
    </div>`
    
  })

  CuartosDerecho.forEach((cuarto) => {

    contenedorCuartosDerecho.innerHTML += `
    <div class="col d-flex justify-content-start p-1">
      <button type="button" class="btn btn-success" id="${cuarto.ID}">
        <div class="d-flex justify-content-between align-items-center">
          <div id="text${cuarto.ID}">${cuarto.ID}</div>
          <img id="ganador${cuarto.ID}" src="./img/star-fill.svg" alt="ganador"/>
          <img id="img${cuarto.ID}" src="" alt=""/>
        </div>
      </button>
    </div>`
  
  })

  contenedorCuartosIzquierdo.className = "m-0 p-0"
  contenedorCuartosDerecho.className = "m-0 p-0"

  document.getElementById("contenedorCuartos").appendChild(contenedorCuartosIzquierdo)
  document.getElementById("contenedorCuartos").appendChild(contenedorCuartosDerecho)

}

/*Llamada a funcion plantilla Grupos*/
mostrarGruposConNodos()

/*Llamada a funcion plantilla Octavos*/
mostrarOctavosConNodos()

/*Llamada a funcion plantilla Cuartos*/
mostrarCuartosConNodos()

/*Llamada a funcion que muestra cantidad de dias restantes para inicio de mundial*/
cantDiasComienzoMundial()