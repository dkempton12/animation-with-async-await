const square = document.querySelector('.square');

function timer(time) {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
}
async function handleClick() {
	await timer(3000);
	console.log('Working');
}

square.addEventListener('click', handleClick);
