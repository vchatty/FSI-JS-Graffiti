let header = document.querySelector('#page-header')

header.style.textAlign = "left";
header.style.color = 'hotpink';
header.style.fontFamily = 'Impact';

let dogImages = document.querySelectorAll('.dog-image')

for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'; 
		dogImages[i].style.border = '10px solid hotpink';
}
dogImages[0].style.transform = "rotate(180deg)";
dogImages[2].style.transform = "rotate(180deg)";

let dogNames = document.querySelectorAll('.dog-name')
	for(let i=0; i < dogNames.length; i++){
		dogNames[i].style.color= 'hotpink'
	}

let pip = document.querySelector('.pip')
	pip.style.color= 'blue'
	

let footerText = document.querySelectorAll('.footer')

for(let i = 0; i < footerText.length; i++) {
	footerText[i].style.color= 'hotpink'; 
	footerText[i].style.fontFamily= 'Impact'; 
}

let dogImgSize = document.querySelector('.imagesize')

for(let i = 0; i < dogImgSize.length; i++){
	dogImgSize[i].style.border = '2px solid hotpink';
}

