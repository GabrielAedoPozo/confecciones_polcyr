// Este archivo está vacío porque toda la lógica del slider
// se movió inline al componente hero.astro para evitar problemas de SSR
	sliders.forEach(slider => {
		const track = slider.querySelector('[data-track]');
		const slides = Array.from(track.children);
		const nextBtn = slider.querySelector('[data-action="next"]');
		const prevBtn = slider.querySelector('[data-action="prev"]');
		const dotsContainer = slider.querySelector('[data-dots]');
		let currentIndex = 0;
		let interval;

		// Crear dots
		slides.forEach((_, i) => {
			const dot = document.createElement('button');
			dot.className = 'dot';
			if (i === 0) dot.classList.add('active');
			dot.addEventListener('click', () => goToSlide(i));
			dotsContainer.appendChild(dot);
		});
		const dots = Array.from(dotsContainer.children);

        function goToSlide(i) {
            const slideWidth = track.clientWidth; // ancho exacto del contenedor
            currentIndex = i;
            track.style.transform = `translateX(-${i * slideWidth}px)`; // en píxeles
            dots.forEach(d => d.classList.remove('active'));
            dots[i].classList.add('active');
        }


		nextBtn.addEventListener('click', () => { goToSlide((currentIndex+1)%slides.length); resetInterval(); });
		prevBtn.addEventListener('click', () => { goToSlide((currentIndex-1+slides.length)%slides.length); resetInterval(); });

		function nextSlide() { goToSlide((currentIndex+1)%slides.length); }
		function startInterval() { interval = setInterval(nextSlide, 4000); }
		function resetInterval() { clearInterval(interval); startInterval(); }

		startInterval();
	});


