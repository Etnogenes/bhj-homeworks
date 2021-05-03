"use strict";

const menu_main = document.getElementsByClassName("menu menu_main");
const menu__item = document.querySelectorAll("ul.menu menu_main li");
const menu__link = document.querySelectorAll("li.menu__item a");
const menu_sub = document.querySelectorAll("li.menu__item ul");


let arr1 = Array.from(menu__item);
let arr2 = Array.from(menu__link);
let arr3 = Array.from(menu_sub);

let elementMenu__link = arr2[1];

for (let i = 0; i <= arr2.length; i++) {
	if (menu__item.closest("ul") == true) {
		const show_menu = function() {
			menu_sub.classList.toggle("menu_active");
			return false;
		}
	}
}


elementMenu__link.onclick = show_menu;

