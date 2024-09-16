//Carrosel (Chat GPT)

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = carouselImages[0].clientWidth;

document.querySelector('.next').addEventListener('click', () => {
	if (counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.5s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.querySelector('.prev').addEventListener('click', () => {
	if (counter <= 0) return;
	carouselSlide.style.transition = "transform 0.5s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Auto-slide every 5 seconds
setInterval(() => {
	if (counter >= carouselImages.length - 1) {
		counter = -1;
	}
	counter++;
	carouselSlide.style.transition = "transform 0.5s ease-in-out";
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 5000); // 5 segundos

//Indicador de imagens do carrosel (GPT)
const slides = document.querySelectorAll('.carousel-slide img');
const indicators = document.querySelectorAll('.carousel-indicators .indicator');
let currentIndex = 0;

function showSlide(index) {
  const totalSlides = slides.length;
  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;
  
  document.querySelector('.carousel-slide').style.transform = `translateX(-${index * 100}%)`;

  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[index].classList.add('active');
  
  currentIndex = index;
}

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// Avançar automaticamente a cada 5 segundos
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000); // Ajuste o valor para alterar a frequência de mudança de slides

//Troca para a imagem menor em telas pequenas (responsividade)
function checkScreenSize() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const img3 = document.getElementById('image3');

    if (window.innerWidth <= 480) {
      img1.src = './images/image1_small.png';
      img2.src = './images/image2_small.png';
      img3.src = './images/image3_small.png';
    } else {
      img1.src = './images/1.png';
      img2.src = './images/2.png';
      img3.src = './images/3.png';
    }
  }

  window.addEventListener('resize', checkScreenSize);
  window.addEventListener('load', checkScreenSize);



  // Função para copiar o texto (email) ao clicar no ícone de copiar
  function copyToClipboard(event, textId) {
    // Impede que o evento de clique se propague para o contêiner da div
    event.stopPropagation();

    // Selecione o texto dentro do elemento especificado pelo ID
    var text = document.getElementById(textId).innerText;
  }

  function copyToClipboard(event, elementId) {
	event.stopPropagation(); // Impede a abertura do e-mail ou telefone ao clicar no ícone de copiar
	var text = document.getElementById(elementId).innerText;
  
	// Cria um elemento temporário para copiar o texto
	var tempInput = document.createElement("input");
	tempInput.value = text;
	document.body.appendChild(tempInput);
  
	// Seleciona e copia o texto
	tempInput.select();
	document.execCommand("copy");
  
	// Remove o elemento temporário
	document.body.removeChild(tempInput);
  
	// Opcional: Mostrar uma mensagem de confirmação
	alert("Texto copiado para a área de transferência!");
  }
  
  
  

//Função para o texto que fica escondido (Seção 'About Us') Chat GPT
function toggleText() {
    const text = document.getElementById('text');
    const button = document.getElementById('toggle-button');
    
    if (text.style.height === 'auto') {
        text.style.display = '-webkit-box';
        text.style.height = '4.5em';
        button.innerHTML = '<span>&#9660;</span>';
    } else {
        text.style.display = 'block';
        text.style.height = 'auto';
        button.innerHTML = '<span>&#9650;</span>';
    }
}


 // Função para gerar um tempo aleatório dentro do intervalo especificado (0 dias e 1 hora a 3 dias)
 function getRandomTime() {
    const minHours = 1; // Mínimo de 1 hora
    const maxDays = 3;  // Máximo de 3 dias
    const maxHours = maxDays * 24; // Máximo em horas

    const minTime = minHours * 60 * 60 * 1000; // 1 hora em milissegundos
    const maxTime = maxHours * 60 * 60 * 1000; // 3 dias em milissegundos

    return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  }
function startCountdown() {
    const endTime = Date.now() + getRandomTime();
    localStorage.setItem('endTime', endTime);

    function updateCountdown() {
      const now = Date.now();
      const timeLeft = endTime - now;

      if (timeLeft <= 0) {
        startCountdown(); // Reinicia a contagem se o tempo acabar
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;

	  // Atualiza o tempo restante no localStorage
	  saveTimeRemaining(timer);
    }

    // Atualiza o cronômetro a cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();
  }

  // Verifica se há um tempo de término salvo e inicia a contagem regressiva
  window.onload = function() {
    const savedEndTime = localStorage.getItem('endTime');
    if (savedEndTime) {
      const now = Date.now();
      if (now > savedEndTime) {
        startCountdown(); // Reinicia a contagem se o tempo salvo tiver expirado
      } else {
        const endTime = parseInt(savedEndTime, 10);
        localStorage.setItem('endTime', endTime);
        startCountdown();
      }
    } else {
      startCountdown();
    }
  };

    // Função para salvar o tempo restante no localStorage
    function saveTimeRemaining(timeRemaining) {
        localStorage.setItem('timeRemaining', timeRemaining);
        localStorage.setItem('endTime', new Date().getTime() + timeRemaining);
    }




//Todo o seguinte texto veio a partir do código pronto (pode haver alterações, que estarão com comentários)//
 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

 jQuery(document).ready(function($) {

 	"use strict";


 	var lozadFunc = function() {
 		const el = document.querySelector('img');
 		const observer = lozad(el);
 		observer.observe();	
 	}
 	lozadFunc();
 	

 	var siteMenuClone = function() {

 		$('.js-clone-nav').each(function() {
 			var $this = $(this);
 			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
 		});


 		setTimeout(function() {

 			var counter = 0;
 			$('.site-mobile-menu .has-children').each(function(){
 				var $this = $(this);

 				$this.prepend('<span class="arrow-collapse collapsed">');

 				$this.find('.arrow-collapse').attr({
 					'data-toggle' : 'collapse',
 					'data-target' : '#collapseItem' + counter,
 				});

 				$this.find('> ul').attr({
 					'class' : 'collapse',
 					'id' : 'collapseItem' + counter,
 				});

 				counter++;

 			});

 		}, 1000);

 		$('body').on('click', '.arrow-collapse', function(e) {
 			var $this = $(this);
 			if ( $this.closest('li').find('.collapse').hasClass('show') ) {
 				$this.removeClass('active');
 			} else {
 				$this.addClass('active');
 			}
 			e.preventDefault();  

 		});

 		$(window).resize(function() {
 			var $this = $(this),
 			w = $this.width();

 			if ( w > 768 ) {
 				if ( $('body').hasClass('offcanvas-menu') ) {
 					$('body').removeClass('offcanvas-menu');
 				}
 			}
 		})

 		$('body').on('click', '.js-menu-toggle', function(e) {
 			var $this = $(this);
 			e.preventDefault();

 			if ( $('body').hasClass('offcanvas-menu') ) {
 				$('body').removeClass('offcanvas-menu');
 				$this.removeClass('active');
 			} else {
 				$('body').addClass('offcanvas-menu');
 				$this.addClass('active');
 			}
 		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	    gallery: {
	    	enabled: true,
	    	navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	    	verticalFit: true
	    },
	    zoom: {
	    	enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 0,
				autoplay: true,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive:{
					600:{
						margin: 0,
						nav: true,
						items: 2
					},
					1000:{
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 3
					},
					1200:{
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 4
					}
				}
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			smartSpeed: 1000,
			dots: true,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
			var $this = $(this).html(event.strftime(''
				+ '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
				+ '<span class="countdown-block"><span class="label">%d</span> days </span>'
				+ '<span class="countdown-block"><span class="label">%H</span> hr </span>'
				+ '<span class="countdown-block"><span class="label">%M</span> min </span>'
				+ '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});

	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	// navigation
	var OnePageNavigation = function() {
		var navToggler = $('.site-menu-toggle');
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				'scrollTop': $(hash).offset().top
			}, 800, 'swing', function(){
				window.location.hash = hash;
			});

		});

    // $("#menu li a[href^='#']").on('click', function(e){
    //   e.preventDefault();
    //   navToggler.trigger('click');
    // });

    $('body').on('activate.bs.scrollspy', function () {
      // console.log('nice');
      // alert('yay');
    })
  };
  OnePageNavigation();

});