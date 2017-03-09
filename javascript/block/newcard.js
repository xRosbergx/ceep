var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCards-content');
var $newCardAction = document.querySelector('.newCards-action');



$newCardContent.addEventListener('input', function(){
	var $error = document.querySelector('.error');

	if($error != null){
		$error.remove();
	};
});

$newCard.addEventListener('submit', function(event) {
	event.preventDefault();
	if($newCardContent.value == '') {
		

		if(document.querySelector('.error') == null) {
			var $error = document.createElement('span');
			$error.classList.add('error');
			$error.textContent = 'Por favor, preencha o campo a cima.';
			$newCard.insertBefore($error, $newCardAction);
		};
	}else {
		var $wrapPai = document.querySelector('.wrap-card'); 
		var $card = document.querySelector('.card');
		var $copyCard = $card.cloneNode(true);
		$copyCard.querySelector('.card-content').textContent = $newCardContent.value;

		$wrapPai.insertBefore($copyCard, $card);
	};
});

