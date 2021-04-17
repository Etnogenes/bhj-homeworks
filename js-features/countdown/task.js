"use strict";

let timer = document.getElementById("timer");

const niceTimer = function() {
	timer.textContent --;
}

setInterval(niceTimer, 100);

/*if (timer === 0) {
	clearInterval(niceTimer);
	alert("Вы победили??");
}*/

setTimeout(() => {
	clearInterval(niceTimer);
	alert("Вы победили?");
}, timer === 0);

