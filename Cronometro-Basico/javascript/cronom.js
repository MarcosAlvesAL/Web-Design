//ELEMENTOS DO DOM -----------------------------------------------------------------------------
// id="minutes">00 ----  id="seconds">00 --- id="milliseconds">000

const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const millisecondsEl = document.querySelector('#milliseconds');

//Botões e Eventos -----------------------------------------------------------------------------
// id="startBtn" --- id='pauseBtn' --- id="resumeBtn" --- id="restartBtn"

//  Iniciar
const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener("click", startTimer); // quando clicar ativa a função startTimer
//  Pausar
const pauseBtn = document.querySelector('#pauseBtn');
pauseBtn.addEventListener("click", pauseTimer); // quando clicar ativa a função pauseTimer
//  Continuar
const resumeBtn = document.querySelector('#resumeBtn');
resumeBtn.addEventListener("click", resumeTimer); // quando clicar ativa a função resumeTimer
//  Reiniciar
const restartBtn = document.querySelector('#restartBtn');
restartBtn.addEventListener("click", restartTimer); // quando clicar ativa a função restartTimer

// Variaveis para iniciar as funções -----------------------------------------------------------
let interval; let minutes = 0; let seconds = 0; let milliseconds = 0; let isPaused = false;

// Funções -------------------------------------------------------------------------------------
function startTimer() {
    // formulas para fazer a contagem dos segundos e minutos
    interval = setInterval(() =>{
        if (!isPaused){
            milliseconds += 10;

            if (milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }
            if (seconds === 60){
                minutes++;
                seconds = 0;
            }            

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = millisecondsTime(milliseconds);
        }
    }, 10);
    // faz o botão de Iniciar sumir e aparecer o botão de Pausar
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
}

function resumeTimer(){
    isPaused = false;
    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function restartTimer(){
    //resetar o intervalo
    clearInterval(interval);
    isPaused = false;
    // zerar todos os elementos
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    millisecondsEl.textContent = '000';
    // zerar todas variaveis
    minutes = 0;
    seconds = 0;
    milliseconds = 0; 
    // deixar visivel botão de iniciar e tirar os outros botões
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
    startBtn.style.display = 'block'
}

// mantem a formatação de 2 digitos
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
// mantem a formatação de 3 digitos
function millisecondsTime(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}

