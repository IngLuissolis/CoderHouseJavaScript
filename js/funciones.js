/*Funcion calcula desde fecha actual, cantidad de dias restantes para inicio de Mundial*/
const cantDiasComienzoMundial = () => {
    let diferencia = fechaComienzoMundial.getTime()-hoy.getTime()
    let cantdias = Math.floor(diferencia/(1000*3600*24))
    console.log("Dias Restantes para Mundial: ", cantdias)
    document.getElementById("resultado").innerHTML = String(cantdias) + " dias Restantes para Inicio del Mundial"
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

  //
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

const mostrarTextoBanderaFase = (pais, posicionProximaFase, ganadorPartido, perdedorPartido) => {
  console.warn("Mostrar posicion Fase: ", posicionProximaFase)
  console.warn("Mostrar posicion Fase: ", ganadorPartido)
  document.getElementById("text"+posicionProximaFase).innerHTML = pais.nombre
  document.getElementById("img"+posicionProximaFase).src = pais.imgBandera
  document.getElementById("img"+posicionProximaFase).style.display = "block"
  document.getElementById("ganador"+ganadorPartido).style.display = "block"
  document.getElementById("ganador"+perdedorPartido).style.display = "none"
}


/*Funcion muestra en Fase Cuartos - Semi y Final ID y bandera de pais seleccionado*/
const paisSeleccionadoFase = (pais, posicionProximaFase, ganadorPartido, perdedorPartido) => {

  const faseActual = posicionProximaFase
  console.log("FaseActual1 " + faseActual)

  switch (posicionProximaFase) {
    case "CuartosO1":
      Object.assign(CuartosO1, pais)
      CuartosO1.faseActual = posicionProximaFase
      CuartosO1.posicionProximaFase = "Semi1"
      CuartosO1.ganadorPartido = "CuartosO1"
      CuartosO1.perdedorPartido = "CuartosO2"
      break;
    case "CuartosO2":
      Object.assign(CuartosO2, pais)
      CuartosO2.faseActual = posicionProximaFase
      CuartosO2.posicionProximaFase = "Semi1"
      CuartosO2.ganadorPartido = "CuartosO2"
      CuartosO2.perdedorPartido = "CuartosO1"
      break;
    case "CuartosO3":
      Object.assign(CuartosO3, pais)
      CuartosO3.faseActual = posicionProximaFase
      CuartosO3.posicionProximaFase = "Semi2"
      CuartosO3.ganadorPartido = "CuartosO3"
      CuartosO3.perdedorPartido = "CuartosO4"
      break;
    case "CuartosO4":
      Object.assign(CuartosO4, pais)
      CuartosO4.faseActual = posicionProximaFase
      CuartosO4.posicionProximaFase = "Semi2"
      CuartosO4.ganadorPartido = "CuartosO4"
      CuartosO4.perdedorPartido = "CuartosO3"
      break;
    case "CuartosO5":
      Object.assign(CuartosO5, pais)
      CuartosO5.faseActual = posicionProximaFase
      CuartosO5.posicionProximaFase = "Semi3"
      CuartosO5.ganadorPartido = "CuartosO5"
      CuartosO5.perdedorPartido = "CuartosO6"
      break;
    case "CuartosO6":
      Object.assign(CuartosO6, pais)
      CuartosO6.faseActual = posicionProximaFase
      CuartosO6.posicionProximaFase = "Semi3"
      CuartosO6.ganadorPartido = "CuartosO6"
      CuartosO6.perdedorPartido = "CuartosO5"
      break;
    case "CuartosO7":
      Object.assign(CuartosO7, pais)
      CuartosO7.faseActual = posicionProximaFase
      CuartosO7.posicionProximaFase = "Semi4"
      CuartosO7.ganadorPartido = "CuartosO7"
      CuartosO7.perdedorPartido = "CuartosO8"
      break;
    case "CuartosO8":
      Object.assign(CuartosO8, pais)
      CuartosO8.faseActual = posicionProximaFase
      CuartosO8.posicionProximaFase = "Semi4"
      CuartosO8.ganadorPartido = "CuartosO8"
      CuartosO8.perdedorPartido = "CuartosO7"
      break;
    case "Semi1":
      Object.assign(Semi1, pais)
      Semi1.faseActual = posicionProximaFase
      Semi1.posicionProximaFase = "Final1"
      Semi1.ganadorPartido = "Semi1"
      Semi1.perdedorPartido = "Semi2"
      break;
    case "Semi2":
      Object.assign(Semi2, pais)
      Semi2.faseActual = posicionProximaFase
      Semi2.posicionProximaFase = "Final1"
      Semi2.ganadorPartido = "Semi2"
      Semi2.perdedorPartido = "Semi1"
      break;
    case "Semi3":
      Object.assign(Semi3, pais)
      Semi3.faseActual = posicionProximaFase
      Semi3.posicionProximaFase = "Final2"
      Semi3.ganadorPartido = "Semi3"
      Semi3.perdedorPartido = "Semi4"
      break;
    case "Semi4":
      Object.assign(Semi4, pais)
      Semi4.faseActual = posicionProximaFase
      Semi4.posicionProximaFase = "Final2"
      Semi4.ganadorPartido = "Semi4"
      Semi4.perdedorPartido = "Semi3"
      break;
    case "Campeon":
      Object.assign(Campeon, pais)
      Campeon.ganadorPartido = "Campeon"
      break
    default:
      break;
  }

  mostrarTextoBanderaFase(pais, posicionProximaFase, ganadorPartido, perdedorPartido)
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

/*Funcion escuchar click en pais de Grupos*/
const escucharClickGrupo = () => {
  const botonesGrupo = document.querySelectorAll(".grupo button")

 botonesGrupo.forEach(boton => {
    boton.addEventListener("click", (evento) => {

      var stringGrupo = evento.target.id
      var stringPais = evento.target.id
      /*Extraer primer valor de cadena, Grupo - stringGrupo.substring(0,1)*/
      /*resto de cadena es Pais - substring(1)*/
      paisSeleccionadoOctavos(stringGrupo.substring(0,1), stringPais.substring(1))
      
    })
  })

}

/*Funcion escuchar click en Octavos*/
const escucharClickOctavos = () => {
  const botonesOctavos = document.querySelectorAll(".octavos button")

  botonesOctavos.forEach(boton => {
    boton.addEventListener("click", (evento) => {
      const ganadorOctavos = evento.target.id

      console.warn("ganador Octavos - Click ",ganadorOctavos)

      Octavos.forEach(octavo => {
        if(octavo.faseActual == ganadorOctavos){
          paisSeleccionadoFase(octavo, octavo.posicionProximaFase, 
            octavo.ganadorPartido, octavo.perdedorPartido)

          console.warn("Octavos - FaseActual ", octavo.faseActual)
        }
      })
    })
  })
}

/*Funcion escuchar click en Cuartos*/
const escucharClickCuartos = () => {
  const botonesCuartos = document.querySelectorAll(".cuartos button")

  botonesCuartos.forEach(boton => {
    boton.addEventListener("click", (evento) => {
      const ganadorCuartos= evento.target.id

      console.warn("ganador Cuartos - Click ",ganadorCuartos)

      Cuartos.forEach(cuarto => {

        if(cuarto.faseActual == ganadorCuartos){
          paisSeleccionadoFase(cuarto, cuarto.posicionProximaFase, 
            cuarto.ganadorPartido, cuarto.perdedorPartido)

          console.warn("cuarto.faseActual: ",cuarto.faseActual)
          console.warn("cuarto.ganadorPartido: ",cuarto.ganadorPartido)
          console.warn("cuarto.perdedorPartido: ",cuarto.perdedorPartido)
        }

      })
    })
  })
}

/*Funcion que muestra grupos a traves de nodos - MOD en index.html*/
const  mostrarGruposConNodos = () => {

  for (let nombreGrupo of paisesTodos) {

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
      <button type="button" class="btn btn-success" id="${octavo.nombre}">
        <div class="d-flex justify-content-between align-items-center">
          <div id="textOctavos${octavo.nombre}">${octavo.nombre}</div>
          <img id="ganadorOctavos${octavo.nombre}" src="./img/star-fill.svg" alt="ganador""/>
          <img id="imgOctavos${octavo.nombre}" src="" alt=""/>
        </div>
      </button>
    </div>`
    
  })

  OctavosDerecho.forEach((octavo) => {

    contenedorOctavosPaisDerecho.innerHTML += `
    <div class="col d-flex justify-content-start p-1">
      <button type="button" class="btn btn-success" id="${octavo.nombre}">
        <div class="d-flex justify-content-between align-items-center">
          <div id="textOctavos${octavo.nombre}">${octavo.nombre}</div>
          <img id="ganadorOctavos${octavo.nombre}" src="./img/star-fill.svg" alt="ganador"/>
          <img id="imgOctavos${octavo.nombre}" src="" alt=""/>
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
      <button type="button" class="btn btn-success" id="${cuarto.nombre}">
        <div class="d-flex justify-content-between align-items-center">
          <div id="text${cuarto.nombre}">${cuarto.nombre}</div>
          <img id="ganador${cuarto.nombre}" src="./img/star-fill.svg" alt="ganador"/>
          <img id="img${cuarto.nombre}" src="" alt=""/>
        </div>
      </button>
    </div>`
    
  })

  CuartosDerecho.forEach((cuarto) => {

    contenedorCuartosDerecho.innerHTML += `
    <div class="col d-flex justify-content-start p-1">
      <button type="button" class="btn btn-success" id="${cuarto.nombre}">
        <div class="d-flex justify-content-between align-items-center">
          <div id="text${cuarto.nombre}">${cuarto.nombre}</div>
          <img id="ganador${cuarto.nombre}" src="./img/star-fill.svg" alt="ganador"/>
          <img id="img${cuarto.nombre}" src="" alt=""/>
        </div>
      </button>
    </div>`
  
  })

  contenedorCuartosIzquierdo.className = "m-0 p-0"
  contenedorCuartosDerecho.className = "m-0 p-0"

  document.getElementById("contenedorCuartos").appendChild(contenedorCuartosIzquierdo)
  document.getElementById("contenedorCuartos").appendChild(contenedorCuartosDerecho)

  escucharClickCuartos()
}

/*Llamada a funcion plantilla Grupos*/
mostrarGruposConNodos()

/*Llamada a funcion plantilla Octavos*/
mostrarOctavosConNodos()

/*Llamada a funcion plantilla Cuartos*/
mostrarCuartosConNodos()

/*Llamada a funcion que muestra cantidad de dias restantes para inicio de mundial*/
cantDiasComienzoMundial()