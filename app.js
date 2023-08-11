const ham = document.querySelector('.ham');
const sidebar = document.querySelector('.sidebar');

// open and close sidebar when clicking hamburger
ham.addEventListener('click', function(event) {
    event.stopPropagation();
    sidebar.classList.toggle('active');
});

// close sidebar when clicking outside
document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target)) {
      sidebar.classList.remove('active');
    }
  });