import{images} from "../api/image.js"
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//Thay anhr trong loi chuc
const loiChuc = $('.loi-chuc');
// loiChuc.innerHTML = 

const boxImages = $$('.box-image');
console.log(boxImages[0])
boxImages[0].innerHTML = images[3].map(renderImage).join('');
boxImages[1].innerHTML = images[2].map(renderImage).join('');
boxImages[2].innerHTML = images[1].map(renderImage).join('');
boxImages[3].innerHTML = images[0].map(renderImage).join('');

function renderImage(item) {
	let {img} = item;
	return (`
	<div class="image-family">
		<img src=${img} alt="">
	</div>
	`)
}