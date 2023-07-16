let dia = document.getElementById('dia');
const check = document.getElementById('date');
const display = document.getElementById('display');
const date = new Date('May 14, 2022 00:00:00');
let time = 86400000;

check.onchange = () => {
    let d = new Date(`${check.value}T00:00:00`);
    let calc = ((d.getTime() - date.getTime())/time).toFixed(0);
    display.innerHTML = (calc*1)+1;
}

const makeMath = (date) => {
    let calc = Date.now() - date.getTime();
    console.log(calc);
    return (calc/time).toFixed(0);
}

dia.innerHTML = makeMath(date);