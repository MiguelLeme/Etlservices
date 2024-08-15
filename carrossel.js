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
