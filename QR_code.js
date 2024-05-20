
// function for ensure the input is valid/fullfll or not 
const valid_input = () => {
	const input = [
		document.getElementById("enter-url").value,
		document.getElementById("input-dark-color").value,
		document.getElementById("input-light-color").value,
		document.getElementById("input-correct-lvl").value,
	];
	return input.every(input => input.trim() !== ""); 
}

// function for prevent from qrcode overflow
const apply_configuration = (config_fnc) => {
	const qrcode_container = document.getElementById("qrcode");
	qrcode_container.innerHTML = ""; 
	config_fnc(qrcode_container); 
} 

// main function for generating qrcode 
let gen_btn = () => {

	if (!valid_input()) {
		alert("Please fill out fields!");
		return; 
	}

	const qr_text = document.getElementById("enter-url").value;
	const qr_color_dark = document.getElementById("input-dark-color").value;
	const qr_color_light = document.getElementById("input-light-color").value;
	const qr_correct_lvl = document.getElementById("input-correct-lvl").value;

	// assign the values
	const config_fnc = (container) => {
		new QRCode(container, {
			text: qr_text,
			height: 200,
			width: 200,
			colorDark: qr_color_dark,
			colorLight: qr_color_light,
			correctLevel: QRCode.CorrectLevel[ qr_correct_lvl ]
		});
	}
	
	apply_configuration(config_fnc); 
}

document.getElementById('generate-btn').addEventListener('click', gen_btn);

// color integration 
const update_current_value = (sourceSelector, targetSelector) => {
	const sourceElement = document.querySelector(sourceSelector); 
	const targetElement = document.querySelector(targetSelector); 

	if (sourceElement.type === "color") {
		// If the source is a color input, get its value directly
		targetElement.value = sourceElement.value;
  } else {
		// For other inputs, get the text content
		targetElement.value = sourceElement.textContent;
  }
	targetElement.value = sourceElement.value; 
}

// adding event listener for update current value of color 
const selectDarkColor = document.getElementById("select-fav-dark-color");
const selectLightColor = document.getElementById("select-fav-light-color");

selectDarkColor.addEventListener("input", () => {
	update_current_value("#select-fav-dark-color", "#input-dark-color");
});

selectLightColor.addEventListener("input", () => {
	update_current_value("#select-fav-light-color", "#input-light-color");
});
// hamburger button section 
const hamburgerBtn = document.querySelector(".hamburger");
const navselector = document.querySelector(".navbar-links-wrapper");

hamburgerBtn.addEventListener('click', () => {
	const visibility = navselector.getAttribute('data-visible');
	navselector.setAttribute('data-visible', visibility === 'true' ? 'false' : 'true');
});
console.log("ritik");