const bodyTheme = document.querySelector('body')
const root = document.querySelector(':root')

document.getElementById('switchTheme').addEventListener('click', function (){
     if (bodyTheme.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f0f2f3')
        root.style.setProperty('--letter-color', '#333333ff')
        root.style.setProperty('--hover-color', '#777676ff')
        bodyTheme.dataset.theme = 'light'
     }else{
        root.style.setProperty('--bg-color', '#232323')
        root.style.setProperty('--letter-color', '#f8f8f8ff')
        root.style.setProperty('--hover-color', '#c2c2c2')
        bodyTheme.dataset.theme = 'dark'
     }
})