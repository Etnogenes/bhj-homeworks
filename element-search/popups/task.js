"use strcit";

const modal_main = document.getElementById("modal_main");
const close = document.getElementsByClassName("modal__close");
const success1 = document.getElementsByClassName("show-success");
const success2 = document.getElementById("modal_success");

const letClose = function() {
	modal_main.classList.remove("modal_active");
}

close.onclick = letClose;


const letSuccess = function() {
	success2.classList.add("modal_active");
}

success1.onclick = letSuccess;



/*className, равно как и classList.add/remove, почему-то не помогают.
Я знаю, что это псевдомассив. Неужели, свойство не соответствует атрибуту?*/