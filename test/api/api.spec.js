const frisby = require("frisby")

describe("DESAFIO 2 - API", () => {
  const endpoint = "http://www.omdbapi.com/"
  const idDoFilme = "tt1285016"
  const apiKey = "52ec71bf"

  it("Validar título, ano e idioma do filme", () => {
    return frisby
      .get(`${endpoint}?i=${idDoFilme}&apikey=${apiKey}`)
      .expect("status", 200)
      .expect("json", {
        Title: "The Social Network",
        Year: "2010",
        Language: "English, French"
      })
  })

  it("Validar resposta de filme inválido", () => {
    return frisby
      .get(`${endpoint}?i=${idDoFilme}${idDoFilme}&apikey=${apiKey}`)
      .expect("jsonTypesStrict", {
        "Response": "False",
        "Error": "Incorrect IMDb ID."
      })
  })
})