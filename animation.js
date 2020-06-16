const square = document.querySelector('.square');

function timer(time) {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
}
function handleClick() {
	console.log('Working');
}

square.addEventListener('click', handleClick);
