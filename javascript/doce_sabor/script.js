function adicionarDoceNaLista() {
    const elemento = document.getElementById('elemento')
    if (elemento.value === '') {
        alert("Por favor, digite o nome de um doce!")
    } else {
        console.log(`Doce digitado: ${elemento.value}`)

        const novaLista = document.createElement('li')
        novaLista.textContent = elemento.value
        const ul = document.getElementById('lista')
        ul.appendChild(novaLista)
        elemento.value = ''
    }
}

function ativarAltoContraste() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}

function desativarAltoContraste() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}