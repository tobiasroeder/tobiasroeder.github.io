// ======================================================
// addImageBox v1.1.0
//
// Creative Commons Attribution 4.0 International License
// https://tobiasroeder.github.io/imagebox/license
//
// https://github.com/tobiasroeder/imagebox
// Copyright 2020 ImageBox
//
// ======================================================

// this file embed always the newest version from the imagebox, the css and the js file
window.onload = function() {

    // set variables
	var ibVersion,
		addimagebox = document.querySelector('script[data-addimagebox]'),
		addimageboxVersion = document.querySelector('script[data-addimagebox-version]'),
        ie;

    // define version
    ibVersion = (addimageboxVersion ? addimageboxVersion.dataset.addimageboxVersion : '1');

    // get ie
    ie = (addimagebox ? '.' + addimagebox.dataset.addimagebox : '');

    // create link tag for the css file
	var cssLink = document.createElement('link');
	cssLink.setAttribute('rel', 'stylesheet')
	cssLink.setAttribute('type', 'text/css');
	cssLink.setAttribute('href', 'https://cdn.jsdelivr.net/gh/tobiasroeder/imagebox@' + ibVersion + '/dist/imagebox.min.css');
	document.head.appendChild(cssLink);

    // create script tag for the js file
	var jsScript = document.createElement('script');
	jsScript.setAttribute('src', 'https://cdn.jsdelivr.net/gh/tobiasroeder/imagebox@' + ibVersion + '/dist/imagebox' + ie + '.min.js');
	document.body.appendChild(jsScript);
}
