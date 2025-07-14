let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.top = '0';
    return;
  }

  if (currentScroll > lastScroll) {
    // scroll w dół — chowamy navbar
    navbar.style.top = '-100px';
  } else {
    // scroll w górę — pokazujemy navbar
    navbar.style.top = '0';
  }

  lastScroll = currentScroll;
});