/*Maquetar grupos con nodos*/
const maquetarGrupoDOM = () => {

    grupoTodos.forEach((nombreGrupo) => {

        let elementoDivGrupo = document.createElement("elementoDivGrupo")
        let elementoNombreGrupo = document.createElement("elementoNombreGrupo")
        let elementoPaisGrupo = document.createElement('elementoPaisGrupo')

        /*Agrega clase ContenedorGrupo al elemento elementoDivGrupo */
        elementoDivGrupo.classList.add('ContenedorGrupo')

        /*Agrega elemento Nombre de Grupo, ejemplo "Grupo A" a la seccion fase de Grupos*/
        elementoNombreGrupo.innerHTML = '<h5 class="text-center m-1 p-0">'+nombreGrupo.nombre+'</h5>'

        /*Recorre array Grupo, ejemplo GrupoA = [Qatar, Ecuador, Senegal, PaisesBajos]*/
        /*Qatar es un objeto, Qatar = {ID: "Qatar", imgBandera: "./img/qatar.png", nombre: "Qatar"} */
        nombreGrupo.paises.forEach((paisGrupo) =>{
            const posicion = "posicionGrupo"+paisGrupo.ID

            /*Agrega elementos Paises a grupo */
            elementoPaisGrupo.innerHTML += '<li class="d-flex align-items-center m-1 p-1" id="li'+
            paisGrupo.ID+'"><button class="d-flex justify-content-between align-items-center" id='+paisGrupo.ID+'><p class="m-0 p-1">'+
            paisGrupo.nombre+'</p><img src='+paisGrupo.imgBandera+
            ' class="me-3"></button><div id='+posicion+' class=" text-center m-1 p-1"></div></li>'
        })

        /*Visualizacion de plantilla grupo */
        document.getElementById("ContenedorGrupo").appendChild(elementoDivGrupo).appendChild(elementoNombreGrupo).appendChild(elementoPaisGrupo)
    })
}

/*Mostrar Fase de Grupos Lado Izquierdo (A1, CuartosO1,..., FINAL 1) con nodos*/
const maquetaFaseGrupoIzq = (contenedor, nodoIzq) => {
  let elementoIzq = document.createElement("elementoIzq");

  nodoIzq.forEach((Izq) => {
    elementoIzq.innerHTML +=
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
      '" src="" alt=""/></div></button></div>';
  });
  document.getElementById(contenedor).appendChild(elementoIzq);
};

/*Mostrar Fase de Grupos Lado Derecho (A2, CuartosO2,..., FINAL 2) con nodos*/
const maquetaFaseGrupoDer = (contenedor, nodoDer) => {
  let elementoDer = document.createElement("elementoDer");

  nodoDer.forEach((Der) => {
    elementoDer.innerHTML +=
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
      '" src="" alt=""/></div></button></div>';
  });
  document.getElementById(contenedor).appendChild(elementoDer);
};

/*Visualizacion de plantilla Grupos en MOD*/
maquetarGrupoDOM()

/*Visualizacion de plantilla Fase de Grupos en MOD (Octavos, Cuartos, etc.)*/
maquetaFaseGrupoIzq("ContenedorOctavosIzq",OctavosIzquierdo)
maquetaFaseGrupoDer("ContenedorOctavosDer",OctavosDerecho)

maquetaFaseGrupoIzq("ContenedorCuartosIzq",CuartosIzquierdo)
maquetaFaseGrupoDer("ContenedorCuartosDer",CuartosDerecho)

maquetaFaseGrupoIzq("ContenedorSemiIzq",SemiIzquierdo)
maquetaFaseGrupoDer("ContenedorSemiDer",SemiDerecho)

maquetaFaseGrupoIzq("ContenedorTercerIzq",TercerIzquierdo)
maquetaFaseGrupoDer("ContenedorTercerDer",TercerDerecho)

maquetaFaseGrupoIzq("ContenedorFinalIzq",FinalIzquierdo)
maquetaFaseGrupoDer("ContenedorFinalDer",FinalDerecho)



/*Funcion que oculta / muestra navbar*/
var prevScrollPos = window.pageYOffset

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbarContenedor").style.top = "-60px";
  } else {
    document.getElementById("navbarContenedor").style.top = "0";
    document.getElementById("navbarContenedor").style.opacity = "0.9";
  }
  prevScrollPos = currentScrollPos;
};

/*funcion que calcula cantidad de dias restantes para el mundial*/
const cantDiasComienzoMundial = () => {
  let diferencia = fechaComienzoMundial.getTime() - hoy.getTime();
  let cantdias = Math.floor(diferencia / (1000 * 3600 * 24));
  console.log("Dias Restantes para Mundial: ", cantdias);
  document.getElementById("resultado").innerHTML =
    String(cantdias) + " dias Restan para Inicio del Mundial";
};

/*Llamada a funcion */
cantDiasComienzoMundial()