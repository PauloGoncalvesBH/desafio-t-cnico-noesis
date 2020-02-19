module.exports = carrinho => {
  let total = 0;
  let desconto = 0;

  for (indexFilme = 0; indexFilme < carrinho.length; indexFilme++) {
    total += carrinho[indexFilme].valor;
    if (carrinho[indexFilme].genero === "Ação")
      desconto = 5
  }

  if (total > 100 && total <= 200)
    desconto += 10
  else if (total > 200 && total <= 300)
    desconto += 20
  else if (total > 300 && total <= 400)
    desconto += 25
  else if (total > 400)
    desconto += 30

  return desconto
}