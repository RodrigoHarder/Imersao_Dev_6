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
  { 
    nome: "Stranger Things",
    ano: 2016,
    poster: "https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg"
  }, 
  {
    nome: "Grimm",
    ano: 2011,
    poster: "https://m.media-amazon.com/images/M/MV5BMTkyODg2MzQwMV5BMl5BanBnXkFtZTgwNTA2MjE1MDI@._V1_FMjpg_UX1000_.jpg"
  },
  {
    nome: "Us",
    ano: 2019,
    poster: "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg"
  },
  {
    nome: "Nope",
    ano: 2022,
    poster: "https://m.media-amazon.com/images/M/MV5BZmQ4MjE3YjUtZWFhOS00YzQ3LWEyM2EtYTAxNWU1ZDkwZTg5XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
  }
];

var elementoFilmeNovo = document.getElementById("filmeNovo");

imprimirFilmes();

function imprimirFilmes() {
  
  var codigoImprimir = "";

  for (var i = 0; i < listaFilmes.length; i++) {
    codigoImprimir += `<div class="filme"><img src="${listaFilmes[i].poster}" title="${listaFilmes[i].nome}">`;
    codigoImprimir += `<div class="legenda">${listaFilmes[i].nome} (${listaFilmes[i].ano})</div></div>`;
  }

  elementoFilmeNovo.innerHTML = codigoImprimir;
}

function Adicionar() {
  var filme = document.getElementById("filme").value;
  var ano = document.getElementById("ano").value;
  var poster = document.getElementById("poster").value;

  if (
    listaFilmes.findIndex((i) => i.nome == filme) >= 0 ||
    listaFilmes.findIndex((i) => i.poster == poster) >= 0
  ) {
    
    alert("Parece que este filme/série já está no catálogo");
  
  } else if (poster.endsWith(".jpg") ||
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
    
    var j = listaFilmes.length;
    listaFilmes[j] = { nome: filme };
    listaFilmes[j].ano = ano;
    listaFilmes[j].poster = poster;
    
    imprimirFilmes();
  
  } else {
    alert(
      "URL da imagem com extensão inválida (extensões aceitas: .jpg, .jpeg, .png, .gif, .bmp, .svg e .webp)"
    );
  }

  document.getElementById("filme").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("poster").value = "";
}