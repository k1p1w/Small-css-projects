const slides = document.querySelectorAll('.slide')

const slider2color = {
	'color-1': "#575859",
	'color-2': "#fdb8ef",
	'color-3': "#2b221b",
	'color-4': "#4170b4",
	'color-5': "#ecc100"
}

const bodyObj = document.body;

for (const slide of slides) {
	slide.addEventListener('click', () => {
		clearActiveClasses()

		document.body.style.backgroundColor = slider2color[slide.id]

		slide.classList.add('active')
	})
}

function clearActiveClasses() {
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}




