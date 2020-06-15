const handSec = document.querySelector(".second-hand");
const handMin = document.querySelector(".min-hand");
const handHour = document.querySelector(".hour-hand");

function setIntSec() {
    const now = new Date();

    const sec = now.getSeconds();
    const degSec = ((sec / 60) * 360 + 90);
    handSec.style.transform = `rotate(${degSec}deg)`;

    const min = now.getMinutes();
    const degMin = ((min / 60) * 360 + 90);
    handMin.style.transform = `rotate(${degMin}deg)`;

    const hour = now.getHours();
    const degHour = ((hour / 12) * 360 + 90);
    handHour.style.transform = `rotate(${degHour}deg)`;

}

setInterval(setIntSec, 1000);





// function digitalDateRun() {    
//     console.log(digitalDate);
// }

// let timerId;

// function digitalStart() {
//     timerId = setInterval(digitalDateRun, 1000);
//     digitalDateRun();
// }


// const digitalDate = new Date();

// function showTime() {
//     console.log(digitalDate.getHours().getMinutes().getSeconds());
// } 

// setInterval(showTime, 1000);




const nowDate = document.createElement('div');
nowDate.className = "nowDate";
nowDate.innerHTML = '<span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>';
document.body.append(nowDate);




let timerID; //зачем эта переменная

function showTimes() {
    const date = new Date();

    const hour = date.getHours();
    nowDate.children[0].innerHTML = hour;

    const minute = date.getMinutes();
    nowDate.children[1].innerHTML = minute;

    const second = date.getSeconds();
    nowDate.children[2].innerHTML = second;

}

function start() {
    timerId = setInterval(showTimes, 1000); //зачем присваивать метод переменной?
    showTimes();
}

start();
















