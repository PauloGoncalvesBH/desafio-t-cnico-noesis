const helper = require('protractor-helper');

const pesquisaInput = $('#campo_pesquisa');
const pesquisarButton = $('#btn_pesquisar');
const estadoInput = element(by.cssContainingText('div', 'Estado'));
const cidadeInput = element(by.cssContainingText('div', 'Cidade'));
const continuarButton = element(by.cssContainingText('button', 'Continuar'));
const resultadoEnderecoDoMedico = $('#txt_endereco');

const acessar = () => {
  browser.get('guia-medico');
};

const acessarPaginaDeNumero = numeroDaPagina => {
  const pagina = element(by.cssContainingText('[href="#lista_por"]', numeroDaPagina));
  helper.click(pagina);
};

const pesquisarPorMedico = ({medicoEspecialidade, estadoDoMedico, cidadeDoMedico, unimedDePreferencia}) => {
  helper.waitForElementVisibility(pesquisaInput);
  helper.fillFieldWithText(pesquisaInput, medicoEspecialidade);
  helper.click(pesquisarButton);
  helper.fillFieldWithText(estadoInput, estadoDoMedico);
  helper.fillFieldWithText(cidadeInput, cidadeDoMedico);
  const unimedRadio = element(by.cssContainingText('div.margin-left', unimedDePreferencia));
  helper.click(unimedRadio);
  helper.click(continuarButton);
};

module.exports = {
  acessar,
  acessarPaginaDeNumero,
  pesquisarPorMedico,
  resultadoEnderecoDoMedico
};
