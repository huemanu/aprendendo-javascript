
const pontuacao = JSON.parse(localStorage.getItem('pontuacao')) || {
    qtdJogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0
}

let escolhaComputador, escolhaPlayer;
let resultado = 'Ainda não houve nenhum jogo';

function iniciar() {
    if (pontuacao.qtdJogos > 0) {
        mostrarHistoricoPontuacao();
    }
    esconderEscolhaDuelo();
}

function playerEscolherPedra() {
    escolhaPlayer = 'pedra';
    realizarJogo();
}

function playerEscolherPapel() {
    escolhaPlayer = 'papel';
    realizarJogo();
}

function playerEscolherTesoura() {
    escolhaPlayer = 'tesoura';
    realizarJogo();
}


function realizarJogo() {

    if (escolhaPlayer !== 'Ainda não houve nenhum jogo') {
        escolhaComputador = escolherParaComputador();

        if (escolhaPlayer === escolhaComputador) {
            resultado = 'empate';
            pontuacao.empates++;
        }
        else if (escolhaPlayer === 'pedra'){
            if (escolhaComputador === 'papel'){
                resultado = 'derrota';
                pontuacao.derrotas++;
            }
            else if (escolhaComputador === 'tesoura'){
                resultado = 'vitoria';
                pontuacao.vitorias++;
            }
        }
        else if (escolhaPlayer === 'papel') {
            if (escolhaComputador === 'pedra'){
                resultado = 'vitoria';
                pontuacao.vitorias++;
            }
            else if (escolhaComputador === 'tesoura'){
                resultado = 'derrota';
                pontuacao.derrotas++;
            }
        }
        else if (escolhaPlayer === 'tesoura') {
            if (escolhaComputador === 'pedra'){
                resultado = 'derrota';
                pontuacao.derrotas++;
            }
            else if (escolhaComputador === 'papel'){
                resultado = 'vitoria';
                pontuacao.vitorias++;
            }
        }
        
        pontuacao.qtdJogos++;

        localStorage.setItem('pontuacao', JSON.stringify(pontuacao));

        // mostrar informações
        if (pontuacao.qtdJogos > 0) {
            mostrarEscolhaDuelo();
            mostrarHistoricoPontuacao();
        }
        else { 
            esconderEscolhaDuelo();
            esconderHistoricoPontuacao();
        }

        return resultado;
    }
    
}

function esconderEscolhaDuelo(){
    const displayEscolhaDuelo = document.getElementById('js-display-escolha-duelo');
    displayEscolhaDuelo.style.display = 'none';

    if (pontuacao.qtdJogos <= 0) {
        const displayAviso = document.getElementById('js-display-aviso');
        displayAviso.style.display = 'block';
    }
    
    const rootStyle = document.querySelector(':root').style;
    rootStyle.setProperty('--cor-duelo', 'lightblue');
}

function mostrarEscolhaDuelo(){

    const displayEscolhaDuelo = document.getElementById('js-display-escolha-duelo');
    
    displayEscolhaDuelo.style.display = 'flex';
    
    const displayAviso = document.getElementById('js-display-aviso');
    displayAviso.style.display = 'none';

    const displayUltimoResultado = document.getElementById('js-display-ultimo-resultado');
    const displayEscolhaPlayerIcone = document.getElementById('js-escolha-player-icone');
    const displayEscolhaComputadorIcone = document.getElementById('js-escolha-computador-icone');

    displayEscolhaPlayerIcone.innerHTML = String(toEmoji(escolhaPlayer));
    displayEscolhaComputadorIcone.innerHTML = String(toEmoji(escolhaComputador));

    const root = document.querySelector(":root");
    const rootConsultaEstilo = window.getComputedStyle(root);

    // mostrando o útlimo resultado
    switch (resultado) {
        case 'derrota':
            displayUltimoResultado.innerHTML = '<p> DERROTA! </p>';
            root.style.setProperty('--cor-duelo', rootConsultaEstilo.getPropertyValue('--cor-duelo-derrota'));
            break;
        case 'vitoria':
            displayUltimoResultado.innerHTML = '<p> VITÓRIA! </p>';
            root.style.setProperty('--cor-duelo', rootConsultaEstilo.getPropertyValue('--cor-duelo-vitoria'));
            break;
        case 'empate':
            displayUltimoResultado.innerHTML = '<p> EMPATE! </p>';
            root.style.setProperty('--cor-duelo', rootConsultaEstilo.getPropertyValue('--cor-duelo-empate'));
            break;
    }
}

function esconderHistoricoPontuacao() {
    const displayHistorico = document.getElementById('js-display-historico');
    displayHistorico.style.display = 'none';
}

function mostrarHistoricoPontuacao(){
    const displayHistorico = document.getElementById('js-display-historico');
    displayHistorico.style.display = 'block';
    
    if (pontuacao.qtdJogos >= 0) { // se já aconteceu algum jogo;

        const displayHistorico = document.getElementById('js-display-historico');
        displayHistorico.innerHTML = `
Quantidade de Jogos: ${pontuacao.qtdJogos} <br>
Vitórias: ${pontuacao.vitorias}, Empates: ${pontuacao.empates}, Derrotas: ${pontuacao.derrotas}`
    }
}

function escolherParaComputador(){
    numeroEscolhaComputador = getRandomInt(9);
    switch(numeroEscolhaComputador%3){
        case 0:
            return 'pedra';
        case 1:
            return 'papel';
        default:
            return 'tesoura';
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function resetarPontuacao() {
    pontuacao.qtdJogos = 0;
    pontuacao.vitorias = 0;
    pontuacao.empates = 0;
    pontuacao.derrotas = 0;

    escolhaPlayer = '-';
    escolhaComputador = '-';

    esconderEscolhaDuelo();
    esconderHistoricoPontuacao();
    mostrarHistoricoPontuacao();
}

function toEmoji(nome){
    switch (nome) {
        case 'pedra':
            return '🪨';
        case 'papel':
            return '🧻';
        case 'tesoura':
            return '✂️';
        default:
            return nome
    }
}