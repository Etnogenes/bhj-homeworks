"use strict";

const sliderItem = document.getElementsByClassName("slider__item");
const sliderArrow = document.getElementsByClassName("slider__arrow");

let arrItem = Array.from(sliderItem);
let arrArrow = Array.from(sliderArrow);

let valueSlide = 0; 

function switchSlide(valueSlide) {
	
	let activeSlide = arrItem.findIndex(item => item.className == "slider__item slider__item_active");
	
	if (arrItem[activeSlide].classList.contains("slider__item_active") == true) {
		arrItem[activeSlide].classList.remove("slider__item_active");
	};

arrItem[valueSlide].classList.add("slider__item_active");
}

const switchArrow = function() {
	//найти позицию активного слайда
	let result = arrItem.findIndex(item => item.className == "slider__item slider__item_active") == valueSlide ? (valueSlide + 1) : 0;

	//вызов функции
	switchSlide(result);
}

for (let i = 0; i < arrArrow.length; i++) {
	arrArrow[i].onclick = switchArrow;
}