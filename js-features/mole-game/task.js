"use strict";

const mole = document.getElementsByClassName("hole_has-mole");
const hole = document.getElementsByClassName("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let arr1 = Array.from(hole);

for(let i = 0; i <= 8; i++) {

	arr1[i].onclick = function(click) {
		if (arr1[i].className.includes("hole_has-mole")) {
			dead.textContent ++;
		} else if (arr1[i].classList.contains("hole_has-mole") == false) {
			lost.textContent ++;
		}
		if (dead.textContent == 10) {
			alert("Вы выиграли?");
			lost.textContent = 0;
			dead.textContent = 0;
		} else if (lost.textContent == 5) {
			alert("Вы проиграли!");
			dead.textContent = 0;
			lost.textContent = 0;
		}
	}
}

