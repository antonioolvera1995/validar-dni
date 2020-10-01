arrayLeters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];






function validar() {

    let et = document.getElementById("et").value.toUpperCase();
    let text = document.getElementById("msg");

    if (et.length === 9) {
        validar2(et)
    } else {

        text.innerHTML = 'Dni no válido';
        text.style.color = "red"

    }

}


function validar2(dni) {
    let text = document.getElementById("msg");
    let vali = false;
    for (let i = 0; i < 23; i++) {

        if (arrayLeters[i] === dni.substring(8, 9)) {
            vali = true;
        }
    }

    if (vali) {
        validar3(dni)
    } else {

        text.innerHTML = 'Dni no válido';
        text.style.color = "red"
    }



}



function validar3(dni2) {

    let dni = Number(dni2.substring(0,8));
    let text = document.getElementById("msg");
    let restDiv = dni % 23;
    let letra;

    if (restDiv < 23) {
        letra = arrayLeters[restDiv];
        text.innerHTML = 'Dni válido ';
        text.style.color = "#11d639"
    } else {
        text.innerHTML = 'Dni no válido';
        text.style.color = "red"
    }

}   