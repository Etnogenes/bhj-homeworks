"use strict";

const menu_main = document.getElementsByClassName("menu menu_main");
const menu__item = document.getElementsByClassName("menu__item");
const menu__link = document.getElementsByClassName("menu__link");
const menu_sub = document.getElementsByClassName("menu menu_sub");


let arr1 = Array.from(menu__link);
let elementMenu__link;

for (let i = 0; i <= arr1.length; i++) {
	elementMenu__link = arr1[i];
}

const show_menu = function() {
	menu_sub.classList.add("menu_active");
	return false;
}


elementMenu__link.onclick = show_menu;






