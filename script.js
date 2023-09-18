function escrevendoLetras(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra,i) => {
            setTimeout(()=>{
                elemento.innerHTML += letra; 
            },75 * i);
        });
    }
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
    setInterval(()=>ativaLetra(titulo),6000);
}
escrevendoLetras();

const ativaMenu = document.querySelector('.fa-bars');

ativaMenu.addEventListener('click',()=>{
    ativaMenu.classList.toggle('fa-x');
})
