const valid_input = () => {
	const input = [
		document.getElementById("enter-url").value,
		document.getElementById("input-dark-color").value,
		document.getElementById("input-light-color").value,
		document.getElementById("input-correct-lvl").value,
	];
	return input.every(input => input.trim() !== ""); 
}

const apply_configuration = (config_fnc) => {
	const qrcode_container = document.getElementById("qrcode");
	qrcode_container.innerHTML = ""; 
	config_fnc(qrcode_container); 
} 

const gen_btn = () => {

	if (!valid_input()) {
		alert("Please fill out fields!");
		return; 
	}

	const qr_text = document.getElementById("enter-url").value;
	const qr_color_dark = document.getElementById("input-dark-color").value;
	const qr_color_light = document.getElementById("input-light-color").value;
	const qr_correct_lvl = document.getElementById("input-correct-lvl").value;
	let container = document.getElementById("qrcode");

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
	return qrcode;
}

document.getElementById('generate-btn').addEventListener('click', gen_btn);

const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerCloseBtn = document.querySelector(".hamburger-close");
const navselector = document.querySelector(".navbar-links-wrapper");

hamburgerBtn.addEventListener('click', () => {
	const visibility = navselector.getAttribute('data-visible');
	navselector.setAttribute('data-visible', visibility === 'true' ? 'false' : 'true');
});
