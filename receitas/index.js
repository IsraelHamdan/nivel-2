const receitas = [
  {
    id: 1,
    titulo: "Arroz com Couve-Flor",
    ingredientes: {
      arroz: ["1 xícara de arroz", "2 xícaras de água", "Sal a gosto"],
      couve_flor: [
        "1 couve-flor média, cortada em floretes",
        "2 colheres de sopa de azeite de oliva",
        "1 dente de alho picado",
        "Sal e pimenta a gosto",
      ],
    },
    modo_de_preparo: [
      "Em uma panela, leve 2 xícaras de água para ferver. Adicione o arroz, tempere com sal a gosto e cozinhe até que o arroz esteja macio e a água tenha sido absorvida, cerca de 15-20 minutos. Reserve.",
      "Em outra panela, aqueça o azeite de oliva e refogue o alho picado até dourar levemente. Adicione os floretes de couve-flor, tempere com sal e pimenta a gosto, e cozinhe até que fiquem macios e dourados.",
      "Misture o arroz cozido com a couve-flor refogada e sirva quente. Bom apetite!",
    ],
  },
  {
    id: 2,
    titulo: "Bolo de Café com Chocolate",
    parte1: {
      titulo: "Bolo",
      ingredientes: [
        "2 xícaras de farinha de trigo",
        "1 xícara de açúcar",
        "1/2 xícara de cacau em pó",
        "1 colher de sopa de café solúvel",
        "1 colher de chá de bicarbonato de sódio",
        "1 colher de chá de fermento em pó",
        "1/2 colher de chá de sal",
        "1 xícara de leite",
        "1/2 xícara de óleo vegetal",
        "2 ovos",
        "1 colher de chá de extrato de baunilha",
        "1 xícara de água fervente",
      ],
      modo_de_preparo: [
        "Pré-aqueça o forno a 180°C. Unte e enfarinhe uma forma redonda de 22 cm de diâmetro.",
        "Em uma tigela grande, misture a farinha de trigo, o açúcar, o cacau em pó, o café solúvel, o bicarbonato de sódio, o fermento em pó e o sal.",
        "Adicione o leite, o óleo vegetal, os ovos e o extrato de baunilha à mistura de ingredientes secos. Misture bem até obter uma massa homogênea.",
        "Misture a água fervente na massa até que esteja completamente incorporada. A massa será líquida, mas é normal.",
        "Despeje a massa na forma preparada e asse no forno pré-aquecido por 30-35 minutos, ou até que um palito inserido no centro do bolo saia limpo.",
      ],
    },
    parte2: {
      titulo: "Cobertura",
      ingredientes: [
        "1/2 xícara de açúcar de confeiteiro",
        "2 colheres de sopa de cacau em pó",
        "1 colher de sopa de café forte",
      ],
      modo_de_preparo: [
        "Enquanto o bolo esfria, prepare a cobertura. Em uma tigela pequena, misture o açúcar de confeiteiro, o cacau em pó e o café forte até obter uma cobertura lisa.",
        "Quando o bolo estiver completamente frio, cubra-o com a cobertura de chocolate e sirva. Delicie-se!",
      ],
    },
  },
  {
    id: 3,
    titulo: "Strogonoff Russo",
    parte1: {
      titulo: "Carne",
      ingredientes: [
        "500g de carne de vaca (filé ou outra de sua escolha), cortada em tiras finas",
        "1 cebola grande, picada",
        "2 dentes de alho picados",
        "2 colheres de sopa de manteiga",
        "2 colheres de sopa de óleo vegetal",
        "Sal e pimenta a gosto",
      ],
      modo_de_preparo: [
        "Em uma frigideira grande, aqueça o óleo e a manteiga em fogo médio. Adicione a cebola e o alho picados e refogue até que fiquem dourados.",
        "Adicione a carne cortada em tiras à frigideira e cozinhe até que esteja dourada por todos os lados. Tempere com sal e pimenta a gosto.",
        "Polvilhe a farinha de trigo sobre a carne e mexa bem para incorporar. Isso ajudará a engrossar o molho.",
        "Despeje o conhaque na frigideira (se estiver usando) e flambe para evaporar o álcool.",
      ],
    },
    parte2: {
      titulo: "Molho",
      ingredientes: [
        "1 xícara de creme de leite",
        "1 xícara de caldo de carne",
        "2 colheres de sopa de mostarda",
        "2 colheres de sopa de ketchup",
        "1 colher de sopa de conhaque (opcional)",
        "Picles em conserva, cortados em rodelas (opcional)",
        "Arroz cozido para acompanhar",
      ],
      modo_de_preparo: [
        "Adicione o creme de leite, o caldo de carne, a mostarda e o ketchup à mistura. Cozinhe por alguns minutos até que o molho esteja aquecido e a carne esteja bem cozida.",
        "Se desejar, adicione picles em conserva cortados em rodelas ao strogonoff para um toque de acidez.",
        "Sirva o strogonoff russo quente, acompanhado de arroz cozido. Bom apetite!",
      ],
    },
  },
];

const getList = (receitas) => {
  getItems = document.getElementById("receitas");
  console.log("as receitas estão sendo carregadas para dentro da função");
  const receitasHtml = receitasHtml(receitas);
  getItems.innerHTML = receitasHtml;
};

const modoDePreparoHtml = (ingredientes) => {
  return Object.keys(ingredientes)
    .map((categoria) => {
      const categoriaIngredientes = ingredientes[categoria]
        .map((ingrediente) => {
          return `<li>${ingrediente}</li>`;
        })
        .join("");
      return `
          <h3>${categoria}</h3>
          <ul>${categoriaIngredientes}</ul>
        `;
    })
    .join("");
};

const receitasHtml = (receitas) => {
  return receitas
    .map((receita) => {
      const tituloDaReceita = receita.titulo;
      const ingredientes = receita.ingredientes;

      const ingredientesHTML = modoDePreparoHtml(ingredientes);
      const modoDePreparo = receita.modo_de_preparo
        .map((passo) => {
          return `<li>${passo}</li>`;
        })
        .join("");
      console.log("As receitas são carregadas na página");
      return `
      <div class=" card col-4 receita">
        <h1 class="receita-titulo">${tituloDaReceita}</h1>
        <div class = "receita-ingredientes">
          <h3 class = "receita-ingredientes-title">Ingredientes</h3>
          ${ingredientesHTML}
        </div>
        <h3 class="receita-modo-titulo">Modo de preparo:</h3>
        <ol class="receita-modo-list">${modoDePreparo}</ol>
      </div>
    `;
    })
    .join("");
};
getList(receitas);
