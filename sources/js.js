//hamburguer icon

let ham = document.querySelector('.hamburger');
let ind = document.querySelector('.indice');

ham.onclick = () =>{
    ind.classList.toggle('show');
}

// funcion secreta
let tr = document.querySelector('#troll');
let img = document.querySelector('.media');
let img1 = './imgs/carps/2.png';
let img2 = './imgs/carps/3.png';
let img3 = './imgs/carps/5.png';
let img4 = './imgs/carps/6.png'
let img5 = './imgs/carps/7.png'
let hihi = './imgs/carps/WhatsApp Image 2022-02-12 at 2.21.59 AM.jpeg';

let count = 0;

tr.onclick = () =>{
    count++;
    console.log(count);

    if(count == 10){
        document.querySelectorAll('.media').forEach(item =>{
            item.src = hihi;
        })
    }

    if(count > 10){
        document.querySelector('#num').src = img1;
        document.querySelector('#num1').src = img2;
        document.querySelector('#num2').src = img3;
        document.querySelector('#num3').src = img4;
        document.querySelector('#num4').src = img5;
    }
}
