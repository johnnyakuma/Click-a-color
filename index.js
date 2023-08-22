//software 
//Variaveis
const colors =  ['Red' , 'Blue', 'Black' ,'Yellow', 'Purple', 'Green' ]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//No Click
btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    console.log(randomColor)
    color.textContent = colors[randomColor]
})

//Gerar os numeros aleatorios
function getRandomColor(){
    return Math.floor( Math.random() * colors.length)
}