'use strict';

// Run line template
const runline = document.querySelectorAll('.run-line');
const template = document.querySelector('#run-line');

runline.forEach((el) => {
	let contents = template.content.cloneNode(true);
	el.appendChild(contents);
});

// Stages slider
const prevStage = document.querySelector('.stages__prev');
const nextStage = document.querySelector('.stages__next');
const stagesContent = document.querySelector('.stages__list');

let stageShift = 0;

function prevStageSlide() {
	if (stageShift <= 4 && stageShift != 0) {
		stageShift--;
		let num = stageShift * 100;
		stagesContent.style.transform = `translateX(-${num}%)`;
		// Active button style
		let stagesBtnActive = document.querySelector('.stages__slide-btn_active');
		let prevBtn = stagesBtnActive.previousElementSibling;
		if (prevBtn !== null) {
			stagesBtnActive.classList.remove('stages__slide-btn_active');
			stagesBtnActive.previousElementSibling.classList.add('stages__slide-btn_active');
		}
	}
}
prevStage.addEventListener('click', prevStageSlide);

function nextStageSlide() {
	if (stageShift <= 3) {
		stageShift++;
		let num = stageShift * 100;
		stagesContent.style.transform = `translateX(-${num}%)`;
		// Active button style
		let stagesBtnActive = document.querySelector('.stages__slide-btn_active');
		let nextBtn = stagesBtnActive.nextElementSibling;
		if (nextBtn !== null) {
			stagesBtnActive.classList.remove('stages__slide-btn_active');
			stagesBtnActive.nextElementSibling.classList.add('stages__slide-btn_active');
		}
	}
}
nextStage.addEventListener('click', nextStageSlide);

// Members slider
const prevMember = document.querySelector('.members__prev');
const nextMember = document.querySelector('.members__next');
const currentCount = document.querySelector('.members__curr-count');
const maxCount = document.querySelector('.members__max-count');
const sliderContent = document.querySelector('.members__content');

let memberShift = 0;

function resetSlides() {
	let winWidth = window.innerWidth;
	if (winWidth < 1366) {
		maxCount.textContent = '6';
	} else {
		sliderContent.style.transform = `translateX(0)`;
		memberShift = 0;
		maxCount.textContent = '2';
	}
}
window.addEventListener('resize', resetSlides);
resetSlides();

function prevSlide(n) {
	if (memberShift <= n && memberShift != 0) {
		memberShift--;
		let num = memberShift * 100;
		sliderContent.style.transform = `translateX(-${num}%)`;
		currentCount.textContent = memberShift + 1;
	}
}

function nextSlide(n) {
	if (memberShift <= n - 1) {
		memberShift++;
		let num = memberShift * 100;
		sliderContent.style.transform = `translateX(-${num}%)`;
		currentCount.textContent = memberShift + 1;
	} else if (memberShift === n) {
		memberShift = 0;
		sliderContent.style.transform = `translateX(0)`;
		currentCount.textContent = memberShift + 1;
	}
}

function prevMembers() {
	let winWidth = window.innerWidth;
	// Slide numbers for mobile/desktop
	if (winWidth < 1366) {
		let n = 6;
		prevSlide(n);
	} else {
		let n = 2;
		prevSlide(n);
	}
}
prevMember.addEventListener('click', prevMembers);

function nextMembers() {
	let winWidth = window.innerWidth;
	// Slide numbers for mobile/desktop
	if (winWidth < 1366) {
		let n = 5;
		nextSlide(n);
	} else {
		let n = 1;
		nextSlide(n);
	}
}
nextMember.addEventListener('click', nextMembers);

// Slider timer
let i = 1;
function myLoop() {  
	setInterval(() => {
		if (i <= 6) {
			i++;
      nextMembers();
    } else {
			i = 1;
		}
  }, 4000);
}

myLoop();