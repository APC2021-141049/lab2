//Backend Function Week7//

/* Intro Link Onclick */
document.getElementById("intro_body_link").addEventListener("click", introChange);


var ping_sound = document.getElementById("ping_audio");

ping_antiloop = 0;
gall_ping_antiloop = 0;
pall_ping_antiloop = 0;

function introChange(){
	document.getElementById('main_body_main').style.display = "block";
	document.getElementById('main_body_true').style.display = "block";
	document.getElementById('intro_body_main').style.display = "none";
	document.getElementById('true_intro_link').style.display = "none";
	document.getElementById('true_refer_link').style.display = "none";
	document.getElementById("true_gallery_link").addEventListener("click", gallChange);
	if (ping_antiloop == 0){
		ping_sound.play();
		ping_antiloop = 1;
		gall_ping_antiloop = 0;
		pall_ping_antiloop = 0;
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
	document.getElementById('main_body_main').style.display = "none";
	document.getElementById('main_body_true').style.display = "none";
	document.getElementById('refer_body_main').style.display = "none";
	document.getElementById('refer_body_true').style.display = "none";
	document.getElementById('true_gallery_link').style.display = "none";
	document.getElementById("true_gallery_link2").style.display = "none";
	document.getElementById("true_intro_link").addEventListener("click", introReturn);
	document.getElementById("true_refer_link").addEventListener("click", referChange);
	if (gall_ping_antiloop == 0){
		ping_sound.play();
		gall_ping_antiloop = 1;
		ping_antiloop = 0;
		pall_ping_antiloop = 0;
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
function introReturn(){
	document.getElementById('main_body_link').innerHTML = "introductions.";
	document.getElementById('main_body_link').style.left = "43.7%";
	document.getElementById('main_body_main').style.display = "block";
	document.getElementById('main_body_true').style.display = "block";
	document.getElementById('gallery_body_true').style.display = "none";
	document.getElementById('gallery_body_main').style.display = "none";
	document.getElementById('refer_body_main').style.display = "none";
	document.getElementById('refer_body_true').style.display = "none";
	document.getElementById('true_intro_link').style.display = "none";
	document.getElementById('true_refer_link').style.display = "none";
	document.getElementById("true_gallery_link2").style.display = "none";
	document.getElementById("true_gallery_link").addEventListener("click", gallChange);
	if (ping_antiloop == 0){
		ping_sound.play();
		ping_antiloop = 1;
		gall_ping_antiloop = 0;
		pall_ping_antiloop = 0;
	}
	setTimeout(()=> {
        document.getElementById("true_gallery_link").style.display = "block";
      }
      ,2000);
}
/* Gallery to References Onclick */
function referChange(){
	document.getElementById('refer_body_main').style.display = "block";
	document.getElementById('refer_body_true').style.display = "block";
	document.getElementById('main_body_main').style.display = "none";
	document.getElementById('main_body_true').style.display = "none";
	document.getElementById('true_gallery_link').style.display = "none";
	document.getElementById('true_intro_link').style.display = "none";
	document.getElementById('true_refer_link').style.display = "none";
	document.getElementById('gallery_body_main').style.display = "none";
	document.getElementById('gallery_body_true').style.display = "none";
	document.getElementById("true_gallery_link2").addEventListener("click", gallReturn);
	if (pall_ping_antiloop == 0){
		ping_sound.play();
		pall_ping_antiloop = 1;
		ping_antiloop = 0;
		gall_ping_antiloop = 0;
	}
	setTimeout(()=> {
		document.getElementById("true_gallery_link2").style.display = "block";
      }
      ,2000);
}
/* References to Gallery Onclick */
function gallReturn(){
	document.getElementById('gallery_body_main').style.display = "block";
	document.getElementById('gallery_body_true').style.display = "block";
	document.getElementById('main_body_main').style.display = "none";
	document.getElementById('main_body_true').style.display = "none";
	document.getElementById('refer_body_main').style.display = "none";
	document.getElementById('refer_body_true').style.display = "none";
	document.getElementById('true_gallery_link').style.display = "none";
	document.getElementById("true_gallery_link2").style.display = "none";
	document.getElementById("true_intro_link").addEventListener("click", introReturn);
	document.getElementById("true_refer_link").addEventListener("click", referChange);
	if (gall_ping_antiloop == 0){
		ping_sound.play();
		gall_ping_antiloop = 1;
		ping_antiloop = 0;
		pall_ping_antiloop = 0;
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