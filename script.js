let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let b = document.getElementById('clica')
let res = document.getElementById('res')

function calcular(){

    let soma = Number(peso.value/(altura.value*2))
    console.log(soma)
    res.innerHTML = "Seu IMC é de "+soma 
}