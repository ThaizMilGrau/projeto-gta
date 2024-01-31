const botao = document.querySelector(".btn-plataforma");
console.log(botao);

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
   elementoPlataformas.classList.toggle("ativo");
});