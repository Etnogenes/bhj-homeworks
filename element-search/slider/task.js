"use strict";

const sliderItem = document.getElementsByClassName("slider__item");
const sliderArrow = document.getElementsByClassName("slider__arrow");
const sliderDot = document.getElementsByClassName("slider__dot");


let arr1 = Array.from(sliderItem);
let arr2 = Array.from(sliderArrow);
let arr3 = Array.from(sliderDot);

let valueSlide = 0; 

function switchSlide(valueSlide) {
	
	let activeSlide = arr1.findIndex(item => item.className === "slider__item slider__item_active");
	
	if (arr1[activeSlide].classList.contains("slider__item_active") == true) {
		arr1[activeSlide].classList.remove("slider__item_active");
	};

	arr1[valueSlide].classList.add("slider__item_active");
}


const switchDots = function() {
	switchSlide();
}

const switchArrow = function() {

	//найти позицию активного слайда
	let result = (arr1.findIndex(item => item.className === "slider__item slider__item_active") > 3) ? 0 : 4;

	//вызов функции
	switchSlide(result);

}

arr2[1].onclick = switchArrow;
arr3.onclick = switchDots;