// 
let yMacote = 360
let xMascote = 40
let meusPontos = 0
let colisao = false

// Mascote Cod
function mostrarMascote() {
    image(imgMascote, xMascote, yMacote, 50, 50)
}

// Incluir pontos Cod
function incluirPontos() {
    
    text(meusPontos, 20,25)
    fill(color(0, 200, 255))
    textSize(20)

    if (yMacote < 0) {
        yMacote = 360
        meusPontos++
    }

}

// Movimentar Mascote Cod
function movimentoMascote() {
    
    if(keyIsDown(UP_ARROW)) {
        yMacote -=5;
        // Quando clicar para cima trocar sprite
        imgMascote = loadImage("img/thaiscarla.png")
    }
    if (keyIsDown(DOWN_ARROW)) {
        yMacote +=5;
        // Quando clicar para baixo trocar sprite
        imgMascote = loadImage("img/thaiscarla.png")
    }
    if (keyIsDown(LEFT_ARROW)) {
        xMascote -=5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xMascote +=5;
    }

} 

// Colisão Mascote Cod
function verificaColisao(){
    for (let i = 0; i < imagensCarros.length; i = i + 1){
      // Colisão com especificações dos carros
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xMascote, yMacote, 25)
      if (colisao){
        // Quando colidir voltar ao ponto inicial
        voltaPontoInicial();
      if (meusPontos > 0){
        // Quando colidir tirar 1 ponto
        meusPontos -= 1;
      }
      }
    }
  }
  
  function voltaPontoInicial() {
    yMacote = 360
    
  }
