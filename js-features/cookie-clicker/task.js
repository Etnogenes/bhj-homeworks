"use strict";

const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("speed__counter");

let start = Date.now();
const counterBoost = function() {
 counter.textContent ++;

	if (counter.textContent % 2) {
		cookie.width = 230;
		cookie.height = 150;
	} else {
		cookie.width = 200;
		cookie.height = 127;
	}

speed.textContent = (counter.textContent * 1000 / (Date.now() - start)).toFixed(2);

}

cookie.onclick = counterBoost;


