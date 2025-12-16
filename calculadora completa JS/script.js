// captura os elementos mais impotantes de começo
const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

// cria uma lista para gravar todas as teclas que vão poder ser digitadas
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%"]

// Permite inserir numeros usando o mouse
document.querySelectorAll('.charKey').forEach( function (char){
    char.addEventListener('click', function(){
        const value = char.dataset.value
        input.value += value
    })
})

// adiciona a função de limpar o input onde os numeros são inseridos
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

document.getElementById('equal').addEventListener('click', function(){
    calculate()
    input.value = ''
})

input.addEventListener("keydown", function (ev){
    ev.preventDefault()  // evita o evento padrão (clicar uma tela e ela aparecer)
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }

    if (ev.key === 'Backspace'){
        // remove o último caractere (último dígito/operador)
        input.value = input.value.slice(0, -1)
        return
    }

    if (ev.key === 'Enter'){
        calculate()
        input.value = ''
        return
    }

})

//verifica se não tem erro no calculo e depois efetua ele
 function calculate(){
    try {
        const result = eval(input.value)
        resultInput.value = result
        resultInput.classList.remove('error')
    } catch (e) {
        resultInput.value = 'ERROR'
        resultInput.classList.add('error')
    }
    
 }

 document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget
    if (button.innerText === 'copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultInput.value)
    }else{
        button.innerText = 'copy'
        button.classList.remove('success')
    }
 })

document.getElementById('themeSwitcher').addEventListener('click', function(){
    if (main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--border-color','#3a3737ff') 
        root.style.setProperty('--primary-color','#0869a1ff') 
        root.style.setProperty('--font-color','#212529') 
        root.style.setProperty('--error-color','#ff0043') 
        main.dataset.theme = 'light'
    }else{
        root.style.setProperty('--bg-color','#212529')
        root.style.setProperty('--border-color','#666') 
        root.style.setProperty('--primary-color','#4dbeff') 
        root.style.setProperty('--font-color','#f1f5f9') 
        root.style.setProperty('--error-color','#ff0043') 
        main.dataset.theme = 'dark'
    }   
})                                                                                                                                                                   