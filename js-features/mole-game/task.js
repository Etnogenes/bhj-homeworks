"use strict";

const mole = document.getElementsByClassName("hole_has-mole");
const hole = document.getElementsByClassName("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");


let arr1 = Array.from(hole);

for(let i = 0; i <= arr1.length; i++) {


	const getHole = i => document.getElementById(`hole${i}`);
}


const addKill = function() {

	if (arr1[0].className.includes("hole_has-mole")) {
		dead.textContent ++;
	} else if (arr1[0].classList.contains("hole_has-mole") == false) {
		lost.textContent ++;
	}
}

if (dead.textContent == 10) {
	alert("Вы выиграли?");
} else if (lost.textContent == 5) {
	alert("Вы проиграли!");
}


hole[0].onclick = addKill;
