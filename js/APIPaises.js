const grupoTodos = []

// const API_PAISES_fetch = () => {
//   try {
//     fetch('/BBDD/paises.json').then((response) => {
//       response.json().then((pais) => {
//         grupoTodos.push(...pais);
//         console.log("Respuesta OK base de datos Local");
//         /*Visualizacion de plantilla Grupos en MOD luego de respuesta base de datos*/
//         maquetarGrupoDOM();
//         EscucharClickGrupo();
//       })
//   })
//   } catch (error) {
//     console.error("Error: ", error);
//   }
// }

// API_PAISES_fetch()

/*ASINC - AWAIT */
const API_PAISES = async () => {
  try {
    const respuesta = await fetch("./BBDD/paises.json");
    const pais = await respuesta.json();
    grupoTodos.push(...pais);
    console.log("Respuesta base de datos Local");
    /*Visualizacion de plantilla Grupos en MOD luego de respuesta base de datos*/
    maquetarGrupoDOM();
    EscucharClickGrupo();
  } catch (error) {
    console.error("Error: ", error);
  }
  
};

API_PAISES()