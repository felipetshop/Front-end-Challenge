
const botaopag2 = document.getElementById(btn2);
const botaopag1 = document.getElementById(btn1);
const pagina1 = document.getElementById(card)
const pagina2 = document.getElementById(card2)

botaopag2.addEventListener('click',function(){
    card.style.display = 'none';
    card2.style.display = 'block';
});

botaopag1.addEventListener('click',function(){
    card2.style.display = 'none';
    card.style.display = 'block';

});