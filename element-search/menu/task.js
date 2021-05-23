"use strict";

const menuLink = document.querySelectorAll("li.menu__item a");
const menuSub = document.querySelectorAll("li.menu__item ul");
const menuItem = document.getElementsByClassName("menu__item");


let arrLink = Array.from(menuLink);
let arrSub = Array.from(menuSub);
let arrItem = Array.from(menuItem);

for (let i = 0; i < arrLink.length; i++) {
	arrLink[i].onclick = function(click) {
		if (arrLink[i].closest(".menu__item") && arrItem[i].contains(arrSub[i])) {
			this.closest(".menu__item").contains(arrSub[0].className.toggle("menu_active"));
		}
		return false;
	}
}
