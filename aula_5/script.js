var jogadores = [
  {
    imagem: "imagens/rodrigo.png",
    nome: "Rodrigo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    imagem: "imagens/caroline.png",
    nome: "Caroline",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    imagem: "imagens/matheus.png",
    nome: "Matheus",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  }
];

var tabelaDePontuacao = document.getElementById("tabelaJogadores");

function exibirNaTelaJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento +=
      "<tr style='height:64px'><td><img class='avatar' src=" +
      jogadores[i].imagem +
      "></td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitoria + "</td>";
    elemento += "<td>" + jogadores[i].empate + "</td>";
    elemento += "<td>" + jogadores[i].derrota + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button class='vitoria' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td><button class='empate' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento +=
      "<td><button class='derrota' onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td>";
    elemento += "</td>";
    tabelaDePontuacao.innerHTML = elemento;
  }
}

var jogador = jogadores;

function pontos() {
  for (var i = 0; i < jogadores.lenght; i++) {
    var jogador = jogadores[i];
    jogador.pontos = 0;
  }
}

function calcularPontos(jogador) {
  var pontos = jogador.vitoria * 3 + jogador.empate;
  return pontos;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitoria++;
  jogador.pontos = calcularPontos(jogador);
  exibirNaTelaJogadores(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empate++;
  jogador.pontos = calcularPontos(jogador);
  exibirNaTelaJogadores(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrota++;
  jogador.pontos = calcularPontos(jogador);
  exibirNaTelaJogadores(jogadores);
}

function adicionarNovoNome() {
  var novoNome = document.getElementById("novo-nome").value;
  var novoAvatar = document.getElementById("novo-avatar").value;
  var novoJogador = {
    imagem: novoAvatar,
    nome: novoNome,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  jogadores.push(novoJogador);
  exibirNaTelaJogadores(jogadores);
  document.getElementById("novo-nome").value = "";
  document.getElementById("novo-avatar").value = "";
}

function limparTela(jogador) {
  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    jogador.vitoria = 0;
    jogador.empate = 0;
    jogador.derrota = 0;
    jogador.pontos = 0;

    exibirNaTelaJogadores(jogadores);
  }
}

function jogarDado() {
  document.getElementById("resultado").innerText =
    "O resultado é " + Math.round(Math.random() * 21);
}

pontos();
exibirNaTelaJogadores(jogadores);
calcularPontos(jogador);
limparTela(jogador);