const btnRu =document.getElementById('btn-ru'),
	  btnEn =document.getElementById('btn-eng');

// const scrollBtn =document.querySelector('#scrollImage')

// scrollBtn.onclick = () => {
// 	window.scrollTo(0, 0);
// }


const ruSlide = () => {
    window.location.href = 'index_ru.html';
}

const enSlide = () => {
    window.location.href = 'index.html';
}

btnRu.addEventListener('click', () => { 
	ruSlide();
});

btnEn.addEventListener('click', () => { 
	
    enSlide();
});