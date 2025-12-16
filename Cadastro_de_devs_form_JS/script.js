// Função para criar as Labels
function criaLabel (text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

// Função para criar os Inputs (Rdio e text)
function criaInput (id, name, value = '', type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.value = value
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTech = document.getElementById('addTehc')   // botão "Add Tecnologia"
const form = document.getElementById('formulario')   // form
const stacks = document.getElementById('stacks')     // <ul> onde as linhas vão
let desenvolvedores = []
let liCount = 1

// adicionar nova linha (cada clique cria um LI com inputs e rádios e Botão de excluir a linha)
addTech.addEventListener('click', function(){

    const newLi = document.createElement('li')
    const liIndex = liCount
    newLi.id = 'ID-' + liIndex
    newLi.className = 'liCount'
    liCount++

    // Nome da tecnologia
    const techNameLabel = criaLabel('Nome: ', 'techName-' + liIndex)
    const techNameInput = criaInput('techName-' + liIndex, 'techName', '', 'text')

    newLi.append(techNameLabel, techNameInput)

    // Rádios — com o nome o tempo de EXP de cada tecnologia.
    const radioGroupName = 'radioInput-' + liIndex // Lbel unica 
    const techRadioLabelMain = criaLabel('Qual seu tempo de experiencia? ', 'main-' + liIndex)

    const techRadioLabel1 = criaLabel('0 - 2 anos: ', 'Label-' + liIndex + '-1')
    const techRadioInput1 = criaInput('input-' + liIndex + '-1', radioGroupName, '0-2', 'radio')

    const techRadioLabel2 = criaLabel('3 - 4 anos: ', 'Label-' + liIndex + '-2')
    const techRadioInput2 = criaInput('input-' + liIndex + '-2', radioGroupName, '3-4', 'radio')

    const techRadioLabel3 = criaLabel('5+ anos: ', 'Label-' + liIndex + '-3')
    const techRadioInput3 = criaInput('input-' + liIndex + '-3', radioGroupName, '5+', 'radio')

    // botão remover linha (aparece na frente da quantidade de EXP) e acionando ele remove o LI.
    const removeRow = document.createElement('button')
    removeRow.type = 'button'
    removeRow.innerText = 'Remover Linha'
    removeRow.addEventListener('click', function(){
        stacks.removeChild(newLi)
    })

    // acrescenta tudo no LI dentro da UL criada no HTML
    newLi.append(
        document.createElement('br'),
        techRadioLabelMain,
        techRadioLabel1, techRadioInput1,
        techRadioLabel2, techRadioInput2,
        techRadioLabel3, techRadioInput3,
        removeRow
    )

    stacks.appendChild(newLi)
})

// registra o submit do usuario com as tecnologias e tempo de EXP de cada uma delas
form.addEventListener('submit', function(ev){
    ev.preventDefault()

    // pega o nome completo do input que no seu HTML tem id="name"
    const fulll = document.getElementById('name').value

    const inputRows = document.querySelectorAll('.liCount')
    let technologies = []

    inputRows.forEach(function(rows){
        // busca localmente dentro do LI atual
        const techInput = rows.querySelector('input[name="techName"]')
        const radioChecked = rows.querySelector('input[type="radio"]:checked')

        const techName = techInput ? techInput.value : '' // Operador Ternario -> (condição ? valor_se_true : valor_se_false)
        const techExp = radioChecked ? radioChecked.value : null

        technologies.push({
            nome: techName,
            techExp: techExp
        })
    })

    const newDev = {
        nomeInteiro: fulll,
        technologies: technologies
    }

    desenvolvedores.push(newDev)

    console.log('Desenvolvedores:', desenvolvedores)

    //limpar form e lista apos o submit ser clicado
    form.reset()
    stacks.innerHTML = ''
    liCount = 1
})