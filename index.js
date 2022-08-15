
function getTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const h = document.getElementById('hour')
    h.innerText = hours;
    const m = document.getElementById('min')
    m.innerText = minutes;
    const s = document.getElementById('sec')
    s.innerText = seconds;
}
setInterval(getTime, 1000)

