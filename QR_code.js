const gen_btnv = document.getElementById("generate-btn");

gen_btnv.addEventListener('click', gen_fnc = () => {
	const qr_input_text = document.getElementById("enter-url").value;
	const qr_input_color_dark = document.getElementById("input-dark-color").value;
	const qr_input_color_light = document.getElementById("input-light-color").value;
	const qr_input_correct_lvl = document.getElementById("input-correct-lvl").value;

	var qr_text = qr_input_text;
	var qr_color_dark = qr_input_color_dark;
	var qr_color_light = qr_input_color_light;
	var qr_correct_lvl = qr_input_correct_lvl;
	var qrcode = new QRCode(document.getElementById("qrcode"), {
		text: qr_text,
		height: 200,
		width: 200,
		colorDark: qr_color_dark,
		colorLight: qr_color_light,
		correctLevel: QRCode.CorrectLevel[ qr_correct_lvl ]
	});
	return qrcode;
})

var qrcode_clear_fnc = () => {
	qrcode.clear();
}

const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerCloseBtn = document.querySelector(".hamburger-close");
const navselector = document.querySelector(".navbar-links-wrapper");

hamburgerBtn.addEventListener('click', () => {
	const visibility = navselector.getAttribute('data-visible');
	navselector.setAttribute('data-visible', visibility === 'true' ? 'false' : 'true');
});
