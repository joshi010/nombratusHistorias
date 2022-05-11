//hamburguer icon

let ham = document.querySelector('.hamburger');
let ind = document.querySelector('.indice');

ham.onclick = () =>{
    ind.classList.toggle('show');
}

// funcion secreta
let tr = document.querySelector('#troll');
let img = document.querySelector('.media');
let img1 = './imgs/carps/IMG_1082.JPG';
let img2 = './imgs/carps/IMG_1104.JPG';
let img3 = './imgs/carps/IMG_1108.JPG';
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
    }
}
