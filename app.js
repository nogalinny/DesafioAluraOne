//Amigo secreto

//Aplicação que permite os usuários inserir nomes de amigos em uma lista
//Realizar sorteio aleatório e determinar o "amigo secreto"

//Adicionar nomes por meio de um campo de texto e de um botão 'adicionar'
//Se não adicionar nenhum nome aparecerá um alerta que o campo está vazio

//Os nomes adicionados devem ser exibidos em uma lista visivel na página
//Botão sortear amigo, aparecerá o resultado

// Inicia um array vazio para armazenar os nomes dos amigos
let amigos = [];

// Função chamada quando o usuário clica no botão "Adicionar"
function adicionarAmigo() {
    // Seleciona o campo de entrada (input) com id "amigo" no HTML
    const input = document.getElementById("amigo");

    // Obtém o valor digitado no input e remove espaços em branco no começo e fim
    const nome = input.value.trim();

    // Verifica se o campo está vazio (após remover os espaços)
    if (nome === "") {
        alert('Por favor, insira um nome.');
        return; // Sai da função se o campo estiver vazio
    }

    // Adiciona o nome ao array "amigos"
    amigos.push(nome);

    //Limpa o campo de entrada após adicionar
    input.value = "";

    atualizarLista();
}

//Função que atualiza a lista de amigos no HTML

function atualizarLista() {
    //Seleciona o elemento no HTML com o id 'listaAmigos'
    const lista = document.getElementById("listaAmigos")
    //Limpa todo o conteudo dentro da lista para evitar que os nomes fiquem duplicados
    lista.innerHTML = "";
    //Começa um loop que vai repetir uma vez para cada nome que tem no array 'amigos'
    for (let i = 0; i < amigos.length; i ++) {
        //Cria um novo elemento de lista <li> no HTML
        const item = document.createElement("li")
        item.textContent = amigos[i]
        lista.appendChild(item);
    }
}

// Função que sorteia um amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById("resultado")

    // Verifica se a lista tem pelo menos um amigo
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.")
        return
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length)
    const nomeSorteado = amigos[indiceSorteado]

    // Exibe o resultado na tela
    resultado.innerHTML = `<li O amigo secreto é: <strong>${nomeSorteado}</strong></li>`
}

