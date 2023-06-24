let jogar = document.getElementById("btn_button")
let img_dado = document.getElementById("img_dado")


let dado_audio = document.getElementById("box_audio")

let text_number = document.getElementById("number_dado")
function sorteio_dado (){
    
    
    
    let dados = Math.floor(Math.random() * 7);

    if(dados == 0){
        dados = 1
    }


    text_number.textContent = dados
    
    img_dado.setAttribute("src", `dado/${dados}.png`)

    jogar.classList.remove("off")
    img_dado.classList.remove("animations")

    dado_audio.pause()
    dado_audio.removeAttribute("src", "dado-rolando.mp3")
}


jogar.addEventListener("click", function () {

    let card_btn = document.getElementById("btn_jogo")

    //colocar efeito de rolagem
    img_dado.classList.add("animations")

    //deixar o botão jogar invisivel
    jogar.classList.add("off")

    //colocar interrogação na imagem e onde aparece o texto numerico
    img_dado.src = `dado/0.png`
    text_number.textContent = "?"

    //colocando som de dado rolando
    dado_audio.setAttribute("src", "dado-rolando.mp3")
    dado_audio.play()
    

    setTimeout(sorteio_dado, 2000)
    
})
