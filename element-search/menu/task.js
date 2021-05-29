"use strict";

const menuLink = document.querySelectorAll("li.menu__item a");

let arrLink = Array.from(menuLink);

for (let i = 0; i < arrLink.length; i++) {
	arrLink[i].onclick = function(click) {
		if (arrLink[i].closest(".menu__item").querySelector(".menu_sub")) {
			this.closest(".menu__item").querySelector(".menu_sub").classList.toggle("menu_active");
			return false;
		}
	}
}