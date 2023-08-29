

//Posições dos carros 
// let xCarro1 = 599
// let xCarro2 = 599
// let xCarro3 = 599
let xCarros = [599, 599, 599, 599, 599, 599]
let yCarros = [40, 100, 150, 210, 265, 320]
let velocidadeCarros = [10, 12, 8.9, 7, 4.7, 3]

let comprimentoCarros=55
let alturaCarros=40

function mostrarCarros() {
    for (let i = 0; i < imagensCarros.length; i++) {

        image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros) 
    }
    // image(imgCarro1, xCarro1, 40, comprimentoCarros, alturaCarros);
    // image(imgCarro2, xCarro2, 100, comprimentoCarros, alturaCarros);
    // image(imgCarro3, xCarro3, 150, comprimentoCarros, alturaCarros);
}

function movimentoCarro() {

    for (let i = 0; i < imagensCarros.length; i++) {
    
        
        xCarros[i] -= velocidadeCarros[i]
        
        if (xCarros[i] < -50) {
            xCarros[i] = 700
        }
    
    }
}

