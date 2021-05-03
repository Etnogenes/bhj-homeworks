"use strict";

const slider__item = document.getElementsByClassName("slider__item");
const slider__arrow = document.getElementsByClassName("slider__arrow");
const slider__dot = document.getElementsByClassName("slider__dot");


let arr1 = Array.from(slider__item);
let arr2 = Array.from(slider__arrow);
let arr3 = Array.from(slider__dot);

let element_arr2 = arr2[0];
let element_arr3 = arr3[1];

const switch_slider__arrow = function() {
	for(let i = 0; i <= arr1.length; i++) {
		arr1[i].classList.remove("slider__item_active");
		arr1[i + 1].classList.add("slider__item_active");
	}
}


const switch_slider__dot = function() {

}


element_arr2.onclick = switch_slider__arrow;
element_arr3.onclick = switch_slider__dot;




