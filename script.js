const input = document.querySelector('.input')
const Start = document.getElementById('btn2')
const btn = document.getElementById('btn')
const cmp = document.getElementById('cmp')
let pt = document.getElementById('pt')
let timebox = document.querySelector('.time')
let timebox2 = document.querySelector('.time2')
let temporizador = ''
let resul = ''
let debugTime = false

btn.addEventListener("click", () => {
    if (!debugTime) {
        debugTime = true
        Solve(values.value,price.value,time)
    }
    else if (debugTime) {
        clearInterval(temporizador)
        Solve(values.value,price.value,time)
    }
})

cmp.addEventListener("click", () => {
    let auth = eval(resul)
    if (input.value == auth) {
        pt.style.background = Verde()
        clearInterval(temporizador)
        setTimeout(() => {
            pt.style.background = Negro()
            pt.innerHTML = ''
            debugTime = false
            input.value = ''
        }, 500);
    } else {
        pt.style.background = Rojo()
        setTimeout(() => {
            pt.style.background = Negro()
            input.value = ''
        }, 500);
    }
})

document.querySelector('.Contra-time').addEventListener('click', () => {
    document.querySelector('.container').style.background = Gris()
    document.querySelector('.box').style.display = "none"
    document.querySelector('.time').style.display = "none"
    document.querySelector('.box2').style.display = "block "
})

Start.addEventListener("click", () => {
    StartEjercicios(values.value,price.value,time)
})

const input2 = document.getElementById('input2')

document.getElementById('cmp2').addEventListener("click", () => {
    let auth = eval(resul2)
    console.log(auth);
    if (input2.value == auth) {
        pt2.style.background = Verde()
        correctas += 1
        clearInterval(temporizador)
        setTimeout(() => {
            pt2.style.background = Negro()
            resul2 = Fx(values.value,price.value)
            pt2.innerHTML = resul2
            debugTime = false
            input2.value = ''
            
        }, 500);
    } else {
        incorrectas += 1
        pt2.style.background = Rojo()
        setTimeout(() => {
            pt2.style.background = Negro()
            input2.value = ''
        }, 500);
    }
})