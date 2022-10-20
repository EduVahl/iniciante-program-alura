const listaTeclas = document.querySelectorAll('.tecla');
const listaSons = document.querySelectorAll('.som');

for(let i = 0; i < listaTeclas.length; i++){
    listaTeclas[i].onclick = function (){listaSons[i].play();
    }
 
    listaTeclas[i].onkeydown = function (evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){ listaTeclas[i].classList.add('ativa')};
    }

    listaTeclas[i].onkeyup = function (){listaTeclas[i].classList.remove('ativa');
    }   
}
