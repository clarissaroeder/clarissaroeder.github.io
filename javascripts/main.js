document.addEventListener('DOMContentLoaded', () => {
  // Change svg color on hover and remove after
  const links = document.querySelectorAll('svg')

  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.classList.add('hovered');
    });

    link.addEventListener('mouseout', function() {
      link.classList.remove('hovered');
    });

    link.addEventListener('click', function() {
        link.classList.remove('hovered');
    });
  });
});