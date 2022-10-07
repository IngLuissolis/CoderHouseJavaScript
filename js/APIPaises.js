const grupoTodos = []

const API_PAISES_fetch = () => {
  fetch("/BBDD/paises.json").then((response) => {
    response.json()
      .then((data) => {
        data.forEach((pais) => {
          grupoTodos.push(pais);
        });
        console.log("Respuesta base de datos Local");
        /*Visualizacion de plantilla Grupos en MOD luego de respuesta base de datos*/
        maquetarGrupoDOM();
        EscucharClickGrupo();
      })
      .catch((err) => {
        console.error("Error ", err);
      });
  });
};

API_PAISES_fetch()

/*ASINC - AWAIT */
// const API_PAISES = async () => {
//   const respuesta = await fetch("/BBDD/paises.json");
//   const data = await respuesta.json();
//   data.forEach((pais) => {
//     grupoTodos.push(pais);
//   });
//   /*Visualizacion de plantilla Grupos en MOD luego de respuesta base de datos*/
//   maquetarGrupoDOM()
//   EscucharClickGrupo()
// };

// API_PAISES()