"use strict";

const mole = document.getElementsByClassName("hole_has-mole");
const hole = document.getElementsByClassName("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");


let arr1 = Array.from(hole);

const addKill = function() {

	for(let i = 0; i <= arr1.length; i++) {

		if (arr1[i].className.includes("hole_has-mole")) {
			dead.textContent ++;
		} else if (dead.textContent == 10) {
			alert("Вы выиграли?");
		} else if (arr1[i].classList.contains("hole_has-mole") == false) {
			lost.textContent ++;
		} else if (lost.textContent == 5) {
			alert("Вы проиграли!");
		}
	}
}

hole.onclick = addKill;

/* Можно объявить переменную hole иначе:

let index = 0;
const hole = document.getElementById("hole${index}");   //В этой строчке почему-то не активна переменная index

const addKill = function() {
	for(index; index <= arr1.length; index++) {
 	// конструкция if
	}
}
hole.onclick = addKill;

*/