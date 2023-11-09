const pic = document.querySelector('.pic');
const obst = document.querySelector('.obst');

const jump = () => {
    pic.classList.add('jump');

    setTimeout(() =>{
    pic.classList.remove('jump');

    }, 700);
}

const loop = setInterval(() =>{

    const obstPosition = obst.offsetLeft;
    const picPosition = +window.getComputedStyle(pic).bottom.replace('px', '');

    if(obstPosition <= 150 && obstPosition> 0 && picPosition < 80) {
        obst.style.animation = 'none';
        obst.style.left = `${obstPosition}px`;

        pic.style.animation = 'none';
        pic.style.bottom = `${picPosition}px`;

        pic.src= "imagens/dead.png";
        pic.style.width = '90px';
        pic.style.heigth = '80px';

        clearInterval(loop)
    } 

}, 10);

document.addEventListener('keydown', jump);
