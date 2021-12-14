const startBtn = document.querySelector('#start')

const screens = document.querySelectorAll('.screen')

const timeList = document.querySelector('#time-list')

const timeEl = document.querySelector('#time')

const board = document.querySelector('#board')

const colors = ['rgb(155, 102, 102)']

// const colors = [#ecc100, #4170b4, #2b221b, #fdb8ef, #575859]

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
	event.preventDefault()
	screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
	if (event.target.classList.contains('time-btn')) {
		time = parseInt(event.target.getAttribute('data-time'))
		screens[1].classList.add('up')
		startGame()
	}
})

board.addEventListener('click', event => {
	if (event.target.classList.contains('circle')) {
		score++
		event.target.remove()
		createRandomCircle()
	}
})

function startGame() {
	setInterval(decreaseTime, 1000)
	createRandomCircle()
	setTime(time)
}

function decreaseTime() {
	if (time === 0) {
		finishGame()
	} else {
		let current = --time
		if (current < 10) {
			current = `0${current}`
		}
		setTime(current)
	}
}

function setTime(value) {
	timeEl.innerHTML = `00:${value}`
}

function finishGame() {
	timeEl.parentNode.classList.add('hide')
	board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
}

function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function createRandomCircle() {
	const circle = document.createElement('div')
	const size = getRandomNumber(10, 60)
	const { width, height } = board.getBoundingClientRect()
	const x = getRandomNumber(0, width - size)
	const y = getRandomNumber(0, height - size)

	circle.classList.add('circle')
	circle.style.width = `${size}px`
	circle.style.height = `${size}px`
	circle.style.top = `${y}px`
	circle.style.left = `${x}px`
	circle.style.background = getRandomRGB(colors)

	board.append(circle)
}

/* /.#1 */

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getRandomColor(colorList) {
	const n = colorList.length;
	return colorList[getRandomInt(n)]
}

/* /.#2 */

function getRandomRGB() {
	const r = getRandomInt(256);
	const g = getRandomInt(256);
	const b = getRandomInt(256);

	return `rgb(${r}, ${g}, ${b})`
}

function winTheGame() {
	function kill() {
		const circle = document.querySelector('.circle')

		if (circle) {
			circle.click()
		}
	}

	setInterval(kill, 42)
}