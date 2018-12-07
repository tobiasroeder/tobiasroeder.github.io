// ======================================================
// ImageBox v1.0.1 (addimagebox.js)
//
// Creative Commons Attribution 4.0 International License
// https://tobiasroeder.github.io/imagebox/license
//
// https://github.com/tobiasroeder/imagebox
// Copyright 2018 ImageBox
//
// ======================================================

// this file embed always the newest version from the imagebox, the css and the js file
window.onload = function() {
    var ibVersion = "1.0.0";
    var filePath = "https://tobiasroeder.github.io/imagebox/"+ibVersion+"/imagebox.min.";

    // create link tag for the css file
	var cssLink = document.createElement("link");
	cssLink.setAttribute("rel", "stylesheet")
	cssLink.setAttribute("type", "text/css");
	cssLink.setAttribute("href", filePath+"css");
	document.head.appendChild(cssLink);

    // create link tag for the css file
	var jsScript = document.createElement("script");
	jsScript.setAttribute("src", filePath+"js");
	document.body.appendChild(jsScript);
}
