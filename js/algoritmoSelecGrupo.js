/*Funcion Escuchar click en Seccion Fase de Grupos*/
const EscucharClickGrupo = () => {
  const botonesGrupo = document.querySelectorAll(".ContenedorGrupo button")

  botonesGrupo.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      let banderaCuartos = false
      let banderaSemi = false
      let banderaFinal = false

      console.log("click: ", evento.target.id);

      /*Se asegura que no tenga paises mostrados en Cuartos*/
      banderaCuartos = mostrandoBanderaFase(Cuartos);
      /*Se asegura que no tenga paises mostrados en Semi*/
      banderaSemi = mostrandoBanderaFase(Semi);
      /*Se asegura que no tenga paises mostrados en Semi*/
      banderaFinal = mostrandoBanderaFase(Final);

      if (banderaCuartos === false && banderaSemi === false && banderaFinal === false) {
        LogicaGrupo(evento.target.id);
        evento.preventDefault();
      } else if (banderaFinal === true) {
        desplegarVentanaAdvertencia("Final")
      } else if (banderaSemi === true) {
        desplegarVentanaAdvertencia("SemiFinales");
      } else if (banderaCuartos === true) {
        desplegarVentanaAdvertencia("Cuartos");
      }
    })
  })
}

const LogicaGrupo = (PaisSeleccionado) => {
  let posicion1aux;
  let posicion2aux;
  /*Recorre array grupoTodos */
  grupoTodos.forEach((nombreGrupo) => {
    nombreGrupo.paises.forEach((paisGrupo) => {
      if (PaisSeleccionado == paisGrupo.ID) {
        Octavos.forEach((octavo) => {
          /*Guarda en variable auxiliar pais seleccionado */
          // console.warn("nombreGrupo.grupo: ", nombreGrupo.grupo)
          if (octavo.ID.includes(nombreGrupo.grupo)) {
            if (octavo.ID.substr(1, 1) == 1) {
              posicion1aux = octavo;
            } else {
              posicion2aux = octavo;
            }
          }
        });
        /*Algoritmo para seleccionar 1ra y 2da posicion en fase de grupos*/
        if (
          posicion1aux.nombre === "" &&
          posicion2aux.nombre != paisGrupo.nombre
        ) {
          posicion1aux.nombre = paisGrupo.nombre;
          posicion1aux.imgBandera = paisGrupo.imgBandera;
          /*Mostrar posicion 1 en Seccion Grupos */
          mostrarPosicionGrupo(paisGrupo.ID, 1);
        } else if (
          posicion1aux.nombre != "" &&
          posicion2aux.nombre == "" &&
          posicion1aux.nombre != paisGrupo.nombre
        ) {
          posicion2aux.nombre = paisGrupo.nombre;
          posicion2aux.imgBandera = paisGrupo.imgBandera;
          /*Mostrar posicion 2 en Seccion Grupos */
          mostrarPosicionGrupo(paisGrupo.ID, 2);
        } else if (posicion1aux.nombre === paisGrupo.nombre) {
          posicion1aux.nombre = "";
          posicion1aux.imgBandera = "";
          /*Setea posicion 1 en seccion Grupos */
          document.getElementById(
            "posicionGrupo" + paisGrupo.ID
          ).style.display = "none";
        } else if (posicion2aux.nombre === paisGrupo.nombre) {
          posicion2aux.nombre = "";
          posicion2aux.imgBandera = "";
          /*Setea posicion 2 en seccion Grupos */
          document.getElementById(
            "posicionGrupo" + paisGrupo.ID
          ).style.display = "none";
        }
        /*guarda en A1 y A2 posicion1aux y A2 posicion2aux respectivamente*/
        Octavos.forEach((octavo) => {
          if (octavo.ID.includes(nombreGrupo.grupo)) {
            if (octavo.ID.substr(1, 1) == 1) {
              //Ingresa si es A1
              octavo = posicion1aux;
              mostrarTextoBanderaOctavos(octavo);
            } else {
              //Ingresa si es A2
              octavo = posicion2aux;
              mostrarTextoBanderaOctavos(octavo);
            }
          }
        });
      }
    });
  });
  console.log("------------------");
};

const mostrarPosicionGrupo = (pais, posicion) => {
  /*Mostrar posicion en Seccion Grupos */
  document.getElementById("posicionGrupo" + pais).style.display = "block";
  document.getElementById("posicionGrupo" + pais).style.background = "black";
  document.getElementById("posicionGrupo" + pais).style.color = "white";
  document.getElementById("posicionGrupo" + pais).innerHTML = posicion;
};

const mostrarTextoBanderaOctavos = (octavo) => {
  if (octavo.nombre === "") {
    /*Setea texto y Bandera en Seccion Octavos */
    document.getElementById("img" + octavo.ID).style.display = "none";
    document.getElementById("text" + octavo.ID).innerHTML = octavo.ID;
  } else {
    /*Mostrar texto y bandera en Seccion Octavos */
    document.getElementById("img" + octavo.ID).style.display = "block";
    document.getElementById("img" + octavo.ID).src = octavo.imgBandera;
    document.getElementById("text" + octavo.ID).innerHTML = octavo.nombre;
  }
};

/*Consulta si hay paises mostrados en la Fase, Ejemplo: Cuartos */
 mostrandoBanderaFase = (Fase) => {
      let bandera = false
      let atributo
      Fase.forEach((paisFase) => {
          /*ingresa a if solo para fase Tercer Puesto */
          if(paisFase.ID.includes('Tercer') ){
            atributo = document.getElementById('ganador'+paisFase.ID).style.display
            /*Ingresa a if si esta seleccionado ganador de Tercer Puesto */
            /*- img estrella esta visible a traves del atributo block*/
            if(atributo === 'block'){
              bandera = true
              return false
            }
          } else if (paisFase.nombre != '') {
            bandera = true
            return false
          }
      })

      return bandera
  }

/*Despliega ventana emergente de Advertencia */
desplegarVentanaAdvertencia = (fase) => {
      Swal.fire({
          title: "Paises Mostrados en "+fase+" \n Limpiar Fase "+fase,
          icon: "warning",
          showConfirmButton: true
          });
  }

/*Extraer atributo de elemento html */
extraerAtributo = (Fase) => {
  let atributo
  Fase.forEach((paisFase) => {
    atributo = document.getElementById('ganador'+paisFase.ID).style.display
    console.log("paisFase.ID: ", paisFase.ID," - Atributo obtenido: ", atributo)
  })
}

// EscucharClickGrupo()