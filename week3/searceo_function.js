//Backend Function//
var port_works = document.getElementById("porter_audio"); 
port_works.volume = 0.7;

function playAudio1() { 
	port_works.play(); 
} 

function pauseAudio1() { 
	port_works.pause(); 
}

var mum_works = document.getElementById("mumei_audio"); 
mum_works.volume = 0.7;

function playAudio2() { 
	mum_works.play(); 
} 

function pauseAudio2() { 
	mum_works.pause(); 
}
