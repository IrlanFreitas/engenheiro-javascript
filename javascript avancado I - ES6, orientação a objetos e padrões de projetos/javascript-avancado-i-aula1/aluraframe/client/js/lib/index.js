document
  .querySelector("#btnIncluir")
  .addEventListener("click", function(event) {
    event.preventDefault();

    let $form = document.querySelector("form");

    let negociacao = obterDados($form);

    adicionaDados(negociacao);

    $form.reset();

  });

function obterDados($form) {

  return {
    data: $form.data.value,
    quantidade: $form.quantidade.value,
    valor: $form.valor.value
  };
}

function adicionaDados(negociacao) {
  let $tabela = document.querySelector("tbody");

  let $linha = document.createElement("tr");
  let $colunaData = document.createElement("td");
  let $colunaQuantidade = document.createElement("td");
  let $colunaValor = document.createElement("td");
  let $colunaVolume = document.createElement("td");

  $colunaData.textContent = negociacao.data;
  $colunaQuantidade.textContent = negociacao.quantidade;
  $colunaValor.textContent = negociacao.valor;
  $colunaVolume.textContent = negociacao.quantidade * negociacao.valor;

  $linha.appendChild($colunaData);
  $linha.appendChild($colunaQuantidade);
  $linha.appendChild($colunaValor);
  $linha.appendChild($colunaVolume);

  $tabela.appendChild($linha);
}
