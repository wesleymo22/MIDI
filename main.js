const listaTeclas = document.querySelectorAll('.tecla');

function tocaSom(id) {
    document.querySelector(id).play()
}

let count = 0

while(count < listaTeclas.length)
{
    

    listaTeclas[count].onclick = function () {
        tocaSom('#som_tecla_pom');
    }
    
    count++
}
