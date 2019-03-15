window.onload = function() {
	document.querySelector('.tabs-header').addEventListener('click', fTabs);
	function fTabs(event) {
		console.log(event);
		if (event.target.className == 'tab-h') {
			//dataTab -номер вкладки, которую нужно отобразить
			let dataTab = event.target.getAttribute('data-tab');
			// отключаю класс active
			let tabH = document.getElementsByClassName('tab-h');
			for (let i = 0; i < tabH.length; i++) {
				tabH[i].classList.remove('active');
			}
			event.target.classList.add('active');
			//все закладки с содержимым
			let tabBody = document.getElementsByClassName('tab-b');
			for (let i = 0; i < tabBody.length; i++) {
				if (dataTab == i) {
					tabBody[i].style.display = 'block';
				}
				else{
					tabBody[i].style.display = 'none';
				}
			}
		}
	}
}