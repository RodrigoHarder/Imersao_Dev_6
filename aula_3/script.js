var listaFilmes = [
  {
    nome: "Dark",
    ano: 2017,
    poster: "https://br.web.img2.acsta.net/pictures/19/06/11/21/33/0075880.jpg"
  },
  {
    nome: "The Last of Us",
    ano: 2023,
    poster: "https://meups.com.br/wp-content/uploads/2022/11/Serie-de-The-Last-of-Us-3.jpg"
  },
  {
    nome: "A maldição da resiência Hill",
    ano: 2018,
    poster: "https://br.web.img2.acsta.net/pictures/18/10/15/11/27/5959414.jpg"
  },
  {
    nome: "The Office",
    ano: 2005,
    poster: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg"
  },
];

// Indica onde no HTML vai aparecer o texto (id="filmeNovo")
var elementoFilmeNovo = document.getElementById("filmeNovo");
var elementoSelecao = document.getElementById("deletar");

imprimirFilmes();

// Imprime os pôsteres na tela
function imprimirFilmes() {
  // Variável onde irá o código a ser impresso
  var codigoImprimir = "";

  for (var i = 0; i < listaFilmes.length; i++) {
    codigoImprimir += `<div class="filme"><img src="${listaFilmes[i].poster}" title="${listaFilmes[i].nome}">`;
    codigoImprimir += `<div class="legenda">${listaFilmes[i].nome} (${listaFilmes[i].ano})</div></div>`;
  }

  elementoFilmeNovo.innerHTML = codigoImprimir;
} // fim function imprimirFilmes()

// Adiciona novo filme
function Adicionar() {
  // Puxa o título e a URL digitada nos campos de entrada
  var filme = document.getElementById("filme").value;
  var ano = document.getElementById("ano").value;
  var poster = document.getElementById("poster").value;

  // Verifica se o título ou a url já está registrado
  if (
    listaFilmes.findIndex((i) => i.nome == filme) >= 0 ||
    listaFilmes.findIndex((i) => i.poster == poster) >= 0
  ) {
    alert("Esse filme/pôster já está no catálogo");
  } else if (
    // if verifica se a url é de uma extensão de imagem válida
    poster.endsWith(".jpg") ||
    poster.endsWith(".JPG") ||
    poster.endsWith(".jpeg") ||
    poster.endsWith(".JPEG") ||
    poster.endsWith(".gif") ||
    poster.endsWith(".GIF") ||
    poster.endsWith(".png") ||
    poster.endsWith(".PNG") ||
    poster.endsWith(".svg") ||
    poster.endsWith(".SVG") ||
    poster.endsWith(".bmp") ||
    poster.endsWith(".BMP") ||
    poster.endsWith(".webp") ||
    poster.endsWith(".WEBP")
  ) {
    // Adiciona o título, url e ano ao Array dos Filmes
    var j = listaFilmes.length;
    listaFilmes[j] = { nome: filme };
    listaFilmes[j].ano = ano;
    listaFilmes[j].poster = poster;

    // Re-imprime os posteres na tela
    imprimirFilmes();
  } else {
    // Aviso mostrado caso a url não seja de uma extensão de imagem válida
    alert(
      "URL da imagem com extensão inválida (extensões aceitas: .jpg, .jpeg, .png, .gif, .bmp, .svg e .webp)"
    );
  }

  // Limpa os campos
  document.getElementById("filme").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("poster").value = "";
} // fim function Adicionar()