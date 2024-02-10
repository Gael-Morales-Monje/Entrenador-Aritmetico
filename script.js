import { Negro , Verde , Rojo , Gris } from "./color";
import { Fx,Solve,StartEjercicios } from "./FX";


const price = document.querySelector("#price");
const output = document.querySelector(".price-output");
const values = document.querySelector("#value");
const values_output = document.querySelector(".value-output");
const time = document.querySelector("#time");
const time_output = document.querySelector(".time-output");

output.textContent = price.value;
values_output.textContent = values.value;
time_output.textContent = time.value;


price.addEventListener("input", function () {
    output.textContent = price.value;
});
time.addEventListener("input", function () {
    time_output.textContent = time.value;
});

values.addEventListener("input", function () {
    values_output.textContent = values.value;
});

//FX de el modo normal

const Fx = (n,k) => {
    let operation = ''
    for (let index = 1; index <= n; index++) {
        let simbol
        let number
        let x = Math.floor((Math.random() * 100) + 1)

        if (x <= 50) simbol = "+"
        else if (x > 50) simbol = "-"

        if(k==1) number = Math.floor((Math.random() * 10) + 1).toString();
        else if (k==2) number = Math.floor((Math.random() * 100) + 1).toString();
        else if (k==3) number = Math.floor((Math.random() * 1000) + 1).toString();
        else if (k==4) number = Math.floor((Math.random() * 10000) + 1).toString();
        else if (k==5) number = Math.floor((Math.random() * 100000) + 1).toString();
        let part = number + simbol
        operation += part
    }
    return operation.substring(0,operation.length - 1);
}
const Solve = (value,price,time) => {
    resul = Fx(value,price)
    pt.innerHTML = resul
    let time1 = time.value
    temporizador = setInterval(() => {
        timebox.innerHTML = time1
        if (time1 == 0) {
            clearInterval(temporizador)
            pt.innerHTML = 'se acabo el tiempo'
            pt.style.background = Rojo()
            setTimeout(() => {
                pt.style.background = Negro()
                pt.innerHTML = ''
                debugTime = false
            }, 2500);
        } else {
            time1 -= 1
        }

    }, 1000);
}
//FX de modo contra tiempo
let resul2
let correctas = 0
let incorrectas = 0
const StartEjercicios = (value,price,time) => {
    let time1 = time.value
    resul2 = Fx(value,price)
    document.getElementById('pt2').innerHTML = resul2
    const timer = setInterval(() => {
        timebox2.innerHTML= time1
        if (time1 == 0) {
            clearInterval(timer)
            pt2.innerHTML = 'se acabo el tiempo'
            pt2.style.background = Rojo()
            setTimeout(() => {
                pt2.style.background = Negro()
                pt2.innerHTML = `Correctas:${correctas} <br>
                incorrectas: ${incorrectas}`
            }, 2500);
        }
        time1 -= 1
        console.log(time1);
    }, 1000);
}




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