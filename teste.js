const getList = (receitas) => {
  const getItems = document.getElementById("receitas");

  // Mapeie as receitas para criar o HTML
  const receitasHtml = receitas
    .map((receita) => {
      const titulo = receita.titulo;
      const ingredientes = receita.ingredientes;

      // Mapeie os ingredientes em HTML
      const ingredientesHtml = Object.keys(ingredientes)
        .map((categoria) => {
          const categoriaIngredientes = ingredientes[categoria]
            .map((ingrediente) => {
              return `<li>${ingrediente}</li>`;
            })
            .join("");

          return `
        <h3>${categoria}:</h3>
        <ul>${categoriaIngredientes}</ul>
      `;
        })
        .join("");

      const modoDePreparo = receita.modo_de_preparo
        .map((passo) => {
          return `<li>${passo}</li>`;
        })
        .join("");

      return `
      <div class="receita">
        <h1>${titulo}</h1>
        ${ingredientesHtml}
        <h3>Modo de Preparo:</h3>
        <ol>${modoDePreparo}</ol>
      </div>
    `;
    })
    .join("");

  // Defina o HTML resultante na lista de receitas
  getItems.innerHTML = receitasHtml;
  console.log(receitas);
};
document.addEventListener("DOMContentLoaded", () => {
  getList(receitas);
});
