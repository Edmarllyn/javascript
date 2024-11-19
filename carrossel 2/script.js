// Seleciona o elemento que contém todas as imagens do carrossel
const track = document.getElementById('carroselTrack');

// Obtém o número de imagens no carrossel
const items = document.querySelectorAll('.carousel-item');

// variavel que mantém o índice da imagem atual exibida no carrossel ( começa em 0, a primeira imagem)
let index = 0;



// Função que move o carrossel para a próxima imagem
function moveCarousel() {
    //icrementa o indice em 1 para avançar para a proxima image

    index++;
    // Verifica se o índice atual é maior ou igual a proxima imagem
    if (index >= items.length- 1) {
        // Pequeno atraso para permitir que a transição termine
        setTimeout(() => {
            track.style.transition = 'none'; // Remove a animação
            index = 0; // Volta ao início (primeira imagem)
            track.style.transform = `translateX(0)`; // Volta para o início
        }, 500); // Atraso de 0,5 segundos
    } else {
        track.style.transition = 'transform 0.2s ease'; // Adiciona a animação
        track.style.transform = `translateX(-${index * 100}%)`; // Desloca o carrossel
    }
}

// Define um intervalo para mover o carrossel automaticamente a cada 3 segundos
setInterval(moveCarousel, 1000);
