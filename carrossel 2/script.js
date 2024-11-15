// Seleciona o elemento que contém todas as imagens do carrossel
const track = document.getElementById('carroselTrack');

// Obtém o número de imagens no carrossel
const items = document.querySelectorAll('.carousel-item');
let index = 0;

// Função que move o carrossel para a próxima imagem
function moveCarousel() {
    index++;

    // Verifica se o índice chegou à última imagem
    if (index >= items.length) {
        // Pequeno atraso para permitir que a transição termine
        setTimeout(() => {
            track.style.transition = 'none'; // Remove a animação
            index = 0; // Volta ao início (primeira imagem)
            track.style.transform = `translateX(0)`; // Volta para o início
        }, 500); // Atraso de 0,5 segundos
    } else {
        track.style.transition = 'transform 0.5s ease'; // Adiciona a animação
        track.style.transform = `translateX(-${index * 100}%)`; // Desloca o carrossel
    }
}

// Define um intervalo para mover o carrossel automaticamente a cada 3 segundos
setInterval(moveCarousel, 3000);
