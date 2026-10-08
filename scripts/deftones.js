const listaDeTeclas = document.querySelectorAll(".tecla");
const imgCapa = document.querySelector(".capa");
let audioAtual = "";

const imagens = [
    "../assets/d1.jpg",
    "../assets/d2.jpg",
    "../assets/d3.jpg",
    "../assets/d4.jpg",
    "../assets/d5.jpg",
    "../assets/d6.jpg",
];

function tocarSom(idElementoSom){
    const elemento = document.querySelector(idElementoSom);
    if (elemento){
        if (audioAtual){
            audioAtual.pause();
            audioAtual.currentTime = 0;
        }
        elemento.play();
        audioAtual = elemento;
    }
}
listaDeTeclas.forEach((tecla, indice) => {
    const instrumento = tecla.classList[1];
    const audio = `#som_${instrumento}`;
    tecla.onclick = function (){
        tocarSom(audio);
        imgCapa.src = imagens[indice];
    };
    tecla.onkeydown = function (event){
        if (event.code === "Enter" || event.code === "Space" || event.code === "NumpadEnter") {
            tecla.classList.add('ativa');
        }
    };
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    };
});