// Generator functions

function getRandomLower() {
	const lowercases = "abcdefghijklmnopqrstuvwxyz";
	return lowercases[Math.floor(Math.random() * lowercases.length)];
}

function getRandomUpper() {
	const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return uppercases[Math.floor(Math.random() * uppercases.length)];
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = "~!@#$%^&*+=";
	return symbols[Math.floor(Math.random() * symbols.length)];
}
