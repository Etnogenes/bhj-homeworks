"use strcit";

const modal_main = document.getElementById("modal_main");
const close = document.getElementsByClassName("modal__close modal__close_times");
const success1 = document.getElementsByClassName("btn btn_danger modal__close show-success");
const success2 = document.getElementById("modal_success");

let arr1 = Array.from(close);
let elementClose = arr1[0];

const letClose = function() {
	modal_main.classList.remove("modal_active");
	success2.classList.remove("modal_active");
}

elementClose.onclick = letClose;

let arr2 = Array.from(success1);
let elementSuccess = arr2[0];

const letSuccess = function() {
	success2.classList.add("modal_active");
}

elementSuccess.onclick = letSuccess;


