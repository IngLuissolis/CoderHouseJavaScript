/*Maquetar grupos con nodos*/
/*Dicha Funcion se llama en archivo APIPaises.js cuando se recibe respuesta de Base de datos Local (paises.json) */
const maquetarGrupoDOM = () => {

  grupoTodos.forEach((nombreGrupo) => {

    let elementoDivGrupo = document.createElement("elementoDivGrupo"),
      elementoNombreGrupo = document.createElement("elementoNombreGrupo"),
      elementoPaisGrupo = document.createElement("elementoPaisGrupo");

    /*Agrega clase ContenedorGrupo al elemento elementoDivGrupo */
    elementoDivGrupo.classList.add("ContenedorGrupo");

    /*Agrega elemento Nombre de Grupo, ejemplo "Grupo A" a la seccion fase de Grupos*/
    elementoNombreGrupo.innerHTML =
      '<h5 class="text-center m-1 p-0">' + nombreGrupo.nombre + "</h5>";

    /*Recorre array Grupo, ejemplo GrupoA = [Qatar, Ecuador, Senegal, PaisesBajos]*/
    /*Qatar es un objeto, Qatar = {ID: "Qatar", imgBandera: "./img/qatar.png", nombre: "Qatar"} */
    nombreGrupo.paises.forEach((paisGrupo) => {
      const posicion = "posicionGrupo" + paisGrupo.ID;

      /*Agrega elementos Paises a grupo */
      elementoPaisGrupo.innerHTML +=
        '<li class="d-flex align-items-center m-1 p-1" id="li' +
        paisGrupo.ID +
        '"><button class="d-flex justify-content-between align-items-center" id=' +
        paisGrupo.ID +
        '><p class="m-0 p-1">' +
        paisGrupo.nombre +
        "</p><img src=" +
        paisGrupo.imgBandera +
        ' class="me-3"></button><div id=' +
        posicion +
        ' class=" text-center m-1 p-1"></div></li>';
    });

    /*Visualizacion de plantilla grupo */
    document
      .getElementById("ContenedorGrupo")
      .appendChild(elementoDivGrupo)
      .appendChild(elementoNombreGrupo)
      .appendChild(elementoPaisGrupo);
  });
}

/*Arma plantilla para Fase de Grupos separado por Seccion y en dos grupos de elementos*/
const maquetaFaseGrupo = (contenedor, arrayFase) => {
  let elemento = document.createElement("elemento"),
    elementoIzq = document.createElement("elementoIzq"),
    elementoDer = document.createElement("elementoDer");
  let numero = 1
  let claseDiv =""
  
  arrayFase.forEach((elementoFase) => {
    (numero % 2  == 0) ? 
    (claseDiv = "start")     /*Par - Elementos Lado Derecha*/
    : (claseDiv = "end")  /*Impar - Elementos Lado Izquierdo*/

    elemento =
      '<div class="col d-flex justify-content-' +
      claseDiv +
      ' p-1"><button type="button" class="btn btn-success" id=' +
      elementoFase.ID +
      '><div class="d-flex justify-content-between align-items-center"><div id="text' +
      elementoFase.ID +
      '">' +
      elementoFase.ID +
      '</div><img id="ganador' +
      elementoFase.ID +
      '" src="./img/star-fill.svg" alt="ganador""/><img id="img' +
      elementoFase.ID +
      '" src="" alt=""/></div></button></div>';

    (numero % 2  == 0) ? 
    elementoDer.innerHTML += elemento     /*Par - Elementos Lado Derecha*/
    : elementoIzq.innerHTML += elemento;  /*Impar - Elementos Lado Izquierdo*/

    numero++;
  })
  document.getElementById(contenedor+"Izq").appendChild(elementoIzq);
  document.getElementById(contenedor+"Der").appendChild(elementoDer);
}

/*Visualizacion de plantilla Fase de Grupos en MOD (Octavos, Cuartos, etc.)*/
maquetaFaseGrupo("ContenedorOctavos",Octavos)
maquetaFaseGrupo("ContenedorCuartos",Cuartos)
maquetaFaseGrupo("ContenedorSemi",Semi)
maquetaFaseGrupo("ContenedorTercer",Tercer)
maquetaFaseGrupo("ContenedorFinal",Final)

/*Funcion que oculta / muestra navbar*/
let prevScrollPos = window.pageYOffset

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  /*Usando operador Ternario - multiples acciones*/
  (prevScrollPos > currentScrollPos) ? 
  document.getElementById("navbarContenedor").style.top = "-60px" 
  :
    (document.getElementById("navbarContenedor").style.top = "0",
      document.getElementById("navbarContenedor").style.opacity = "0.9"
    )
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