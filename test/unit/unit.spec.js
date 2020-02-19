
const descontoASerConcedido = require('./support/descontoASerConcedido')

describe("DESAFIO 3 - UNIT", () => {
  it("Validar quanto de desconto pode conceder ao cliente", () => {
    const carrinho = [
      {
          "idFilme": 1,
          "nomeFilme": "Senhor dos Anéis",
          "genero": "Fantasia",
          "valor": 45
      },
      {
          "idFilme": 2,
          "nomeFilme": "As Branquelas",
          "genero": "Comédia",
          "valor": 55
      },
      {
          "idFilme": 3,
          "nomeFilme": "Velozes e Furiosos 7",
          "genero": "Ação",
          "valor": 100
      },
      {
          "idFilme": 4,
          "nomeFilme": "Velozes e Furiosos 6",
          "genero": "Ação",
          "valor": 55
      },
      {
          "idFilme": 5,
          "nomeFilme": "The Scapegoat",
          "genero": "Drama",
          "valor": 100
      },
      {
          "idFilme": 6,
          "nomeFilme": "Meu Malvado Favorito",
          "genero": "Animação",
          "valor": 200
      },
    ]
    const resultado = descontoASerConcedido(carrinho);
    const esperado = 35;
    expect(resultado).toEqual(esperado);
  })
})