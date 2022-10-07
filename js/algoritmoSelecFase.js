/*Funcion Escuchar click en Secciones Fase de Grupos (Octavos, Cuartos, ... , etc)*/
/*Se pasan dos array como parametros*/
/*un numero para saber en que fase estamos*/
/*un string correspondiente al elemento contenedor en html*/
/*Ejemplo EscucharClickFase(Octavos, Cuartos, 16, "ContenedorOctavos") */
const EscucharClickFase = (faseActual,faseProxima, nroFaseActual,nombreFaseActual) => {
  let contador = 0;

  const botonesFase = document.querySelectorAll("." + nombreFaseActual + " button");

  botonesFase.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      /*Variables que se utilizan para asegurarse que no esten mostrados paises en la correspondiente Fase*/
      let banderaSemi = false;
      let banderaFinal = false;
      let banderaTercer = false;
      let banderaCampeon = false;

      switch (nombreFaseActual) {
        case "ContenedorOctavos":
          /*Se asegura que no tenga paises mostrados en Semi*/
          banderaSemi = mostrandoBanderaFase(Semi);
          banderaFinal = mostrandoBanderaFase(Final);
          break;
        case "ContenedorCuartos":
          /*Se asegura que no tenga paises mostrados en Final*/
          banderaFinal = mostrandoBanderaFase(Final);
        case "ContenedorSemi":
          /*Se asegura que no tenga paises ganadores en Campeon y Tercer Puesto*/
          banderaCampeon = mostrandoBanderaFase(Campeon);
          banderaTercer = mostrandoBanderaFase(Tercer);
        default:
          break;
      }
      /*Recorre array, Ejemplo: Octavos*/
      faseActual.forEach((objeto) => {
        /*Ingresa solo si todas objetos del array tienen variable nombre cargado */
        /*Ejemplo: array Octavos tiene 16 objetos [A1, A2, ..., H2]*/
        /*A su vez A1.nombre tiene que tener string != "" para ingresar a sentencia if */
        if (objeto.nombre != "") {
          contador++;
        }
      });
      /*Ingresa a sentencia if si contador = 16 para ejemplo que venimos mostrando*/
      if (contador == nroFaseActual) {
        /*Ingresa a sentencia if si no hay paises mostrados en Secciones Campeon, Tercer, Final y Semi*/
        if (banderaSemi === false && banderaFinal === false && banderaTercer === false && banderaCampeon === false) {
          /*llamada a funcion donde se ejecuta la logica para seleccionar pais ganador */
          /*Ejemplo: LogicaFase(Octavos, Cuartos, A1) */
          LogicaFase(faseActual, faseProxima, evento.target.id);
        } else if (banderaCampeon === true) {
          desplegarVentanaAdvertencia("Final");
        } else if (banderaFinal === true) {
          desplegarVentanaAdvertencia("Final");
        } else if (banderaTercer === true) {
          desplegarVentanaAdvertencia("Tercer");
        } else if (banderaSemi === true) {
          desplegarVentanaAdvertencia("SemiFinales");
        }
      } else {
        Swal.fire({
          title: "Falta seleccionar Pais en Fase",
          icon: "warning",
          showConfirmButton: true,
        });
      }
      evento.preventDefault();
      contador = 0;
    });
  });
};

/*Funcion que paso objetos como parametros, Ejempo: LogicaFase(Octavos, Cuartos, A1) */
const LogicaFase = (faseActual, faseProxima, PaisSeleccionado) => {
  faseActual.forEach((actual) => {
    if (actual.ID == PaisSeleccionado) {
      console.log("click: ", actual.ID);

      if (faseProxima != "") {
        faseProxima.forEach((proxima) => {
          if (proxima.ID == actual.posicionProximaFase) {
            /*guarda pais seleccionado en variable de proxima fase */
            proxima.nombre = actual.nombre;
            proxima.imgBandera = actual.imgBandera;
            /*Muestra estrella en pais ganador / Oculta estrella en pais perdedor de fase actual*/
            mostrarOcultarEstrella(actual.ID, actual.perdedorPartido);
            /*Muestra pais ganador (nombre y bandera) en proxima fase*/
            mostrarTextoBandera(proxima.ID, proxima.nombre, proxima.imgBandera);

            /*Muestra pais perdedor en seccion Tercer Puesto*/
            if (actual.perdedorSemi != "") {
              Semi.forEach((semi) => {
                if (semi.ID === actual.perdedorPartido) {
                  /*guarda Semi Perdedor en Tercer Puesto */
                  Tercer.forEach((tercer) => {
                    if (tercer.ID === actual.perdedorSemi) {
                      tercer.nombre = semi.nombre;
                      tercer.imgBandera = semi.imgBandera;
                    }
                  });
                  /* */
                  mostrarTextoBandera(actual.perdedorSemi,semi.nombre,semi.imgBandera);
                }
              });
            }
            /*Muestra estrella solo para seccion Campeon */
            if (proxima.ID === "Campeon") {
              document.getElementById("ganador" + proxima.ID).style.display =
                "block";
              Swal.fire({
                title: "Campeón " + proxima.nombre + "",
                background: "../img/fondo-titulo-secundario.jpg",
                padding: "2rem",
                imageUrl: "./img/trofeo-fifa.jpg",
                imageWidth: "90%",
                showConfirmButton: true,
              });
            }
          }
        });
      } else {
        /*Muestra estrella en pais ganador / Oculta estrella en pais perdedor de seccion Tercer Puesto*/
        mostrarOcultarEstrella(actual.ID, actual.perdedorPartido);
      }
    }
  });
};

/*Muestra estrella en pais ganador  / Oculta estrella en pais perdedor de fase actual*/
mostrarOcultarEstrella = (paisGanador, paisPerdedor) => {
  /*Muestra estrella en pais ganador de fase actual*/
  document.getElementById("ganador" + paisGanador).style.display = "block";
  document.getElementById("img" + paisGanador).style.filter = "grayscale(0%)";
  /*Oculta estrella en pais perdedor de fase actual*/
  document.getElementById("ganador" + paisPerdedor).style.display = "none";
  document.getElementById("img" + paisPerdedor).style.filter =
    "grayscale(100%)";
};

/*Muestra texto y bandera de pais */
mostrarTextoBandera = (paisID, paisNombre, paisImgBandera) => {
  document.getElementById("text" + paisID).innerHTML = paisNombre;
  document.getElementById("img" + paisID).style.display = "block";
  document.getElementById("img" + paisID).src = paisImgBandera;
};

/*Llamada a funciones */
EscucharClickFase(Octavos, Cuartos, 16, "ContenedorOctavos");
EscucharClickFase(Cuartos, Semi, 8, "ContenedorCuartos");
EscucharClickFase(Semi, Final, 4, "ContenedorSemi");
EscucharClickFase(Tercer, "", 2, "ContenedorTercer");
EscucharClickFase(Final, Campeon, 2, "ContenedorFinal")