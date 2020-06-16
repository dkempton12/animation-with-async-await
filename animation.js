const square = document.querySelector('.square');

function timer(time) {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
}
async function handleClick() {
	const el = event.target;

	await timer(2000);
	el.classList.add('green-background');

	await timer(1000);
	el.classList.add('turn-into-circle');

	await timer(1000);
	el.classList.add('add-border');

	await timer(1000);
	el.classList.add('hide');
}

square.addEventListener('click', handleClick);
