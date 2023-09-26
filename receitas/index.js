fetch("./receitas.json")
  .then((response) => response.json())
  .then((data) => {
    const receitas = data;
    getList(receitas);
  });

const getList = (receitas) => {
  const getItems = document.getElementById("receitas");
  const receitasHtml = Object.values(receitas)
    .map((receita) => {
      const receitaTitulo = receita.titulo;
      const receitaIngredientes = receita.ingredientes;
      const receitaImagem = receita.imagens || [];
      console.log(
        "🚀 ~ file: index.js:15 ~ .map ~ receitaImagem:",
        receitaImagem
      );

      const ingredientesHtml = receitaIngredientes
        .map((ingrediente) => {
          return `<li class="receita-ingrediente">${ingrediente}</li>`;
        })
        .join("");

      const modoDePreparo = receita.modo_de_preparo
        .map((passo) => {
          return `<li class="receita-passos">${passo}</li>`;
        })
        .join("join");

      return `
      <div class="card col-4 receita">
        <h1 class="receita-titulo">${receitaTitulo}</h1>
        <img src=${receitaImagem} class="receita-imagem" alt=${receitaTitulo}/>
        <div class="receita-ingredientes">
          <h3 class="receita-ingredientes_title>Modo de preparo</h3>
          <ol class="receita-modo-list>${modoDePreparo}</ol>
        </div>
      </div>
    `;
    })
    .join("");

  getItems.innerHTML = receitasHtml;
};

getList(receitas);
