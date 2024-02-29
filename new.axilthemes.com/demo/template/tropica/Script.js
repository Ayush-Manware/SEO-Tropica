const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  let counter = 1;

  setInterval(() => {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateY(${-counter * 100}%)`;

    counter++;

    if (counter >= slider.querySelectorAll('.slide').length) {
      setTimeout(() => {
        slider.style.transition = 'none';
        counter = 1;
        slider.style.transform = `translateY(${-counter * 100}%)`;
      }, 500);
    }
  }, 3000);
});
