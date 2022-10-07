const btnLimpiarGruposEnAdelante = document.querySelector(".btnLimpiarGruposEnAdelante")
const btnLimpiarCuartosAdelante = document.querySelector(".btnLimpiarCuartosAdelante")
const btnLimpiarSemiAdelante = document.querySelector(".btnLimpiarSemiAdelante")
const btnLimpiarFinal = document.querySelector(".btnLimpiarFinal")

/*Click Boton Limpiar Seccion Grupos en adelante*/
btnLimpiarGruposEnAdelante.addEventListener("click", () => {
  limpiarFase(Campeon);
  limpiarFase(Final);
  limpiarFase(Tercer);
  limpiarFase(Semi);
  limpiarFase(Cuartos);
  limpiarFase(Octavos);
  grupoTodos.forEach((nombreGrupo) => {
    nombreGrupo.paises.forEach((paisGrupo) => {
      document.getElementById("posicionGrupo" + paisGrupo.ID).style.display =
        "none";
    });
  });
});

/*Click Boton Limpiar Seccion Cuartos en adelante */
btnLimpiarCuartosAdelante.addEventListener("click", () => {
  limpiarFase(Campeon);
  limpiarFase(Final);
  limpiarFase(Tercer);
  limpiarFase(Semi);
  limpiarFase(Cuartos);
  limpiarGanadorFaseAnterior(Octavos);
});

/*Click Boton Limpiar SemiFinales en adelante */
btnLimpiarSemiAdelante.addEventListener("click", () => {
  limpiarFase(Campeon);
  limpiarFase(Final);
  limpiarFase(Tercer);
  limpiarFase(Semi);
  limpiarGanadorFaseAnterior(Cuartos);
});

/*Click Boton Limpiar Final */
btnLimpiarFinal.addEventListener("click", () => {
  limpiarFase(Campeon);
  limpiarFase(Final);
  limpiarFase(Tercer);
  limpiarGanadorFaseAnterior(Semi);
});

/*Funcion que limpia valores en Objetos y elementos html de Fase*/
const limpiarFase = (faseLimpiar) => {
  /*Recorre Array */
  faseLimpiar.forEach((fase) => {
    fase.borrarElementoFase()
    /* */
    document.getElementById("img" + fase.ID).style.display = "none";
    document.getElementById("img" + fase.ID).style.filter = "grayscale(0%)";
    document.getElementById("ganador" + fase.ID).style.display = "none";
    document.getElementById("text" + fase.ID).innerHTML = fase.ID;

  });
};

/*Funcion que limpia ganador fase anterior */
const limpiarGanadorFaseAnterior = (faseAnterior) => {
  /*Recorre Array */
  faseAnterior.forEach((fase) => {
    document.getElementById("ganador" + fase.ID).style.display = "none";
    document.getElementById("img" + fase.ID).style.filter = "grayscale(0%)";
  });
};

/*Popover btnLimpiarGruposEnAdelante */
$(function () {
  $('[data-toggle="btnLimpiarGrupoHover"]').popover({
    template:
      '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popoverHeader">Boton Limpiar Grupos</h3><div class="popoverBody"></div></div>',
    trigger: "hover",
    title: "1"
  });
});