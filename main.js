const listaTeclas = document.querySelectorAll('.tecla');

function tocaSom(id) {
    const elemento = document.querySelector(id);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

for(let i = 0; i < listaTeclas.length; i++)
{
    const tecla =  listaTeclas[i];
    const instrumento = tecla.classList[1];
    const som = `#som_${instrumento}`;

    listaTeclas[i].onclick = function () {
        tocaSom(som);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
