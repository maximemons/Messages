let currentMessage = 0;
const COLORS = [
	["#FF0000", "FFFFFF"]
];
let currentColor = [];

async function init() {
	MESSAGES = await initJSONBinAPI();
	if(MESSAGES == undefined) {
		return;
	}

	displayMessage();
}

function selectColor() {
	const randomIndex = Math.floor(Math.random() * COLORS.length);
	currentColor = COLORS[randomIndex];
	
	return currentColor;
}

function displayMessage() {
	let TITLE = MESSAGES.messages[currentMessage].title;
	let MESSAGE = MESSAGES.messages[currentMessage].message;

	console.log(TITLE, MESSAGE);
}

init();
