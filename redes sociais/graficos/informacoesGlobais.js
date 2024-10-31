const url="https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarInformaçõesGlobais() {
    const resposta = await fetch (url);
    let dados = await resposta.json();
    console.log(dados);
    const paragrafo = document.createElement("p");
    paragrafo.classList.add("graficos-container__texto");
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo} </span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas} </span> estão conectadas a alguma rede social e passam dm média <span>${dados.tempo_medio}</span> horas conectadas`
    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}
visualizarInformaçõesGlobais();