//Backend Function Week7//

/* Intro Link Onclick */
document.getElementById("intro_body_link").addEventListener("click", introChange);
document.getElementById("true_gallery_link").addEventListener("click", gallChange);

var ping_sound = document.getElementById("ping_audio");
ping_antiloop = 0;
gall_ping_antiloop = 0;

function introChange(){
	document.getElementById('main_body_main').style.display = "block";
	document.getElementById('main_body_true').style.display = "block";
	document.getElementById('intro_body_main').style.display = "none";
	if (ping_antiloop == 0){
		ping_sound.play();
		ping_antiloop = 1;
	}
	setTimeout(()=> {
        document.getElementById("true_gallery_link").style.display = "block";
      }
      ,2000);
}
/* Intro to Gallery Onclick */
function gallChange(){
	document.getElementById('gallery_body_main').style.display = "block";
	document.getElementById('gallery_body_true').style.display = "block";
	document.getElementById('main_body_true').style.display = "none";
	if (gall_ping_antiloop == 0){
		ping_sound.play();
		gall_ping_antiloop = 1;
		ping_antiloop = 0;
	}
	setTimeout(()=> {
		document.getElementById("true_intro_link").style.display = "block";
      }
      ,2000);
	setTimeout(()=> {
		document.getElementById("true_refer_link").style.display = "block";
      }
      ,3000);
}
/* Gallery to Intro Onclick */