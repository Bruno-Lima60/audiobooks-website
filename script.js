const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const qtdCapitulos = 10;

let audioTocando = false;
let capituloAtual = 1;

function tocarFaixa() {
  console.log("Tocado!");
  audio.play();

  audioTocando = true;
}

function pausarFaixa() {
  console.log("Pausado!");
  audio.pause();
  audioTocando = false;
}

function tocarOuPausar() {
  if (audioTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function proximoCapitulo() {
  pausarFaixa();

  if (capituloAtual < qtdCapitulos) {
    capituloAtual = capituloAtual + 1;
  } else {
    capituloAtual = 1;
  }

  audio.src = "./audios/" + capituloAtual + ".mp3";
}

function capituloAnterior() {
  pausarFaixa();

  if (capituloAtual === 1) {
    capituloAtual = qtdCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }

  audio.src = "./audios/" + capituloAtual + ".mp3";
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
