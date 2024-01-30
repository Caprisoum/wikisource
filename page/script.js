const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => sidebar.classList.toggle('visible'));

document.getElementById('toggle-btn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('sidebar-open');
  toggleBtn.classList.toggle('animate');
});

const goToTopBtn = document.getElementById('go-to-top-btn');

goToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    goToTopBtn.classList.add('visible');
  } else {
    goToTopBtn.classList.remove('visible');
  }
});
