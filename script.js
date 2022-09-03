let content = document.querySelector('.menu__content');
let mobile = document.querySelector('.menu__mobile');

let screenWidth = window.screen.width;

function showContent() {
	if (screenWidth > 992) {
		content.classList.add('menu__content--active');
		mobile.classList.add('menu__mobile--active');
	}
}

document.querySelector('.menu__mobile').addEventListener('click', showContent);



