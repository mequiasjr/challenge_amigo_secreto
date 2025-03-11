// Lista que armazenará os amigos adicionados
let listaAmigos = [];


//Adiciona um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo"); // Obtém o campo de entrada
    const nome = input.value.trim(); // Remove espaços extras do nome

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    listaAmigos.push(nome); // Adiciona o nome à lista
    input.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a exibição da lista na tela
}

//Atualiza a lista exibida na tela
function atualizarLista() {
    const ul = document.getElementById("listaAmigos"); // Obtém a lista
    ul.innerHTML = ""; // Limpa a lista antes de atualizar

    if (listaAmigos.length === 0) {
        ul.innerHTML = "<li>Nenhum amigo adicionado.</li>";
        return;
    }

    const fragment = document.createDocumentFragment();
    listaAmigos.forEach(nome => {
        const li = document.createElement("li"); // Cria um elemento de lista
        li.textContent = nome; // Define o nome no item da lista
        fragment.appendChild(li); // Adiciona ao fragmento
    });
    ul.appendChild(fragment); // Adiciona todos os itens à lista de uma só vez
}

//Sorteia um amigo da lista e exibe o resultado
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome.");
        return;
    }

    // Escolhe um nome aleatório da lista
    const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    
    // Exibe o resultado na tela
    document.getElementById("resultado").innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
    
    limparListaExibida(); // Limpa a exibição da lista, mas mantém os dados salvos
}

//Limpa a exibição da lista de amigos sem apagar os dados salvos
function limparListaExibida() {
    document.getElementById("listaAmigos").innerHTML = "";
}
