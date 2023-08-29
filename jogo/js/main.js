//Definição de largura e altura
function setup(){

    createCanvas(700, 400)

}

//definir o que será exibido
function draw() {

    background(imgEstrada)
    //O image permite manipular o objeito no eixo X, Y e como também W e H
    mostrarMascote()
    mostrarCarros()
    movimentoCarro()
    movimentoMascote()
    incluirPontos()
    verificaColisao()
    
}

