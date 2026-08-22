
/*
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(dateObject.toLocaleDateString('en-US', options));
// Outputs: Monday, October 23, 2023


that's nice actually.
*/


let listaAfazeres = JSON.parse(localStorage.getItem('lista-afazeres')) || [{"descricao":"Nonagon Infinity","tempoTermino":"2016-04-29T00:00:00.000Z","ehDiaInteiro":false},{"descricao":"Polygondwanland","tempoTermino":"2017-11-13T00:00:00.000Z","ehDiaInteiro":false}];
let listaFeitos = JSON.parse(localStorage.getItem('lista-feitos')) || [];
const ICONES = {
    caixa_desmarcada: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNxdWFyZS1pY29uIGx1Y2lkZS1zcXVhcmUiPjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeD0iMyIgeT0iMyIgcng9IjIiLz48L3N2Zz4=',
    caixa_marcada: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNxdWFyZS1jaGVjay1iaWctaWNvbiBsdWNpZGUtc3F1YXJlLWNoZWNrLWJpZyI+PHBhdGggZD0iTTIxIDEwLjY1NlYxOWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoMTIuMzQ0Ii8+PHBhdGggZD0ibTkgMTEgMyAzTDIyIDQiLz48L3N2Zz4=',
    lixeira: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyYXNoMi1pY29uIGx1Y2lkZS10cmFzaC0yIj48cGF0aCBkPSJNMTAgMTF2NiIvPjxwYXRoIGQ9Ik0xNCAxMXY2Ii8+PHBhdGggZD0iTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNiIvPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNOCA2VjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MiIvPjwvc3ZnPg=='
}

function Tarefa(descricao, tempoTermino, ehDiaInteiro) {
    this.descricao = descricao;
    this.tempoTermino = tempoTermino;
    this.ehDiaInteiro = ehDiaInteiro;
    // more to come
}

function tempoData (data) {
    return data.substring(0, 10);
}

function tempoHorario (data) {
    return data.substring(11, 16);
}


function adicionarTarefa (tarefa) {
    listaAfazeres.push(tarefa);
    atualizarListaAfazeres();
}


function excluirTarefa (tarefa) {
    let indiceProcurado = listaAfazeres.findIndex((element) => element.descricao === tarefa.descricao);
    if (indiceProcurado != -1) {
        listaAfazeres.splice(indiceProcurado, 1);
    }
    else {
        indiceProcurado = listaFeitos.findIndex((element) => element.descricao === tarefa.descricao);
        if (indiceProcurado != -1) {
            listaFeitos.splice(indiceProcurado, 1);
        }
        else {
            console.log("Erro: Descrição de tarefa não foi encontrada");
        }
    }
    atualizarListaAfazeres();
    atualizarListaFeitos();
};


function concluirTarefa (tarefa) {
    const indiceProcurado = listaAfazeres.findIndex((element) => element.descricao === tarefa.descricao);
    if (indiceProcurado != -1) {
        listaAfazeres.splice(indiceProcurado, 1);
        listaFeitos.push(tarefa);
    }
    else {
        console.log("Erro: Descrição de tarefa não foi encontrada");
    }
    atualizarListaFeitos();
    atualizarListaAfazeres();
}


function desconcluirTarefa (tarefa) {
    const indiceProcurado = listaFeitos.findIndex((element) => element.descricao === tarefa.descricao);
    if (indiceProcurado != -1) {
        listaFeitos.splice(indiceProcurado, 1);
        listaAfazeres.push(tarefa);
    }
    else {
        console.log("Erro: Descrição de tarefa não foi encontrada");
    }
    atualizarListaAfazeres();
    atualizarListaFeitos();
}


function gerirEnterEntrada(event) {
    if (event.key === 'Enter') {
        criarTarefa();
    }
}

function criarTarefa() {
    const entrada = document.getElementById('js-entrada');
    const descricaoEntrada = entrada.value.trim();
    if (descricaoEntrada){
        // setando data
        const entradaData = document.getElementById('js-entrada-data');
        let dataEntradaData;
        if (entradaData.value){
            dataEntradaData = new Date(entradaData.value);
        }
        else {
            dataEntradaData = new Date();
        }
        dataEntradaData = dataEntradaData.toISOString();

        // setando hora
        const entradaHorario = document.getElementById('js-entrada-hora');
        let ehDiaInteiro = false;
        if (entradaHorario.value){
            dataEntradaData = tempoData(dataEntradaData) + 'T' + entradaHorario.value + ':00.000-03:00';

            // 2019-01-01T00:00:00.000-03:00
            //                           Data  T        Horário  :00.000-03:00
            //  +---------------------------+    +------------+
            //   0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 
            //   2  0  1  9  -  0  1  -  0  1  T  0  0  :  0  0  :  0  0  .  0  0  0  -  0  3  :  0  0
        }
        
        const novaTarefa = new Tarefa(descricaoEntrada, dataEntradaData, ehDiaInteiro);
        adicionarTarefa(novaTarefa);

        // limpar imputs
        entrada.value = '';
        // entradaData.value = ''; Costuma-se colocar tarefas em datas parecidas
        entradaHorario.value = '';
        
    }
    
}


function criarVisualizacaoTarefa (tarefa, tipo='afazeres') {
    // tipo = 'afazer', 'feito'
    let iconeBotaoCaixaMostrando, iconeBotaoCaixaAcao, containerLista, acaoCaixa, acaoHover;
    switch (tipo) {
        case 'feitos':
            iconeBotaoCaixaMostrando = ICONES.caixa_marcada;
            iconeBotaoCaixaAcao = ICONES.caixa_desmarcada;
            acaoCaixa = () => desconcluirTarefa(tarefa);
            containerLista = document.getElementById('container-lista-feitos');
            break;
        case 'afazeres':
        default:
            iconeBotaoCaixaMostrando = ICONES.caixa_desmarcada;
            iconeBotaoCaixaAcao = ICONES.caixa_marcada;
            acaoCaixa = () => concluirTarefa(tarefa);
            containerLista = document.getElementById('container-lista-afazeres');
            break;
    }

    const linhaTarefa = document.createElement('li');
    linhaTarefa.className = 'linha-tarefa';
    linhaTarefa.id = toKebab(String(tarefa.descricao));

    // conteúdo
    const tarefaConteudo = document.createElement('p');
    tarefaConteudo.className = 'tarefa-conteudo';
    tarefaConteudo.textContent = String(tarefa.descricao);

    // Container tempo
    const tarefaContainerTempo = document.createElement('div');
    tarefaContainerTempo.className = 'tarefa-container-tempo';

    // data Término
    const tarefaDataTermino = document.createElement('p');
    tarefaDataTermino.className = 'tarefa-tempo-termino';
    tarefaDataTermino.textContent = tempoData(tarefa.tempoTermino);

    // horário Término
    const tarefaHorarioTermino = document.createElement('p');
    tarefaHorarioTermino.className = 'tarefa-tempo-termino';
    tarefaHorarioTermino.textContent = tempoHorario(tarefa.tempoTermino);

    // botão de caixa
    const tarefaBotaoCaixa = document.createElement('img');
    tarefaBotaoCaixa.className = 'tarefa-botao-caixa';
    tarefaBotaoCaixa.src = iconeBotaoCaixaMostrando;
    tarefaBotaoCaixa.onclick = () => acaoCaixa();
    tarefaBotaoCaixa.addEventListener('mouseenter', (event) => event.target.src = iconeBotaoCaixaAcao);
    tarefaBotaoCaixa.addEventListener('mouseleave', (event) => event.target.src = iconeBotaoCaixaMostrando);

    // botão de excluir
    const tarefaBotaoExcluir = document.createElement('img');
    tarefaBotaoExcluir.className = 'tarefa-botao-excluir';
    tarefaBotaoExcluir.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyYXNoMi1pY29uIGx1Y2lkZS10cmFzaC0yIj48cGF0aCBkPSJNMTAgMTF2NiIvPjxwYXRoIGQ9Ik0xNCAxMXY2Ii8+PHBhdGggZD0iTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNiIvPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNOCA2VjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MiIvPjwvc3ZnPg==';
    tarefaBotaoExcluir.onclick = () => excluirTarefa(tarefa);
    tarefaBotaoExcluir.addEventListener('mouseenter', (event) => event.target.parentElement.className = event.target.parentElement.className.concat(' linha-tarefa-a-deletar'));
    tarefaBotaoExcluir.addEventListener('mouseleave', (event) => event.target.parentElement.className = event.target.parentElement.className.replaceAll('linha-tarefa-a-deletar', ''));

    // MONTANDO
    // incluindo partes dentro da visualização de tarefa
    tarefaContainerTempo.appendChild(tarefaHorarioTermino);
    tarefaContainerTempo.appendChild(tarefaDataTermino);
    linhaTarefa.appendChild(tarefaContainerTempo);
    linhaTarefa.appendChild(tarefaBotaoCaixa);
    linhaTarefa.appendChild(tarefaConteudo);
    linhaTarefa.appendChild(tarefaBotaoExcluir);

    // COLOCANDO
    containerLista.appendChild(linhaTarefa);
} 


function ordenarListaTarefas(tipo='afazeres') {
    let listaTarefas;
    switch (tipo) {
        case 'feitos':
            listaTarefas = listaFeitos;
            break;
        case 'afazeres':
        default:
            listaTarefas = listaAfazeres;
            break;
    }

    return (tarefaA, tarefaB) => {
        let tempoA = new Date(tarefaA.tempoTermino);
        let tempoB = new Date(tarefaB.tempoTermino);
        return Math.sign(tempoA - tempoB);
    }
}


function atualizarListaAfazeres () {
    const containerListaAfazeres = document.getElementById('container-lista-afazeres');
    containerListaAfazeres.textContent = '';

    if (!listaAfazeres.length){
        criarAviso('container-lista-afazeres', 'afazeres-sem-elementos', 'Ainda não há nenhuma tarefa a se fazer');
    }

    listaAfazeres.sort(ordenarListaTarefas('afazeres'));

    for (let tarefa of listaAfazeres) {
        criarVisualizacaoTarefa(tarefa, 'afazeres');
    }
    
    localStorage.setItem('lista-afazeres', JSON.stringify(listaAfazeres));
}


function atualizarListaFeitos () {
    const containerListaFeitos = document.getElementById('container-lista-feitos');
    containerListaFeitos.textContent = '';

    if (!listaFeitos.length){
        criarAviso('container-lista-feitos', 'feitos-sem-elementos', 'Ainda não há nenhuma tarefa feita');
    }
    
    listaFeitos.sort(ordenarListaTarefas('feitos'));

    for (let tarefa of listaFeitos) {
        criarVisualizacaoTarefa(tarefa, 'feitos');
    }
    
    localStorage.setItem('lista-feitos', JSON.stringify(listaFeitos));
}

function criarAviso (idParent, nomeAviso, conteudo) {
    const novoAviso = document.createElement('span');
    novoAviso.className = 'aviso';
    novoAviso.id = toKebab(String(nomeAviso));
    novoAviso.textContent = conteudo;

    const container = document.getElementById(idParent);
    container.prepend(novoAviso);
}

function toKebab (entrada) {
    return entrada
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

atualizarListaAfazeres();
atualizarListaFeitos();
