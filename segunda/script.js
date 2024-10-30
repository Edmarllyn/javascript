//getattribute - obter o valor do atributo/elemento (valor da linha).

//setAttribute - Definir ou modificar o valor.

function changeImage(){
    const img = document.getElementById("myimage");
    //aqui conseguimos armazenar o conteúdo da imagem

    const observerImage = img.getAttribute("src");
    //aqui pegamos o atributo src da imagem que basicamente diz o caminho da origem da imagem

    if (observerImage === "ace1.jpg") {
        //se a origem atual da image for igual a "ace 1.jpg"

        img.setAttribute("src", "card2.jpg"); //Usando o setAttribute
        img.setAttribute("alt", "imagem card2");
    } else { //caso contrario fazer o processo inverso.
        img.setAttribute("src", "ace1.jpg");
        img.setAttribute("alt", "imagem ace1");
    }
}