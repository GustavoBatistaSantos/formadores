const url="'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'"

async function visualizarInformaçõesGlobais() {
    const resposta = await fetch (url);
    let dados = await resposta.json;
    console.log(dados);
}
visualizarInformaçõesGlobais();