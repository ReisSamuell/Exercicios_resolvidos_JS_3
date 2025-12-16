function add_player(){
    const nome = document.getElementById('nome').value
    const posicao = document.getElementById('posicao').value
    const numero = document.getElementById('numero').value

    const confirmacao = confirm("Deseja realmente escalar: \n" + 
    "Nome: " + nome +
    "\nPosição: " + posicao +
    "\nNumero: " + numero +
    "\nComo jogador do seu time ?"
    )

    if (confirmacao){
        const lista_jogadores = document.getElementById('lista_escalados')
        const jogador = document.createElement('li')

        jogador.id = 'jogador-' + numero
        jogador.innerText = nome + ",  " + posicao + "  Nº(" + numero + ")"
        lista_jogadores.appendChild(jogador)
    }

    document.getElementById('nome').value = ""
    document.getElementById('posicao').value = ""
    document.getElementById('numero').value = ""
}

function remove_player(){
    const number = document.getElementById('numero_remover').value

    const lista = document.getElementById('lista_escalados')
    const jogador_remover = document.getElementById('jogador-' + number)

    if (!jogador_remover) {
        alert('Jogador não encontrado')
        document.getElementById('numero_remover').value = ''
        return
        
    }

    const confirmacao = confirm(
        'Deseja realmente remover o jogador ' + jogador_remover.innerText + ' ?'
    )

    if (confirmacao){
        lista.removeChild(jogador_remover)
        alert('Jogador removido com sucesso!')
    }

    document.getElementById('numero_remover').value = ''
}