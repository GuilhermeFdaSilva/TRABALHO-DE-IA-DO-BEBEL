const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Oque vocẽ acha da ultilização de robos para realizar tarefas ?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Não tem motivos para ter medo da evolução tecnologica "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Sim! Isso pode ajudar muito a realizar trabalhos de maneira mais facil,"
            }
        ]
    },
    {
        enunciado: "Os pequenos Robos já estão presente no nosso dia a dia, oque você pensa sobre isso ?",
        alternativas: [
            {
                texto: "é maravilhoso o fato de ter mais horas livres, uma vez que eles realizam atividades para nós,",
                afirmacao: "Os robos estão facilitando nossa vida"
            },
            {
                texto: "Isso é horrivel, Os robos estão tirando o nosso trabalho",
                afirmacao: "Isso é algo natural, não tem porque ter medo, isso acontece desde o inicio da humanidade."
            }
        ]
    },
    {
        enunciado: "Os robos exploradores são usados para desbravar planetas em busca de respostas e recursos em outros planetas",
        alternativas: [
            {
                texto: "Isso é muito mais víavel, pois mandar humanos para o espaço alem de caro é perigoso",
                afirmacao: "isso torna os trabalhos de risco mais apropriados para eles,"
            },
            {
                texto: "Enviar humanos para exploração espacial é melhor, pois humanos não emferrujam nem acabam a bateria",
                afirmacao: "Você precisa estudar um pouco mais sobre isso, você esta um pouco equivocado (a),"
            }
        ]
    },
    {
        enunciado: "Como os robos humanoides podem auxiliar pessoas com deficiencia ?",
        alternativas: [
            {
                texto: "Eles podem realizar tarefas que pessoas debilitadas nao conseguem",
                afirmacao: "O Optimus Gen 2 da Tesla, tem mãos semelhantes as nossas, com dedos e sensores tateis, oque permite realizar tarefas de maneira precisa, desde quebrar ovos, ate levar objetos as pessoas "
            },
            {
                texto: "Robos são perigosos, não devem se misturar com humanos",
                afirmacao: "A tecnologia não é a vilã, é nossa aliada para realizar processos que algumas pessoas não conseguem"
            }
        ]
    },
    {
        enunciado: "O Unitree robot dog, está explorando e cuidano de lugares com radiação, que é inacessível para humanos",
        alternativas: [
            {
                texto: "Isso é maravilhoso, é muito mais seguro",
                afirmacao: "Exato, vocẽ é uma pessoa que entende de tecnologia, os filmes de ficção que mostram a revolução das maquinas é uma bobagem, os robos são nossos aliados, e devem ser criados e usados para nos beneficiar em areas que somos defasados, e tambem para aumentar a segurança e precisão em algum trabalhos"
            },
            {
                texto: "Assustador",
                afirmacao: " Você precisa estudar mais sobre tecnologia. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
