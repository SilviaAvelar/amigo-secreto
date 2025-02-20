let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo === "") {
        alert("Por favor digite um nome.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    document.getElementById('amigo').value = '';
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para fazer o sorteio.");
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(`O amigo secreto sorteado é: ${amigoSorteado}`);
}

function exibirResultado(resultado) {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = ''; 
    const li = document.createElement('li');
    li.textContent = resultado; 
    resultadoElemento.appendChild(li);
}
