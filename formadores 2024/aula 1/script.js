const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")


const perguntas = [
{
    enunciado: "VOCÊ SE SENTE SOBRECARREGADO COM O SEU TRABALHO?",
    alternativas: [
        "SIM, ME SINTO SOBRECARREGADO (MENTALMENTE, FISICAMENT)E OU EMOCIONALMENTE",
        "NÃO, ESTOU EM EQUILÍBRIO EM TODAS AS ÁREAS DA MINHA VIDA"
    ]
},
{
    enunciado:"O QUE LEVA A SOBRECARGA, NA SUA OPINIÃO?",
    alternativas: [
        "O STRESS CONSTANTE E PRESSÃO NAS COBRANÇAS POR RESULTADOS NO DIA A DIA",
        "A ANSIEDADE EMOCIONAL PELO O INÍCIO DA SEGUNDA-FEIRA"
    ]
}
];

let atual = 0
let perguntaAtual;

function mostraPergunta (){

perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntas [atual].enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();