const toggleButton = document.querySelector('.ap-navbar-toggle');
const navbarLinks = document.querySelector('.ap-navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});