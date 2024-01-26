const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => sidebar.classList.toggle('visible'));

document.getElementById('toggle-btn').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('sidebar-open');
  toggleBtn.classList.toggle('animate');
});
