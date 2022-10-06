(function() { 

    var elementoPaisGrupo = $()

    /*Maquetar grupos con nodos*/
    /*Recorre Array grupoTodos */
    $.each(grupoTodos, function(i, nombreGrupo)
    {
        /*Agrega elemento Nombre de Grupo, ejemplo "Grupo A" a la seccion fase de Grupos */
        elementoPaisGrupo = elementoPaisGrupo.add(
          '<div class="text-center col m-0 p-2 ContenedorGrupo"><h5 class="text-center m-1 p-0">' +
            nombreGrupo.nombre +
            "</h5></div>"
        )

        /*Recorre array Grupo */
        $.each(nombreGrupo.paises, function(j, paisGrupo)
        {

            const posicion = "posicionGrupo"+paisGrupo.ID

            /*Agrega elementos Paises a grupo */
            $('<li data-toggle="popover" class="d-flex align-items-center m-1 p-1" id="li'+
            paisGrupo.ID+'"><button class="d-flex justify-content-between align-items-center" id='+
            paisGrupo.ID+'><p class="m-0 p-1">'+
            paisGrupo.nombre+'</p><img src='+paisGrupo.imgBandera+
            ' class="me-3"></button><div id='+posicion+' class=" text-center m-1 p-1"></div></li>').appendTo(elementoPaisGrupo)
        })

        /*Visualizacion de plantilla grupo */
        $("#ContenedorGrupo").append(elementoPaisGrupo)

        elementoPaisGrupo = $()

    })

    /*Funcion Escuchar click en Seccion Fase de Grupos */
    const EscucharClickGrupo = () => 
    {
        $('.ContenedorGrupo button').on('click', function (e) {
            let banderaCuartos = false
            let banderaSemi = false

            console.log('click: ', e.target.id)

            /*Se asegura que no tenga paises mostrados en Cuartos*/
            banderaCuartos = mostrandoBanderaFase(Cuartos)
            /*Se asegura que no tenga paises mostrados en Semi*/
            banderaSemi = mostrandoBanderaFase(Semi)

            if(banderaCuartos === false && banderaSemi === false){
                LogicaGrupo(e.target.id)
                e.preventDefault();
            } else if (banderaSemi === true){
                desplegarVentanaAdvertencia('SemiFinales')
            } else if (banderaCuartos === true ){
                desplegarVentanaAdvertencia('Cuartos')
            } 
            
        })
    }

    /*Consulta si hay paises mostrados en la Fase, Ejemplo: Cuartos */
    mostrandoBanderaFase = (Fase) => {
        let bandera = false
        $.each(Fase,(i, paisFase) => {
            if(paisFase.nombre != ''){
                bandera = true
                return false
            }
        })
        return bandera
    }

    /*Despliega ventana emergente de Advertencia */
    desplegarVentanaAdvertencia = (fase) => {
        Swal.fire({
            title: "Paises Seleccionados en "+fase+" \n Limpiar Fase "+fase,
            icon: "warning",
            showConfirmButton: true
            });
    }

    const LogicaGrupo = (PaisSeleccionado) =>
    {
        let posicion1aux
        let posicion2aux
        /*Recorre array grupoTodos */
        $.each(grupoTodos, (i, nombreGrupo) => 
        {
            $.each(nombreGrupo.paises, (j, paisGrupo) => 
            {
                if (PaisSeleccionado == paisGrupo.ID) 
                {
                    $.each(Octavos, (z, octavo) =>
                    {
                        if(octavo.ID.includes(nombreGrupo.grupo)) {
                            if(octavo.ID.substr(1,1) == 1){
                                posicion1aux = octavo
                            } else {
                                posicion2aux = octavo
                            }
                        }
                    })

                    /*Algoritmo para seleccionar 1ra y 2da posicion en fase de grupos*/
                    if (
                      posicion1aux.nombre === "" &&
                      posicion2aux.nombre != paisGrupo.nombre
                    ) {
                      posicion1aux.nombre = paisGrupo.nombre;
                      posicion1aux.imgBandera = paisGrupo.imgBandera;
                      /*Mostrar posicion en Seccion Grupos */
                      mostrarPosicionGrupo(paisGrupo.ID, 1)
                    } else if (
                      posicion1aux.nombre != "" &&
                      posicion2aux.nombre == "" &&
                      posicion1aux.nombre != paisGrupo.nombre
                    ) {
                      posicion2aux.nombre = paisGrupo.nombre;
                      posicion2aux.imgBandera = paisGrupo.imgBandera;
                      /*Mostrar posicion en Seccion Grupos */
                      mostrarPosicionGrupo(paisGrupo.ID, 2)
                    } else if (posicion1aux.nombre === paisGrupo.nombre) {
                      posicion1aux.nombre = "";
                      posicion1aux.imgBandera = "";
                      /*Setea posicion en seccion Grupos */
                      $("#posicionGrupo" + paisGrupo.ID).hide()
                    } else if (posicion2aux.nombre === paisGrupo.nombre) {
                      posicion2aux.nombre = "";
                      posicion2aux.imgBandera = "";
                      /*Setea posicion en seccion Grupos */
                      $("#posicionGrupo" + paisGrupo.ID).hide();
                    }

                    /*guarda en A1 y A2 posicion1aux y A2 posicion2aux respectivamente*/
                    $.each(Octavos, (z, octavo) =>{
                        if(octavo.ID.includes(nombreGrupo.grupo)) {
                            if(octavo.ID.substr(1,1) == 1){     //Ingresa si es A1
                                octavo = posicion1aux
                                mostrarTextoBanderaOctavos(octavo)
                            } else {                            //Ingresa si es A2
                                octavo = posicion2aux
                                mostrarTextoBanderaOctavos(octavo)
                            }

                        }
                    })

                }
            })
        })
        console.log("------------------")
    }

    const mostrarPosicionGrupo = (pais, posicion) => {
        /*Mostrar posicion en Seccion Grupos */
        $("#posicionGrupo" + pais).show();
        $("#posicionGrupo" + pais).css({
          "background-color": "black",
          color: "white",
        });
        $("#posicionGrupo" + pais).html(posicion);
    }

    const mostrarTextoBanderaOctavos = (octavo) => {
      if (octavo.nombre === "") {
        /*Setea texto y Bandera en Seccion Octavos */
        $("#text" + octavo.ID).html(octavo.ID);
        $("#img" + octavo.ID).hide();
      } else {
        /*Mostrar texto y bandera en Seccion Octavos */
        $("#text" + octavo.ID).html(octavo.nombre);
        $("#img" + octavo.ID).show();
        $("#img" + octavo.ID).attr("src", octavo.imgBandera);
      }
    }

    /*Funcion Escuchar click en Secciones de Proxima Fase (Octavos, Cuartos, ... , etc)*/
    const EscucharClickFase = (faseActual, faseProxima, nroFaseActual, nombreFaseActual) => {
        var contador = 0
        
        $("."+nombreFaseActual+" button").on("click", function (e) {

            let banderaSemi = false
            let banderaFinal = false

            switch (nombreFaseActual) {
                case 'Octavos':
                    /*Se asegura que no tenga paises mostrados en Semi*/
                    banderaSemi = mostrandoBanderaFase(Semi)
                    break
                case 'Cuartos':
                    /*Se asegura que no tenga paises mostrados en Final*/
                    banderaFinal = mostrandoBanderaFase(Final)
                default:
                    break

            }

            $.each(faseActual, (i, objeto) => {
              /* */
              if (objeto.nombre != "") {
                contador ++;
              }
            });

            if (contador == nroFaseActual) {
                if (banderaSemi === false && banderaFinal === false) {
                    LogicaFase(faseActual, faseProxima, e.target.id);
                } else if (banderaFinal === true) {
                    desplegarVentanaAdvertencia('Final')
                } else if (banderaSemi === true) {
                    desplegarVentanaAdvertencia('SemiFinales')
                }
            } else {
              Swal.fire({
                title: "Falta seleccionar Pais en Fase",
                icon: "warning",
                showConfirmButton: true
                });
            }
            e.preventDefault();
    
            contador = 0
          });
    }

    const LogicaFase = (faseActual, faseProxima, PaisSeleccionado) => {
        $.each(faseActual, (i, actual) => {
            if(actual.ID == PaisSeleccionado)
            {
                console.log("click: ", actual.ID)

                if(faseProxima != "")
                {
                    $.each(faseProxima, (j, proxima) => {
                        if (proxima.ID == actual.posicionProximaFase) {
                            /*guarda en variable proxima fase */
                            proxima.nombre = actual.nombre
                            proxima.imgBandera = actual.imgBandera
    
                            /*Muestra estrella en pais ganador de fase actual*/
                            $("#ganador"+actual.ID).show()
                            $("#img"+actual.ID).css({"-webkit-filter": 'grayscale(0%)',
                                '-moz-filter': 'grayscale(0%)',
                                'filter': 'grayscale(0%)'});
                            /*Oculta estrella en pais perdedor de fase actual*/
                            $("#ganador"+actual.perdedorPartido).hide()
                            $("#img"+actual.perdedorPartido).css({"-webkit-filter": 'grayscale(100%)',
                            '-moz-filter': 'grayscale(100%)',
                            'filter': 'grayscale(100%)'});
    
                            /*Muestra pais ganador (nombre y bandera) en proxima fase*/
                            $("#text"+proxima.ID).html(proxima.nombre)
                            $("#img"+proxima.ID).show()
                            $("#img"+proxima.ID).attr("src", proxima.imgBandera)

    
                            /*Muestra pais perdedor en seccion Tercer Puesto*/
                            if(actual.perdedorSemi != ""){
                                $.each(Semi, (i, semi)=>{
                                    if(semi.ID === actual.perdedorPartido){
                                        /*guarda Semi Perdedor en Tercer Puesto */
                                        $.each(Tercer, (i, tercer)=>{
                                            if(tercer.ID === actual.perdedorSemi){
                                                tercer.nombre = semi.nombre
                                                tercer.imgBandera = semi.imgBandera
                                            }
                                        })
                                        
                                        /* */
                                        $("#text"+actual.perdedorSemi).html(semi.nombre)
                                        $("#img"+actual.perdedorSemi).show()
                                        $("#img"+actual.perdedorSemi).attr("src", semi.imgBandera)
                                    }
                                })
                            }
    
                            /*Muestra estrella solo para seccion Campeon */
                            if(proxima.ID === "Campeon"){
                                $("#ganador"+proxima.ID).show()
                                Swal.fire({
                                    title: "Campeón "+proxima.nombre+"",
                                    background: "../img/fondo-titulo-secundario.jpg",
                                    padding: '2rem',
                                    imageUrl: "./img/trofeo-fifa.jpg",
                                    imageWidth: '90%',
                                    showConfirmButton: true
                                    });
                            }
                        }
                    })
                } else {
                    /*Muestra estrella en pais ganador de seccion Tercer Puesto*/
                    $("#ganador"+actual.ID).show()
                    $("#img"+actual.ID).css({"-webkit-filter": 'grayscale(0%)',
                                '-moz-filter': 'grayscale(0%)',
                                'filter': 'grayscale(0%)'});
                    /*Oculta estrella en pais perdedor de seccion Tercer Puesto*/
                    $("#ganador"+actual.perdedorPartido).hide()
                    $("#img"+actual.perdedorPartido).css({"-webkit-filter": 'grayscale(100%)',
                            '-moz-filter': 'grayscale(100%)',
                            'filter': 'grayscale(100%)'});
                }            
            }
        })

    }

    /*Mostrar Fase de Grupos Lado Izquierdo (A1, CuartosO1,..., FINAL 1) con nodos desde */
    const maquetaFaseGrupoIzq = (contenedor,nodoIzq) => 
    {
        var elementoIzq = $()

        $.each(nodoIzq, (i, Izq) => {
            elementoIzq = elementoIzq.add(
              '<div class="col d-flex justify-content-end p-1"><button type="button" class="btn btn-success" id=' +
                Izq.ID +
                '><div class="d-flex justify-content-between align-items-center"><div id="text' +
                Izq.ID +
                '">' +
                Izq.ID +
                '</div><img id="ganador' +
                Izq.ID +
                '" src="./img/star-fill.svg" alt="ganador""/><img id="img' +
                Izq.ID +
                '" src="" alt=""/></div></button></div>'
            );
          });

          $(contenedor).append(elementoIzq)
    }

    /*Mostrar Fase de Grupos Lado Derecho (A2, CuartosO2,..., FINAL 2) con nodos desde */
    const maquetaFaseGrupoDer = (contenedor, nodoDer) => 
    {
        var elementoDer = $()

        $.each(nodoDer, (i, Der) =>{
            elementoDer = elementoDer.add(
              '<div class="col d-flex justify-content-start p-1"><button type="button" class="btn btn-success" id=' +
              Der.ID +
                '><div class="d-flex justify-content-between align-items-center"><div id="text' +
                Der.ID +
                '">' +
                Der.ID +
                '</div><img id="ganador' +
                Der.ID +
                '" src="./img/star-fill.svg" alt="ganador""/><img id="img' +
                Der.ID +
                '" src="" alt=""/></div></button></div>'
            )
        })

        $(contenedor).append(elementoDer)
    }

    /*Visualizacion de plantilla Fase de Grupos en MOD*/
    maquetaFaseGrupoIzq("#ContenedorOctavosIzq",OctavosIzquierdo)
    maquetaFaseGrupoDer("#ContenedorOctavosDer",OctavosDerecho)

    maquetaFaseGrupoIzq("#ContenedorCuartosIzq",CuartosIzquierdo)
    maquetaFaseGrupoDer("#ContenedorCuartosDer",CuartosDerecho)

    maquetaFaseGrupoIzq("#ContenedorSemiIzq",SemiIzquierdo)
    maquetaFaseGrupoDer("#ContenedorSemiDer",SemiDerecho)

    maquetaFaseGrupoIzq("#ContenedorTercerIzq",TercerIzquierdo)
    maquetaFaseGrupoDer("#ContenedorTercerDer",TercerDerecho)

    maquetaFaseGrupoIzq("#ContenedorFinalIzq",FinalIzquierdo)
    maquetaFaseGrupoDer("#ContenedorFinalDer",FinalDerecho)

    /*Llamada a funciones que esperan click*/
    EscucharClickGrupo()
    EscucharClickFase(Octavos, Cuartos, 16, "Octavos")
    EscucharClickFase(Cuartos, Semi, 8, "Cuartos")
    EscucharClickFase(Semi, Final, 4, "Semi")
    EscucharClickFase(Tercer, "", 2, "Tercer")
    EscucharClickFase(Final, Campeon, 2, "Final")

    /*Click Boton Limpiar Cuartos en adelante */
    $(".btnLimpiarCuartosAdelante").on("click", () => {
        limpiarFase(Campeon)
        limpiarFase(Final)
        limpiarFase(Tercer)
        limpiarFase(Semi)
        limpiarFase(Cuartos)
        limpiarGanadorFaseAnterior(Octavos)
    });

    /*Click Boton Limpiar SemiFinales en adelante */
    $(".btnLimpiarSemiAdelante").on("click", () => {
        limpiarFase(Campeon)
        limpiarFase(Final)
        limpiarFase(Tercer)
        limpiarFase(Semi)
        limpiarGanadorFaseAnterior(Cuartos)
    });

    /*Click Boton Limpiar Grupos en adelante */
    $(".btnLimpiarGruposEnAdelante").on("click", () => {
        limpiarFase(Campeon)
        limpiarFase(Final)
        limpiarFase(Tercer)
        limpiarFase(Semi)
        limpiarFase(Cuartos)
        limpiarFase(Octavos)
        $.each(grupoTodos, (i, nombreGrupo) => {
            $.each(nombreGrupo.paises, (j, paisGrupo) => {
                $("#posicionGrupo" + paisGrupo.ID).hide();
            })
        })
    });

    /*Funcion que limpia valores en Objetos y elementos html de Fase*/
    const limpiarFase = (faseLimpiar) => {
        /*Recorre Array */
        $.each(faseLimpiar, (i, fase) => {
            fase.nombre = ""
            fase.imgBandera = ""
            /* */
            $("#text"+fase.ID).html(fase.ID)
            $("#ganador"+fase.ID).hide()
            $("#img"+fase.ID).hide()
        })
    }

    /*Funcion que limpia ganador fase anterior */
    const limpiarGanadorFaseAnterior = (faseAnterior) => {
        /*Recorre Array */
        $.each(faseAnterior, (j, fase) => {
            $("#ganador"+fase.ID).hide()
        })
    }

    /*funcion que calcula cantidad de dias restantes para el mundial*/
    const cantDiasComienzoMundial = () => {
        let diferencia = fechaComienzoMundial.getTime()-hoy.getTime()
        let cantdias = Math.floor(diferencia/(1000*3600*24))
        console.log("Dias Restantes para Mundial: ", cantdias)
        document.getElementById("resultado").innerHTML = String(cantdias) + " dias Restan para Inicio del Mundial"
    }

    /*Funcion que oculta muestra navbar*/
   var prevScrollPos = window.pageYOffset

   window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbarContenedor").style.top = "-60px";
      } else {
        document.getElementById("navbarContenedor").style.top = "0";
        document.getElementById("navbarContenedor").style.opacity = '0.9'
      }
      prevScrollPos = currentScrollPos;
    }

    /*Popover Fase de Grupos */
    $(() => {
        let partido = {rival: "Qatar vs Ecuador", dia: "Domingo 20/11", horario: "13 hrs"}
        $('#liQatar').popover({
            title: "Partidos",
            content: partido.rival,
            trigger: "hover",
            placement: "bottom",
        });
    })

    /*Popover btnLimpiarGruposEnAdelante */
    $(".btnLimpiarGruposEnAdelante").popover({
      title: "",
      content: "Limpia Fase de Grupos en Adelante",
      trigger: "hover",
      placement: "left",
    });
    
    /*Llamada a funcion que muestra cantidad de dias restantes para inicio de mundial*/
    cantDiasComienzoMundial()

    /**Llamada a funcion APIWeatherService*/
    APIWeatherService()

})