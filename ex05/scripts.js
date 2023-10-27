
let botao1 = document.getElementsByClassName('btn1')
let botao2 = document.getElementById("btn2");
let botao3 = document.querySelector(".btn3");
let botao4 = document.getElementById("btn4");

botao1[0].addEventListener('click', () => {
    console.log("CLICOU NO BOTÃO 1")
});


botao2.addEventListener('click', () => {
    console.log("CLICOU NO BOTÃO 2 ")
});

botao3.addEventListener('click', () => {
    console.log("CLICOU NO BOTÃO 3")
});


botao4.addEventListener('click', () => {
    console.log("CLICOU NO BOTÃO 4 ")
});
