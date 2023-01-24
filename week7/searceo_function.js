//Backend Function Week5//
var port_works = document.getElementById("porter_audio"); 
var hiddenbooey = document.getElementById("hidehobby_booey");

port_works.volume = 0.7;

port_song = 0;
mum_song = 0;

function playAudio1() { 
	port_song = 1;
	port_works.play();
	if (mum_song == 1){
		document.getElementById("profile_img2").src="image/mumport_picture.png";
	} else {
	document.getElementById("profile_img2").src="image/porter_picture.png";
	}
} 

function pauseAudio1() {
	port_song = 0;
	port_works.pause();
	if (mum_song == 1){
		document.getElementById("profile_img2").src="image/mumei_picture.png";
	} else {
	document.getElementById("profile_img2").src="image/profile_picture.png";
	}
}

var mum_works = document.getElementById("mumei_audio"); 
mum_works.volume = 0.7;

function playAudio2() { 
	mum_song = 1;
	mum_works.play();
	if (port_song == 1){
		document.getElementById("profile_img2").src="image/mumport_picture.png";
	} else {
	document.getElementById("profile_img2").src="image/mumei_picture.png";
	}
} 

function pauseAudio2() { 
	mum_song = 0;
	mum_works.pause();
	if (port_song == 1){
		document.getElementById("profile_img2").src="image/porter_picture.png";
	} else {
	document.getElementById("profile_img2").src="image/profile_picture.png";
	}
}

function playAudio3() {
	hiddenbooey.play();
}
	