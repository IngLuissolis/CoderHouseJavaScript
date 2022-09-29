jQuery(function() { 
    // console.log('funcionando jquery')

    var elementoPaisGrupo = $()

    /*Maquetar grupos con nodos*/
    /*Recorre Array grupoTodos */
    $.each(grupoTodos, function(i, nombreGrupo)
    {
        /*Agrega elemento Nombre de Grupo, ejemplo "Grupo A" a la seccion fase de Grupos */
        elementoPaisGrupo = elementoPaisGrupo.add(
          '<div class="text-center col m-0 p-2 jqueryGrupo"><h5 class="text-center m-1 p-0">' +
            nombreGrupo.nombre +
            "</h5></div>"
        )

        /*Recorre array Grupo */
        $.each(nombreGrupo.paises, function(j, paisGrupo)
        {

            const posicion = "posicionGrupo"+paisGrupo.ID

            /*Agrega elementos Paises a grupo */
            $('<li class="d-flex align-items-center m-1 p-1"><button class="d-flex justify-content-between align-items-center"id='+
            paisGrupo.ID+'><p  class="m-0 p-1">'+
            paisGrupo.nombre+'</p><img src='+paisGrupo.imgBandera+
            ' class="me-3"></button><div id='+posicion+' class=" text-center m-1 p-1"></div></li>').appendTo(elementoPaisGrupo)
        })

        /*Visualizacion de plantilla grupo */
        $("#jqueryContenedorGrupo").append(elementoPaisGrupo)

        elementoPaisGrupo = $()

    })

    /*Funcion Escuchar click en Seccion Fase de Grupos */
    jqueryEscucharClickGrupo = () => 
    {
        $('.jqueryGrupo button').on('click', function (e) {
            console.log('click: ', e.target.id)
            jqueryLogicaGrupo(e.target.id)
            e.preventDefault();
        })
    }

    jqueryLogicaGrupo = (jqueryPaisSeleccionado) =>
    {
        /*Recorre array grupoTodos */
        $.each(grupoTodos, (i, nombreGrupo) => 
        {
            $.each(nombreGrupo.paises, (j, paisGrupo) => 
            {
                if (jqueryPaisSeleccionado == paisGrupo.ID) 
                {
                    $.each(Octavos, (z, octavo) =>
                    {
                        if(octavo.ID.includes(nombreGrupo.grupo))
                        {
                            if(octavo.nombre === paisGrupo.nombre)
                            {
                                octavo.nombre = ""
                                octavo.imgBandera = ""

                                /*Setea posicion en seccion Grupos */
                                $("#posicionGrupo"+paisGrupo.ID).hide()
                                
                                /*Setea texto y Bandera en Seccion Octavos */
                                $("#text"+octavo.ID).html(octavo.ID)
                                $("#img"+octavo.ID).hide()

                                return false

                            } else if (octavo.nombre === "")
                            {
                                octavo.nombre = paisGrupo.nombre
                                octavo.imgBandera = paisGrupo.imgBandera

                                /*Mostrar posicion en Seccion Grupos */
                                $("#posicionGrupo"+paisGrupo.ID).show()
                                $("#posicionGrupo"+paisGrupo.ID).css({"background-color": "black", "color": "white"})
                                $("#posicionGrupo"+paisGrupo.ID).html(octavo.ID.substr(1,1))

                                /*Mostrar texto y bandera en Seccion Octavos */
                                $("#text"+octavo.ID).html(octavo.nombre)
                                $("#img"+octavo.ID).show()
                                $("#img"+octavo.ID).attr("src", octavo.imgBandera)

                                return false
                            }
                        }
                    })

                }
            })
        })
        console.log("------------------")
    }

    /*Funcion Escuchar click en Secciones de Proxima Fase (Octavos, Cuartos, ... , etc)*/
    jqueryEscucharClickFase = (faseActual, faseProxima, nroFaseActual, nombreFaseActual) => {
        var contador = 0
        $(".jquery"+nombreFaseActual+" button").on("click", function (e) {
            $.each(faseActual, (i, objeto) => {
              /* */
              if (objeto.nombre != "") {
                contador = contador + 1;
              }
            });
            // console.log("contador: ", contador)
            // console.log("nroFaseActual: ", nroFaseActual)
            if (contador == nroFaseActual) {
              jqueryLogicaFase(faseActual, faseProxima, e.target.id);
            } else {
              console.warn("Falta seleccionar pais");
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

    jqueryLogicaFase = (faseActual, faseProxima, jqueryPaisSeleccionado) => {
        $.each(faseActual, (i, actual) => {
            if(actual.ID == jqueryPaisSeleccionado)
            {
                console.log("click: ", actual.ID)
                // console.log("actual.proximaFase: ", actual.posicionProximaFase)

                if(faseProxima != "")
                {
                    $.each(faseProxima, (j, proxima) => {
                        if (proxima.ID == actual.posicionProximaFase) {
                            /*guarda en variable proxima fase */
                            proxima.nombre = actual.nombre
                            proxima.imgBandera = actual.imgBandera
    
                            /*Muestra estrella en pais ganador de fase actual*/
                            $("#ganador"+actual.ID).show()
                            /*Oculta estrella en pais perdedor de fase actual*/
                            $("#ganador"+actual.perdedorPartido).hide()
    
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
                                    imageUrl: "./img/trofeo-campeon.png",
                                    showConfirmButton: true
                                    });
                            }
                        }
                    })
                } else {
                    /*Muestra estrella en pais ganador de seccion Tercer Puesto*/
                    $("#ganador"+actual.ID).show()
                    /*Oculta estrella en pais perdedor de seccion Tercer Puesto*/
                    $("#ganador"+actual.perdedorPartido).hide()
                }            
            }
        })

    }

    /*Mostrar Fase de Grupos Lado Izquierdo (A1, CuartosO1,..., FINAL 1) con nodos desde jquery*/
    maquetaFaseGrupoIzq = (contenedor,nodoIzq) => 
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

    /*Mostrar Fase de Grupos Lado Derecho (A2, CuartosO2,..., FINAL 2) con nodos desde jquery*/
    maquetaFaseGrupoDer = (contenedor, nodoDer) => 
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
    maquetaFaseGrupoIzq("#jqueryContenedorOctavosIzq",OctavosIzquierdo)
    maquetaFaseGrupoDer("#jqueryContenedorOctavosDer",OctavosDerecho)

    maquetaFaseGrupoIzq("#jqueryContenedorCuartosIzq",CuartosIzquierdo)
    maquetaFaseGrupoDer("#jqueryContenedorCuartosDer",CuartosDerecho)

    maquetaFaseGrupoIzq("#jqueryContenedorSemiIzq",SemiIzquierdo)
    maquetaFaseGrupoDer("#jqueryContenedorSemiDer",SemiDerecho)

    maquetaFaseGrupoIzq("#jqueryContenedorTercerIzq",TercerIzquierdo)
    maquetaFaseGrupoDer("#jqueryContenedorTercerDer",TercerDerecho)

    maquetaFaseGrupoIzq("#jqueryContenedorFinalIzq",FinalIzquierdo)
    maquetaFaseGrupoDer("#jqueryContenedorFinalDer",FinalDerecho)

    /*Llamada a funciones que esperan click*/
    jqueryEscucharClickGrupo()
    jqueryEscucharClickFase(Octavos, Cuartos, 16, "Octavos")
    jqueryEscucharClickFase(Cuartos, Semi, 8, "Cuartos")
    jqueryEscucharClickFase(Semi, Final, 4, "Semi")
    jqueryEscucharClickFase(Tercer, "", 2, "Tercer")
    jqueryEscucharClickFase(Final, Campeon, 2, "Final")

    /*funcion que calcula cantidad de dias restantes para el mundial*/
    const cantDiasComienzoMundial = () => {
        let diferencia = fechaComienzoMundial.getTime()-hoy.getTime()
        let cantdias = Math.floor(diferencia/(1000*3600*24))
        console.log("Dias Restantes para Mundial: ", cantdias)
        document.getElementById("resultado").innerHTML = String(cantdias) + " dias Restantes para Inicio del Mundial"
    }
    
    /*Llamada a funcion que muestra cantidad de dias restantes para inicio de mundial*/
    cantDiasComienzoMundial()
})



