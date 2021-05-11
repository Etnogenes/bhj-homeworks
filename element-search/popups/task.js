"use strict";

const modalMain = document.getElementById("modal_main");
const close = document.getElementsByClassName("modal__close modal__close_times");
const success1 = document.getElementsByClassName("btn btn_danger modal__close show-success");
const success2 = document.getElementById("modal_success");

modalMain.classList.add("modal_active");

let arr1 = Array.from(close);

for (let i = 0; i <= arr1.length; i++) {
	arr1[i].onclick = function(click) {
		this.closest('.modal').classList.remove('modal_active');
	};
	//alert(i);
}

let arr2 = Array.from(success1);  // Эту строчку интерпретатор не может определить, а должен
let elementSuccess = arr2[0];


const letSuccess = function() {
	success2.classList.add("modal_active");
	modalMain.classList.remove("modal_active");
}

elementSuccess.onclick = letSuccess;