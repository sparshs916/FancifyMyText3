// Function for the alert
function showAlert() {
	alert("Hello, world!");
}

// Function for the Bigger button
// Function for the Bigger button
function biggerText() {
	document.getElementById("userText").style.fontSize = "24pt";
	alert("Hello, world!");
}


// Function for FancyShmancy and BoringBetty radio buttons
function changeStyle() {
	if (document.getElementById("fancyRadio").checked) {
		document.getElementById("userText").style.fontWeight = "bold";
		document.getElementById("userText").style.color = "blue";
		document.getElementById("userText").style.textDecoration = "underline";
	} else if (document.getElementById("boringRadio").checked) {
		document.getElementById("userText").style.fontWeight = "normal";
		document.getElementById("userText").style.color = "black";
		document.getElementById("userText").style.textDecoration = "none";
	}
}

// Function for the Moo button
function mooText() {
	var textArea = document.getElementById("userText");
	var sentences = textArea.value.split(".");
	for (var i = 0; i < sentences.length; i++) {
		var words = sentences[i].split(" ");
		words[words.length - 1] = words[words.length - 1] + "-Moo";
		sentences[i] = words.join(" ");
	}
	textArea.value = sentences.join(".").toUpperCase();
}

// Event handlers
document.getElementById("biggerButton").onclick = biggerText;
document.getElementById("fancyRadio").onchange = changeStyle;
document.getElementById("boringRadio").onchange = changeStyle;
document.getElementById("mooButton").onclick = mooText;
