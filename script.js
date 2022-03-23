
const countdown = () =>{

  const countDate = new Date("mar 27, 2022 19:00:00").getTime(); //getTime()retorna o número de milissegundos
  const now = new Date() .getTime(); //date now
  const gap = countDate - now; //diference a dates 
  
  //How the does time work?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //calculate o gap 
  const textDay = Math.floor(gap / day); 
  const textHour = Math.floor((gap % day) /hour);
  const textMinute = Math.floor((gap % hour) /minute);
  const textSecond = Math.floor((gap % minute) /second);
  
  document.getElementById("day_time") .innerHTML = textDay;
  document.getElementById("hours_time") .innerHTML = textHour;
  document.getElementById("min_time") .innerHTML = textMinute;
  document.getElementById("sec_time") .innerHTML = textSecond;
}

setInterval(countdown, 1000);//refresh a function at specified intervals

// action modal start

function startModal() {
  const modal = document.getElementById("modal_container")
  modal.classList.add('mostrar')
}

/*   modal.addEventListener('click', (e) => {
    if (e.target = input.btn-esc){
      modal.classList.remove('mostrar')
    }
  }) */


const startModalButton = document.querySelector('.btn-primary');

startModalButton.addEventListener("click", () => { //start event 
  startModal();
})
