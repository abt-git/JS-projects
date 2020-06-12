function setInt() {
    const now = new Date();
    console.log(now.getSeconds());
}

setInterval(setInt, 1000);

// const handSec = document.querySelector(".hand second-hand");
// handSec.addEventListener('transition', setInt );