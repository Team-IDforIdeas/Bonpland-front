let count = 1;
let count1 = 0;
let count2 = 2;
right.addEventListener('click', next);
left.addEventListener('click',prev);
console.log(fotoslide.length)

function prev(){
	count++;
	count1++;
	count2++;
	if(count > fotoslide.length - 1){
		count = 0
	}
	imgcenter.src = fotoslide[count];
	
	if(count1 > fotoslide.length - 1){
		count1 = 0
	}
	imgleft.src = fotoslide[count1];
	
	if(count2 > fotoslide.length - 1){
		count2 = 0
	}
	imgright.src = fotoslide[count2];
	

}

function next(){
	count--;
	count1--;
	count2--;
	
	if(count < 0){
		count = (fotoslide.length - 1) ;
	}
	imgcenter.src = fotoslide[count];

	if(count1 < 0){
		count1 = (fotoslide.length -1);
	}
	imgleft.src = fotoslide[count1];

	if(count2 < 0){
		count2 = (fotoslide.length - 1);
	}
	imgright.src = fotoslide[count2];
}