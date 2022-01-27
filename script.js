function gerarNumeroSecreto() {
  return parseInt(Math.random() * 11);
}

function chutar() {
  var nChute = parseInt(chute.value);
  var mensagem = "";

  if (nChute > 10 || nChute < 0) {
    mensagem = "Digite um número de 0 a 10";
  } else if (nChute == numeroSecreto) {
    Reload.style.display = "";
    chutar.disabled = true;
    mensagem = "Sortudo!";
  } else if (nChute > numeroSecreto) {
    contador = contador - 1;
    mensagem =
      "Passou longe! Continue tentando, você tem mais " +
      contador +
      " tentativas.";
  } else if (nChute < numeroSecreto) {
    contador = contador - 1;
    mensagem =
      "Quase! Continue tentando, você tem mais " + contador + " tentativas.";
  }

  if (contador <= 0) {
    Reload.style.display = "";
    chutar.disabled = true;
    mensagem = "Azarado! o número era " + numeroSecreto + ".";
  }

  resultado.innerHTML = mensagem;
}

function reload() {
  contador = 3;
  numeroSecreto = gerarNumeroSecreto();

  chute.value = ""; //Limpar o valor do input
  resultado.innerHTML = "";
  chutar.disabled = false;
  Reload.style.display = "none";
}

var contador = 3;
var numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);

var chute = document.getElementById("chute");
var bChutar = document.getElementById("chutar");
var resultado = document.getElementById("resultado");
var Reload = document.getElementById("Reload");

function Igual() {}

function nIgual() {}
