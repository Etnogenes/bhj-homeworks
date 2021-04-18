"use strcit";

const modal_main = document.getElementById("modal_main");
const close = document.getElementsByClassName("modal__close");
const success1 = document.getElementsByClassName("show-success");
const success2 = document.getElementById("modal_success");

const letClose = function() {
	modal_main.className() = "modal";
}

close.onclick = letClose;


const letSuccess = function() {
	success2.className() = "modal modal_active";
}

success1.onclick = letSuccess;
