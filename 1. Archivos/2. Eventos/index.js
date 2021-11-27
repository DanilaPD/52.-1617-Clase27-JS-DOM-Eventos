const menu = document.getElementById("menu");
const span = document.getElementById("span");

// El "alert" corta la carga hasta que lo aceptemos:
//* const bienvenido = () => alert("¡Te ganaste 10 000 pesos!")

// Podemos crear hijos:
const bienvenido = () => {
  // Los creo:
  let title = document.createElement("h1");
  let titleText = document.createTextNode(
    "Bienvenido, te ganaste 10 000 pesos."
  );
  // Los aplico al documento. Si no hago esto, no los inserta:
  document.body.appendChild(title);
  title.appendChild(titleText);
  // https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction
};

const showMenu = () => {
  // Para ver si tiene o no las "classlist":
  console.log(menu.classList);
  // "Contains" es: ¿lo tiene?
  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
    span.innerHTML = "cerrar";
  } else {
    menu.classList.add("hide");
    span.innerHTML = "abrir";
  }
};
