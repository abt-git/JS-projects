const handSec = document.querySelector(".second-hand");
const handMin = document.querySelector(".min-hand");
const handHour = document.querySelector(".hour-hand");

function setIntSec() {
    const now = new Date();
    
    const sec = now.getSeconds();
    const degSec = ((sec/60)*360 + 90);
    handSec.style.transform = `rotate(${degSec}deg)`;
    console.log(sec);

    const min = now.getMinutes();
    const degMin = ((min/60)*360 + 90);
    handMin.style.transform = `rotate(${degMin}deg)`;

    const hour = now.getHours();
    const degHour = ((hour/12)*360 + 90);
    handHour.style.transform = `rotate(${degHour}deg)`;

    }

setInterval(setIntSec, 1000);

setInterval();
    




    
