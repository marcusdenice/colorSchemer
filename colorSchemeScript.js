
// background gradient maker
const firstColor = document.querySelector("#fColor")
const secondColor = document.querySelector("#sColor");
const bodybg = document.querySelector("body");
document.querySelector("#divColorSchemer").style.zIndex = ("1");

secondColor.addEventListener("input", changeColor);
firstColor.addEventListener("input", changeColor);

function changeColor() {
	const printBgColor = document.querySelector("#printBgColor");
	bodybg.style.background = "linear-gradient(to right, " + firstColor.value
	+ ", " + secondColor.value + ")";
	printBgColor.value = firstColor.value
	+ ", " + secondColor.value;
}

// Select and change maker
let elementSelected;
const membersOfNoSelect = Array.prototype.slice.call(document.querySelectorAll(".noSelect *"));
const body = document.querySelector("body");

body.addEventListener("click", assignElement);
elementColor.addEventListener("input", changeElement);
elementColor2.addEventListener("input", changeElement);


// change color of elementSelected
function changeElement(clicked) {	
	const printColor = document.querySelector("#printColor");
	const backgroundSelected = document.querySelector("#backgroundSelected");
	if (backgroundSelected.checked === true) {
		elementSelected.style.background = "linear-gradient(to right, " +
		elementColor.value + ", " + elementColor2.value + ")";
		printColorBg.value = elementColor.value + ", " + elementColor2.value;
		} else { 
			elementSelected.style.color = elementColor.value;
			printColor.value = elementColor.value;
	}	
	
}

// assign clicked element to elementSelected
function assignElement(e) {
	
	if (e.target !== e.currentTarget && membersOfNoSelect.every(function(element) { 
		if (element !== e.target) {
			return true; 
		}else { return false;
		}})){
	
		elementSelected = e.target;
		document.querySelector("#printElement").value = elementSelected.nodeName;
	}
}
