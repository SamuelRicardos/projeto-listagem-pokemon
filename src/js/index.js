const botaoAlterarTema = document.getElementById("botao-alterar-tema");
/* busca o id lá no HTML, const é pra variavel não mudar durante o processo, criei uma var */

const body = document.querySelector("body");
console.log(body);
const imagemBotaotrocaDeTema = document.querySelector(".imagem-botao")
/* queryselector vai atrás da tag */

botaoAlterarTema.addEventListener("click", ()=>{  

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    if(modoEscuroEstaAtivo) {
      body.classList.remove("modo-escuro");
      imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        body.classList.add("modo-escuro");

 imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
 /* escolhe o atributo e o caminho da fonte que quer pegar a nova imagem para o botao */
 } );