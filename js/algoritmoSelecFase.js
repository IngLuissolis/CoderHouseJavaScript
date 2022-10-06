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

/*Funcion Escuchar click en Secciones de Proxima Fase (Octavos, Cuartos, ... , etc)*/
const EscucharClickFase = (
  faseActual,
  faseProxima,
  nroFaseActual,
  nombreFaseActual
) => {
  let contador = 0;

  const botonesFase = document.querySelectorAll(
    "." + nombreFaseActual + " button"
  );

  botonesFase.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      let banderaSemi = false;
      let banderaFinal = false;
      let banderaCampeon = false;
      let banderaTercer = false;

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

      faseActual.forEach((objeto) => {
        /* */
        if (objeto.nombre != "") {
          contador++;
        }
      });
      if (contador == nroFaseActual) {
        if (
          banderaSemi === false &&
          banderaFinal === false &&
          banderaTercer === false &&
          banderaCampeon === false
        ) {
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

EscucharClickFase(Octavos, Cuartos, 16, "ContenedorOctavos");
EscucharClickFase(Cuartos, Semi, 8, "ContenedorCuartos");
EscucharClickFase(Semi, Final, 4, "ContenedorSemi");
EscucharClickFase(Tercer, "", 2, "ContenedorTercer");
EscucharClickFase(Final, Campeon, 2, "ContenedorFinal")