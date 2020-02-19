const guiaMedico = require('../page_objects/guiaMedico');

describe('DESAFIO 1 - E2E', () => {

  beforeEach(() => guiaMedico.acessar())
  
  const otorrinoDoRioDeJaneiro = {
    medicoEspecialidade: "Otorrinolaringologia",
    estadoDoMedico: "Rio de Janeiro",
    cidadeDoMedico: "Rio de Janeiro",
    unimedDePreferencia: "UNIMED RIO"
  }

  it(`\nDado que estou no Guia Medico
Quando informo a especialidade "Otorrinolaringologia"
E procuro pelo estado "Rio de Janeiro"
E pela cidade "Rio de Janeiro"
E pela unidade "UNIMED RIO"
Então visualizo apenas os médicos da especialidade "otorrino" e cidade "Rio de Janeiro"`, () => {
    guiaMedico.pesquisarPorMedico(otorrinoDoRioDeJaneiro);
    
    expect(guiaMedico.resultadoEnderecoDoMedico.getText()).toContain(otorrinoDoRioDeJaneiro.cidadeDoMedico);
  });

  it(`\nDado que estou no Guia Medico
Quando informo a especialidade "Otorrinolaringologia"
E procuro pelo estado "Rio de Janeiro"
E pela cidade "Rio de Janeiro"
E pela unidade "UNIMED RIO"
Então as 3 primeiras páginas não apresentam resultado de "São Paulo"`, () => {
    guiaMedico.pesquisarPorMedico(otorrinoDoRioDeJaneiro);
    
    expect(guiaMedico.resultadoEnderecoDoMedico.getText()).not.toContain("São Paulo");
    guiaMedico.acessarPaginaDeNumero(2);
    expect(guiaMedico.resultadoEnderecoDoMedico.getText()).not.toContain("São Paulo");
    guiaMedico.acessarPaginaDeNumero(3);
    expect(guiaMedico.resultadoEnderecoDoMedico.getText()).not.toContain("São Paulo");
  });
 
});
