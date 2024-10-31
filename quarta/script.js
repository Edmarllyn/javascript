const input = document.getElementById("taskInput");

const ul = document.getElementById("taskList");
// Aqui Estamos criando uma função para ser atribuida dentro do botão adicionar tarefas.

function addtask(){
    if(input.value !== "") //aqui informamos que se (if) o input for diferente de vazio (1== ""), ele irá criar um elemento (createElement) de 'li', o texto que ela possui é igual o input value, ou seja o valor do input que será digitado.

    {
        const li = document.createElement("li");
        li.textContent = input.value;
 //Traduzindo esta linha estamos criando um texto para lista, e este  texto será o valor preenchido pelo usuario dentro do input.


        //aqui estamos criando um botão (button) para remover esses itens de (li)
          const removerBotao = document.createElement("button");

          //chamamos nossa const removerBotao e inserindo um texto chamado "remover"
        removerBotao.textContent = "Remover";

        //criamos aqui uma função que ao clicar neste botão ele irã execultar uma funçao de remover o filho da nossa ul ou seja a "li". 
        removerBotao.onclick  = function() {

            //a função é pagar o elemento filho da ul, que no caso é a nossa "li" e remove-la.
            ul.removeChild(li);           
        };

        ul.appendChild(li); //Est5a,os adicionando um filho para a nossa (ul).
        li.appendChild(removerBotao); //Aqui, chamos nossa const "li" e estamos adicionando a ela um filho (appendChild.)

        input.value = ""; // Usado para limpar o campo de inpute  apos  ter adicionado o item de lista
    } else {  //caso o campo input estiver vazio , ele ira aparecer Está mensagem de alerta.
        alert("Por favor,  insira uma tarefa");
    };
};