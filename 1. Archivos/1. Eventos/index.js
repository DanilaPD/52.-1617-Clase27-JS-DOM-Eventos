const divHora1 = document.getElementById("horario1");
const divHora2 = document.getElementById("horario2");

const divOver = document.getElementById("over");

// La forma más fácil:
const hora1 = () => (divHora1.innerHTML = Date());

// Ahora a darle formato a la fecha: https://stackoverflow.com/questions/2388115/get-locale-short-date-format-using-javascript

const dOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const hora2 = () => {
  const d = new Date();
  console.log(d);
  divHora2.innerHTML = d.toLocaleDateString("es", dOptions);
};

const over = () => {
  divOver.innerHTML = "Eh, qué pasás por acá";
  divOver.style.color = "red";
};

// https://www.w3schools.com/jsref/met_win_settimeout.asp

const chau = () => {
  divOver.innerHTML = "Eso, andate";
  divOver.style.color = "black";
  // Ahora quiero que vuelva a la normalidad a los 3 segundos:
  setTimeout(() => {
    divOver.innerHTML = "No pases por arriba mío";
    divOver.style.color = "black";
  }, 3000);
};
