//Backend Function Week7//

/* Intro Link Onclick */
var intro_hi = document.getElementById('intro_body_link');
intro_hi.onclick = intro_hi_change;

var ping_sound = document.getElementById("ping_audio");
ping_antiloop = 0;

function intro_hi_change(){
	document.getElementById('main_body_main').style.display = "block";
	document.getElementById('main_body_true').style.display = "block";
	document.getElementById('intro_body_main').style.display = "none";
	if (ping_antiloop == 0){
		ping_sound.play();
		ping_antiloop = 1;
	}

}