arrayLeters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
arrayLetersNie = ['X', 'Y', 'Z']

let block = false;

function enter(e) {

    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        validar();

        if (!block) {
            document.getElementById("button").classList.add("on-button");
            document.getElementById("button").style.backgroundColor = "#ffff";
            block = true;
            setTimeout(function () {
                block = false;
                document.getElementById("button").classList.remove("on-button");
                document.getElementById("button").style.backgroundColor = "rgba(252, 252, 252, 0.582)";
            }, 300);
        }
    }

}



function validar() {

    let et = document.getElementById("et").value.toUpperCase();
    let text = document.getElementById("msg");

    if (et.length === 9) {
        validar1(et)
    } else {

        text.innerHTML = 'Dni no válido';
        text.style.color = "red"

    }

}


function validar1(dni) {


    for (let i = 0; i < 4; i++) {

        switch (arrayLetersNie[i]) {

            case 'X':
                dni = `0${dni.substring(1,9)}`;
                break;

            case 'Y':
                dni = `1${dni.substring(1,9)}`;
                break;


            case 'Z':
                dni = `2${dni.substring(1,9)}`;
                break;


            default:
                break;
        }

    }




    validar2(dni)
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

    let dni = Number(dni2.substring(0, 8));
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