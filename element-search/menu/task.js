"use strict";

const menuLink = document.querySelectorAll("li.menu__item a");
const menuSub = document.querySelectorAll("li.menu__item ul");


let arr1 = Array.from(menuLink);
let arr2 = Array.from(menuSub);


for (let i = 0; i <= arr1.length; i++) {
	arr1[i].onclick = function(click) {
		if (menuLink.closest(".menu_sub") /*== ul*/) {
			arr2.classList.toggle("menu_active");
		}
		return false;
	}
}
