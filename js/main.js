const medio = document.getElementById("Medio");
const fundamental = document.getElementById("Fundamental");
const infantil = document.getElementById("infantil");

if (fundamental) {
  fundamental.addEventListener("click", () => {
    window.location.href = "/page/matricula.html?nivel=fundamental";
  });
}

if (medio) {
  medio.addEventListener("click", () => {
    window.location.href = "/page/matricula.html?nivel=medio";
  });
}

if (infantil) {
  infantil.addEventListener("click", () => {
    window.location.href = "/page/matricula.html?nivel=infantil";
  });
}
