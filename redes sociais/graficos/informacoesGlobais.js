const url="'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'"

async function visualizarInformaçõesGlobais() {
    const resposta = await fetch (url);
    let dados = await resposta.json();
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${total_pessoas_conectadas}estão conectadas a alguma rede social e passam dm média ${dados.tempo_medio} horas conectadas`
    console.log(paragrafo)
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformaçõesGlobais();