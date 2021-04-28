"use strict";

let timer = document.getElementById("timer");

const niceTimer = function() {
	timer.textContent --;

	if (timer.textContent == 0) {
		clearInterval(niceTimer);
		alert("Вы победили??");
	}
}

setInterval(niceTimer, 100);