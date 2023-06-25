//pegando os elementos no DOM
let btn_jogar = document.getElementById("btn_button")
let img_dado = document.getElementById("img_dado")
let dado_audio = document.getElementById("box_audio")
let text_number = document.getElementById("number_dado")

//function que sorteará o numero
function sorteio_dado (){
    
    
    let dados = Math.floor(Math.random() * 7);//variavel que sorteará o numero com o metodo random

    //uma condição que verifica se o numero é engual a 0 e for troca ele pra 1
    //não fiz isso com mim e max por que desse jeito é mas facil e fica mas entendivel para que começo agora
    if(dados == 0){
        dados = 1
    }


    //passará o numero que saiu do random para o DOM no paragrafo
    text_number.textContent = dados
    
    //vai trocar a imagem do dado para o sorteado
    img_dado.setAttribute("src", `dado/${dados}.png`)
    //deixará o botão jogar desativado
    btn_jogar.classList.remove("off")
    
    img_dado.classList.remove("animations")//remover animation na imagem

    //pausará o barulho do dado casó aconteça de sair 
    dado_audio.pause()
}

// esse evento faz todo o efeito no dom ele que é responsavel por dar todo o efeito na parte da img
btn_jogar.addEventListener("click", function () {

    //colocar efeito de rolagem
    img_dado.classList.add("animations")

    //deixar o botão jogar invisivel
    btn_jogar.classList.add("off")

    //trocar a imagem sempre que o botão receber o evento click
    img_dado.src = `dado/0.png`

    //trocar a imagem quando o botão receber um click
    text_number.textContent = "?"

    //colocando som de dado rolando
    dado_audio.play()
    
    //chamando a function sorteio_dado com um delay de 2 segundos
    setTimeout(sorteio_dado, 2000)
    
})
