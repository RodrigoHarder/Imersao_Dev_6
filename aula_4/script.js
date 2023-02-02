var listaFilmes = [
  {
    nome: "Dark",
    ano: 2017,
    poster: "https://br.web.img2.acsta.net/pictures/19/06/11/21/33/0075880.jpg",
    link:"https://www.youtube.com/watch?v=WLH9biwfZVM"
  },
  {
    nome: "The Last of Us",
    ano: 2023,
    poster: "https://meups.com.br/wp-content/uploads/2022/11/Serie-de-The-Last-of-Us-3.jpg",
    link:"https://www.youtube.com/watch?v=nmoOGWbqomI"
  },
  {
    nome: "A maldição da resiência Hill",
    ano: 2018,
    poster: "https://br.web.img2.acsta.net/pictures/18/10/15/11/27/5959414.jpg",
    link:"https://www.youtube.com/watch?v=OJCbEude3_E"
  },
  {
    nome: "The Office",
    ano: 2005,
    poster: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
    link:"https://www.youtube.com/watch?v=tNcDHWpselE"
  },
  { 
    nome: "Stranger Things",
    ano: 2016,
    poster: "https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg",
    link:"https://www.youtube.com/watch?v=YGLnDI1Fogg"
  }, 
  {
    nome: "Grimm",
    ano: 2011,
    poster: "https://m.media-amazon.com/images/M/MV5BMTkyODg2MzQwMV5BMl5BanBnXkFtZTgwNTA2MjE1MDI@._V1_FMjpg_UX1000_.jpg",
    link:"https://www.youtube.com/watch?v=2-4xKNZ_gaA"
  },
  {
    nome: "Us",
    ano: 2019,
    poster: "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
    link:"https://www.youtube.com/watch?v=hNCmb-4oXJA"
  },
  {
    nome: "Nope",
    ano: 2022,
    poster: "https://m.media-amazon.com/images/M/MV5BZmQ4MjE3YjUtZWFhOS00YzQ3LWEyM2EtYTAxNWU1ZDkwZTg5XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    link:"https://www.youtube.com/watch?v=In8fuzj3gck"
  },
  {
    nome: "Midsommar",
    ano: 2019,
    poster: "https://viureview.com.br/images/filmes4/Midsommar.jpg",
    link:"https://www.youtube.com/watch?v=1Vnghdsjmd0"
  },
  {
    nome: "A Bruxa",
    ano: 2015,
    poster: "https://i0.wp.com/lugarnenhum.net/wp-content/uploads/2021/03/the-witch.jpg?resize=691%2C1024&ssl=1",
    link:"https://www.youtube.com/watch?v=FE-u6RznkGQ"
  },
  {
    nome: "Hereditário",
    ano: 2018,
    poster: "https://br.web.img3.acsta.net/pictures/18/06/14/13/11/1751062.jpg",
    link:"https://www.youtube.com/watch?v=Ui13PlmyZhQ"
  },
  {
    nome: "Corra",
    ano: 2017,
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRB6hcDB3u8PZsRafyFsdOYdo7LUoy84J9z-2rDCuonmh07qhvp",
    link:"https://www.youtube.com/watch?v=mDGV5UucTu8"
  },
  {
    nome: "O iluminado",
    ano: 1980,
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgBcnfLW2H68J2aqMN3Fj7SOoDY05UYvZlepL_KkjIfC78dxyx",
    link:"https://www.youtube.com/watch?v=dSQ3yN5yJ0g"
  },
  {
    nome: "O exorcista",
    ano: 1973,
    poster: "https://www.themoviedb.org/t/p/w500/z8X9sQ64GPGeJi5hWQsqDqEVMan.jpg",
    link:"https://www.youtube.com/watch?v=cGAZPUKw3lU"
  },
  {
    nome: "Renfield",
    ano: 2023,
    poster: "https://br.web.img2.acsta.net/pictures/23/01/06/13/18/2867715.jpg",
    link:"https://www.youtube.com/watch?v=uUvN0oA9SlI"
  },
  {
    nome: "Evil Dead: Rise",
    ano: 2023,
    poster: "https://br.web.img3.acsta.net/pictures/22/03/17/17/39/0813390.png",
    link:"https://www.youtube.com/watch?v=b0zPraLuaCA"
  }
];

var elementoSelecao = document.getElementById("deletar"); 
var elementoFilmeNovo = document.getElementById("filmeNovo");


imprimirFilmes();
listaDeletar();


function imprimirFilmes() {
  
  var codigoImprimir = "";

  for (var i = 0; i < listaFilmes.length; i++) {
    codigoImprimir += `<div class="filme"><a href="${listaFilmes[i].link}" target="_blank"><img src="${listaFilmes[i].poster}" title="${listaFilmes[i].nome}"></a>`;
    codigoImprimir += `<div class="legenda">${listaFilmes[i].nome} (${listaFilmes[i].ano})</div></div>`;
  
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
    alert("URL da imagem com extensão inválida (extensões aceitas: .jpg, .jpeg, .png, .gif, .bmp, .svg e .webp)");
  }

  document.getElementById("filme").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("poster").value = "";
}
}
 /* 
//Colocar os trailers no poster dos filmes;
  for(var i=0; i<(listaFilmes[i].link).length; i++){
    colecaoFilmes.innerHTML = `<a href="${listaFilmes[i].link}" target="_blank"><img src="${listaFilmes[i].poster}"></a>`;
  }
  */

  function listaDeletar() {
    var codigoLista = '<option selected disabled value="">Selecione um filme para deletar</option>';
    for (var i = 0; i < listaFilmes.length; i++) {
      codigoLista += `<option value="${i}">${listaFilmes[i].nome} (${listaFilmes[i].ano})</option>`;
    }
  
    elementoSelecao.innerHTML = codigoLista;
  }

  function Deletar() {
    
    var selecao = parseInt(document.getElementById("deletar").value);
  
    if (selecao >= 0) {
      listaFilmes.splice(selecao, 1);
      imprimirFilmes();
      listaDeletar();
    }
  }


  function adicionarFilme() {
    var filmeNovo = document.getElementById("filme").value;
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML += elementoFilmeFavorito;
  }
  