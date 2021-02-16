
const proyecto2 = document.querySelector('#proyecto2');
const proyecto3 = document.querySelector('#proyecto3');
const video = document.querySelector('#books');
const proyecto3Video = document.querySelector('#proyecto3Video');
const videoContainer = document.querySelector('.video_ligth');
const videoContainerQuiroga = document.querySelector('.video_Quiroga_ligth');
const cerrar = document.querySelector('.close');
const cerrarProyecto3 = document.querySelector('.closeP3');




proyecto2.addEventListener('click', () => {
    videoContainer.style.transform = "translate(0%)";
    video.style.transform = "scale(1)";
});



cerrar.addEventListener('click', () => {
    videoContainer.style.transform = "translate(100%)";
    video.style.transform = "scale(0)";
});

proyecto3.addEventListener('click', () => {
    videoContainerQuiroga.style.transform = "translate(0%)";
    proyecto3Video.style.transform = "scale(1)";
});


cerrarProyecto3.addEventListener('click', () => {
    videoContainerQuiroga.style.transform = "translate(100%)";
    proyecto3Video.style.transform = "scale(0)";
});



