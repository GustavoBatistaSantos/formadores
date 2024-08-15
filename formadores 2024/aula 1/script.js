const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")


const perguntas = [
{
    enunciado: "VOCÊ SE SENTE SOBRECARREGADO COM O SEU TRABALHO?",
    alternativas: [
        {
        texto: "SIM, ME SINTO SOBRECARREGADO (MENTALMENTE, FISICAMENT)E OU EMOCIONALMENTE",
        afirmação: "Afirmação 1"
        },
        {
        texto: "NÃO, ESTOU EM EQUILÍBRIO EM TODAS AS ÁREAS DA MINHA VIDA",
        afirmação: "afirmação 2"
        }
    ]
},
{
    enunciado:"O QUE LEVA A SOBRECARGA, NA SUA OPINIÃO?",
    alternativas: [
        {
        texto: "O STRESS CONSTANTE E PRESSÃO NAS COBRANÇAS POR RESULTADOS NO DIA A DIA",
        afirmação: "afimação 1"
        },
        {
        texto:"A ANSIEDADE EMOCIONAL PELO O INÍCIO DA SEGUNDA-FEIRA",
        afirmação: "afirmação 2"
        }
    ]
}
];

let atual = 0;
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
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function (){
            atual ++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();