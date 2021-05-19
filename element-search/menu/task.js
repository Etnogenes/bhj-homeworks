"use strict";

const menuLink = document.querySelectorAll("li.menu__item a");
const menuSub = document.querySelectorAll("li.menu__item ul");
const menuItem = document.getElementsByClassName("menu__item");


let arr1 = Array.from(menuLink);
let arr2 = Array.from(menuSub);
let arr3 = Array.from(menuItem);

for (let i = 0; i < arr1.length; i++) {
	arr1[i].onclick = function(click) {
		if (arr3[i].contains(arr2[0]) == true) {
			arr2[0].classList.toggle("menu_active");
		}
		return false;
	}
}
