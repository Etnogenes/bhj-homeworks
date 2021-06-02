"use strict";

const sliderItem = document.getElementsByClassName("slider__item");
const sliderArrow = document.getElementsByClassName("slider__arrow");
//const sliderDot = document.getElementsByClassName("slider__dot");

let arrItem = Array.from(sliderItem);
let arrArrow = Array.from(sliderArrow);
//let arrDots = Array.from(sliderDot);

let valueSlide = 0; 

function switchSlide(valueSlide) {
	
	let positionActiveSlide = arrItem.findIndex(item => item.classList.contains("slider__item_active"));
	arrItem[positionActiveSlide].classList.remove("slider__item_active");
	arrItem[valueSlide].classList.add("slider__item_active");
//	arrDots[positionActiveSlide].classList.remove("slider__dot_active");
//	arrDots[valueSlide].classList.add("slider__dot_active");
}

const switchArrowLeft = function() {
	let positionActiveSlide = arrItem.findIndex(item => item.classList.contains("slider__item_active"));
	switchSlide((positionActiveSlide) > valueSlide ? (positionActiveSlide - 1) : arrItem.length - 1);
}

const switchArrowRight = function() {
	let positionActiveSlide = arrItem.findIndex(item => item.classList.contains("slider__item_active"));
	switchSlide((positionActiveSlide) < arrItem.length - 1 ? (positionActiveSlide + 1) : valueSlide);
}

arrArrow[0].onclick = switchArrowLeft;
arrArrow[1].onclick = switchArrowRight;

/*for (let i = 0; i < arrDots.length; i++) {
	arrDots[i].onclick = function(click) {
		this.closest(".slider__dots").querySelectorAll(".slider__dot").classList.remove("slider__dot_active");
		this.closest(".slider__dot").classList.add("slider__dot_active");
		let positionActiveDot = arrDots.findIndex(item => item.classList.contains("slider__dot_active"));

		switchSlide(positionActiveDot);
	}
}*/