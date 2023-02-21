const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
const count = document.getElementById('count')
let second = 0
let timerId

const addSecound = () => {
    second += 0.1
    second = Number(second.toFixed(1))
    
    
    //秒から時、分、秒を求める
    const hour = Math.floor(second/3600)
    const minute = Math.floor((second%3600)/60)
    const second1 = Math.floor(second%60)
    const msec = Math.floor((second - Math.floor(second))*10)
    count.innerText = `${hour}:${minute}:${second1}:${msec}`
}

start.addEventListener("click", () => {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
    
    timerId = setInterval(addSecound, 100)
})

stop.addEventListener("click", () => {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
    
    clearInterval(timerId)
})

reset.addEventListener("click", () => {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
    
    clearInterval(timerId)
    second = 0;
    
    count.innerText = "0:0:0:0"
})

