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