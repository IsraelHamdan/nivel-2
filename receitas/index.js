"use strict";

const getReceitas = () => {
  fetch("./receitas.json")
    .then((res) => res.json())
    .then((data) => {
      const postReceitasHtml = data.map(postReceitas).join("");
      const getItems = document.getElementById("receitas");

      getItems.innerHTML = postReceitasHtml;
    });
};

const postReceitas = (receita) => {
  const { title, ingredientes, imagem, modo_de_preparo } = receita;

  const ingredientesHtml = ingredientes
    .map(
      (ingrediente) =>
        `<li class="receitas-body_ingredientes-items">${ingrediente}</li>`
    )
    .join("");

  const modoHtml = modo_de_preparo
    .map((passo) => `<li class = "receita-passos">${passo}</li>`)
    .join("");

  return `
    <section class="card receita col-3 aling-center">
      <div class="receita-header">
        <h1 class="receita-header_titulo">${title}</>
        <img class="receita-header_img" src=${imagem} alt=${title}/>
      </div>
      <div class="receita-body">
        <h3 class="receitas-body_ingredientes-title">Ingredientes</h3>
        <ul class="receitas-body_ingredientes-list">${ingredientesHtml}</ul>
      </div>
      <div class="receitas-modos">
        <h3 class="receitas-modos_titulo">Modo De Preparo</h3>
        <ol class="receitas-modos_list">${modoHtml}</ol>
      </div>
    </section>
  `;
};

getReceitas();
