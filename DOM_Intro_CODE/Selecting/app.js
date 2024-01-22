/* 

const btn = document.querySelector('#btn')
const title = document.querySelector('#title')
const body = document.querySelector('body')

function addEventListeners() {
    btn.addEventListener('click', () => {
        changeColour()
    })
}

function changeColour() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    body.style.backgroundColor = `rgb(${r},${g},${b})`
    title.innerText = `rgb(${r},${g},${b})`
}

addEventListeners() */

setTimeout( () => {
    setTimeout( () => {
        document.body.style.backgroundColor = 'green'
    }, 1000)
    document.body.style.backgroundColor = 'red'
}, 1000)
