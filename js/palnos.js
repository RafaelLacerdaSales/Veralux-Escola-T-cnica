const URLPlanos = new URLSearchParams(window.location.search);
const nivel = URLPlanos.get("nivel");
let cadaPalno = document.querySelectorAll(".nomeDoPlano");
let cursoTxt = document.querySelector(".cursoTxt");
let textoDados = document.querySelector(".textoDados");

if (nivel == "fundamental") {
  cadaPalno.forEach((elementos) => {
    elementos.innerHTML = " Ensino Fundamental";
    textoDados.style.color = "white";
    textoDados.style.textShadow = "0px  0px 10px black";

    curso.style.display = "none";
    cursoTxt.style.display = "none";

    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <div style="
        position: fixed;
        top: 0; left: 0;
        width: 101%; height: 101%;
        background: url('/img/fundamental.png') center/cover;
        filter: blur(3px);
        z-index: -1;">
      </div>
    `
    );
  });
} else if (nivel == "medio") {
  cadaPalno.forEach((elementos) => {
    elementos.innerHTML = " Ensino Médio";
    textoDados.style.color = "white";
    textoDados.style.textShadow = "0px  0px 10px black";

    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <div style="
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: url('/img/medio.png') center/cover;
        filter: blur(3px);
        z-index: -1;">
      </div>
    `
    );
  });
} else if (nivel == "infantil") {
  cadaPalno.forEach((elementos) => {
    textoDados.style.color = "white";
    textoDados.style.textShadow = "0px  0px 10px black";

    elementos.innerHTML = "Ensino Infantil";
    curso.style.display = "none";
    cursoTxt.style.display = "none";

    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <div style="
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: url('/img/infantil.png') center/cover;
        filter: blur(4px);
        z-index: -1;">
      </div>
    `
    );
  });
}
