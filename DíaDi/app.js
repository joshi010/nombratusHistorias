let dia = document.getElementById('dia');
const check = document.getElementById('date');
const display = document.getElementById('display');
const dame = document.getElementById('dame');
const date = new Date('May 14, 2022 00:00:00');
let time = 86400000;

check.onchange = () => {
    let d = new Date(`${check.value}T00:00:00`);
    let calc = ((d.getTime() - date.getTime())/time).toFixed(0);
    display.innerHTML = (calc*1)+1;
}

const makeMath = (date) => {
    let d = new Date();
    const dateString = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
    d.setHours(0,0,0);
    let calc = d.getTime() - date.getTime();
    dia.innerHTML = ((calc/time).toFixed(0)*1)+1;
    dame.innerHTML = dateString;
}


makeMath(date);
setInterval(makeMath, 5000, date);