
var select = document.getElementById('select');
var img = document.getElementsByTagName('img');
var print = document.getElementById('print');

select.onchange = function(){

	for(var i in img){
		if(img[i].classList == select.value){
			img[i].style.display="block";
		} else {
			img[i].style.display="none";
		}

		if(select.value==0) {
			img[i].style.display="block";
		}
	}


}
