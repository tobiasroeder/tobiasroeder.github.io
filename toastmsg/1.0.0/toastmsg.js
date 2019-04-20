// ======================================================
// ToastMsg v1.0.0
//
// Creative Commons Attribution 4.0 International License
// https://tobiasroeder.github.io/toastmsg/license
//
// https://github.com/tobiasroeder/toastmsg
// Copyright 2019 ToastMsg
//
// ======================================================

console.log('ToastMsg v1.0.0\nhttp://tobiasroeder.github.io/toastmsg');

// create style tag with the default design for the toast
var toastMsgStyle = document.createElement('style');
toastMsgStyle.setAttribute('type', 'text/css');
toastMsgStyle.innerHTML = "toastmsg { position: fixed; bottom: -50px; max-width: 30vw; margin: 20px; padding: 10px 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.5); border-radius: 5px; font-family: 'Helvetica Neue', 'Helvetica', sans-serif; font-size: 16px; transition: ease-in-out 0.2s; vertical-align: middle; } toastmsg a { color: #3BDEFF; text-decoration: none; } #toastmsg a:hover { text-decoration: underline; } @media (max-width: 678px) { toastmsg { max-width: calc(100vw - 20px); } } ";
document.head.appendChild(toastMsgStyle);

// create toast element
var toastMsgElmt = document.createElement('toastmsg');
document.body.appendChild(toastMsgElmt);

function checkToastMsgHeight() {
	return document.getElementsByTagName('toastmsg')[0].clientHeight;
}

// ToastMsg
function toastMsg(tm) {
	
	// var...
	var toastMsgElement = document.getElementsByTagName('toastmsg')[0],
		toastStyle = toastMsgElement.style;
	
	// if...
	if (tm.bgColor ? toastStyle.backgroundColor = tm.bgColor : toastStyle.backgroundColor = '#242424');
	if (tm.color ? toastStyle.color = tm.color : toastStyle.color = '#fff');
	if (tm.fontSize) toastStyle.fontSize = tm.fontSize;
	if (tm.fontFamily) toastStyle.fontFamily = tm.fontFamily;
	if (tm.value) toastMsgElement.innerHTML = tm.value;
	if (tm.position == 'right' ? toastStyle.right = '0' : toastStyle.left = '0');
	var toastDuration = (tm.duration ? toastDuration = tm.duration : toastDuration = 3000);
	
	// display toast
	toastMsgElement.style.bottom = '0';

	// hide toast
	window.setTimeout(function() {
		toastMsgElement.style.bottom = '-' + (checkToastMsgHeight() + 20) + 'px';
	}, toastDuration);
	
};