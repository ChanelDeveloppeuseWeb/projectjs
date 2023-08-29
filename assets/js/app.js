const chrono = document.getElementById("chrono");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");
const start = document.getElementById("start");


let timeInterval;
let milliseconds = 0;

// Fonction d'affichage du chronomètre
function displayTimer() {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const formattedTime = padTime(hours) + ":" + padTime(minutes) + ":" + padTime(seconds);
  timer.textContent = formattedTime;
}

// Fonction pour ajouter un zéro devant les chiffres
function padTime(time) {
  return time.toString().padStart(2, "0");
}

// Fonction pour démarrer le chronomètre
function startTimer() {
  timeInterval = setInterval(() => {
    milliseconds += 1000;
    displayTimer();
  }, 1000);
  start.disabled = true;
}

// Fonction pour arrêter le chronomètre
function stopTimer() {
  clearInterval(timeInterval);
  start.disabled = false;
}

// Fonction pour réinitialiser le chronomètre
function resetTimer() {
  clearInterval(timeInterval);
  milliseconds = 0;
  displayTimer();
  start.disabled = false;
}

// Écouteurs d'événement pour les boutons
start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

// let timeInterval;

// const demarrer = () => {
//   if (estArrete) {
//     estArrete = false;
//     defilerTemps();
//   }
// };

// const arreter = () => {
//   if (!estArrete) {
//     estArrete = true;
//     clearTimeout(timeout);
//   }
// };

// const defilerTemps = () => {
//   if (estArrete) return;

//   secondes = parseInt(secondes);
//   minutes = parseInt(minutes);
//   heures = parseInt(heures);

//   secondes++;

//   if (secondes == 60) {
//     minutes++;
//     secondes = 0;
//   }

//   if (minutes == 60) {
//     heures++;
//     minutes = 0;
//   }

//   //   affichage
//   if (secondes < 10) {
//     secondes = "0" + secondes;
//   }

//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   if (heures < 10) {
//     heures = "0" + heures;
//   }

//   chrono.textContent = `${heures}:${minutes}:${secondes}`;

//   timeout = setTimeout(defilerTemps, 1000);
// };

// const reset = () => {
//   chrono.textContent = "00:00:00";
//   estArrete = true;
//   heures = 0;
//   minutes = 0;
//   secondes = 0;
//   clearTimeout(timeout);
// };

// startBtn.addEventListener("click", demarrer);
// stopBtn.addEventListener("click", arreter);
// resetBtn.addEventListener("click", reset);
