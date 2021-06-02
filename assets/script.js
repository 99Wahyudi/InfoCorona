// function getData() {
// 	return fetch('https://api.kawalcorona.com/indonesia')
// 		.then(response => response.json())
// 		.then(m => m);
	
// }

// console.log(getData());

$(window).scroll(function(){
		var nav = $('.navbar');
		if ($(window).scrollTop() > nav.height()) {
			nav.css({
				'background-color' : '#f8f9fa',
				'box-shadow' : '0px 4px 8px rgba(0,0,0,0.4)'
			});
		}else{
			nav.css({
				'background-color' : 'unset',
				'box-shadow' : 'none'
			});
		}
	});

$(window).on('load', function(){



	const pNums = document.querySelectorAll('.primary-number');
	const sNums = document.querySelectorAll('.secondary-number');

	const totalCase = document.querySelectorAll('.totalCase');
	const activeCase = document.querySelector('.activeCase');
	const todayCase = document.querySelector('.todayCase');

	const totalDeath = document.querySelectorAll('.totalDeath');
	const todayDeath = document.querySelector('.todayDeath');

	const recovered = document.querySelectorAll('.recovered');

	const down = document.querySelector('.down');
    // const tl = new TimelineMax({delay:0.5});
    // console.log(tl.delay);
	// imgHead(tl);
	// totalCase.innerHTML = 'coba';
	// toUp(tl, down);
	$.ajax({
			url : 'https://coronavirus-19-api.herokuapp.com/countries',
			success : result => {
				for (let i = 0; i < result.length; i++) {
					if (result[i].country === 'Indonesia') {
						// console.log(result[i]);
						let positiveCase = {
							'totalCase' : result[i].cases,
							'activeCase' : result[i].active,
							'todayCase' : result[i].todayCases
						};
						let deathCase = {
							'totalDeath' : result[i].deaths,
							'todayDeath' : result[i].todayDeaths
						};
						let recoveredCase = {
							'totalRecovered' : result[i].recovered
						} 

						activeCase.innerHTML = positiveCase.activeCase;
						todayCase.innerHTML = positiveCase.todayCase;

						totalDeath.innerHTML = deathCase.totalDeath;
						todayDeath.innerHTML = deathCase.todayDeath;


						// sNums.forEach((sNum, index)=>{
						// 	sNum.innerHTML = '+'+dataToday[index];
						// });

						recovered.forEach((recovered, index)=>{
							recovered.innerHTML = recoveredCase.totalRecovered;
						});
						totalCase.forEach((totalCase, index)=>{
							totalCase.innerHTML = positiveCase.totalCase;
						});
						totalDeath.forEach((totalDeath, index)=>{
							totalDeath.innerHTML = deathCase.totalDeath;
						});
					}
				}
			}
	})
	
});



function counter(el,angka){
	const waktu = 200;
	let total = 0;
	const animationSpeed = waktu/angka;
	let hitung = setInterval(()=>{
		total+=1;
		if (total>angka) {
			return
		}
		el.innerHTML = total;
	}, animationSpeed);
}

function imgHead(tl){
    const imgHead = document.querySelector('.img-header');
    tl.from(imgHead, 1, {x:'150%'});
}

function toUp(tl, objek){
	// tl.delay = 10;
	tl.fromTo(objek, 1, {y:'150%', opacity:0}, {y:'0%', opacity:1});
}

function addBg(){
	navbar = document.querySelector('.navbar');
	navbar.classList.toggle("bg-light")
}

// document.querySelector('.primary-number').innerHTML = 'cok'