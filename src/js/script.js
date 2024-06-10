const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
  const ultimoCartao = cartaoAtual === cartoes.length - 1;

  if (ultimoCartao) return;

  esconderCartaoActivo();

  cartaoAtual++;
  mostrarCartao();
});

btnVoltar.addEventListener("click", function () {
  const primeiroCartao = cartaoAtual === 0;
  if (primeiroCartao) return;

  esconderCartaoActivo();

  cartaoAtual--;
  mostrarCartao();
});

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("activo");
}

function esconderCartaoActivo() {
  const cartaoActivo = document.querySelector(".activo");
  cartaoActivo.classList.remove("activo");
}
