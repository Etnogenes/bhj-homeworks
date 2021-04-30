"use strict";

const dropdown__list = document.getElementsByClassName("dropdown__list");
const dropdown__item = document.getElementsByClassName("dropdown__item");
const dropdown__value = document.getElementsByClassName("dropdown__value");
const dropdown__link = document.getElementsByClassName("dropdown__link");



let arr1 = Array.from(dropdown__item);
let arr2 = Array.from(dropdown__list);
let arr3 = Array.from(dropdown__link);

let element_dropdown__list = arr2[0];


let i = 0;
let element_dropdown__link = arr3[i];

for (i; i <= arr3.length; i++) {
	element_dropdown__link = arr3[i];
}

const showDropdown = function() {
	arr2[0].classList.add("dropdown__list_active");
}

const changeValue = function() {
	dropdown__value.textContent = element_dropdown__link.textContent;
	arr2[0].classList.remove("dropdown__list_active");

}


element_dropdown__list.addEventListener("click", showDropdown);
element_dropdown__list.removeEventListener("click", showDropdown);

element_dropdown__link.onclick = changeValue;
