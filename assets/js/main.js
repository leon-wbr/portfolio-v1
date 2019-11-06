const navigation = document.querySelector('.Navigation');
const navigationToggle = document.querySelector('.Navigation__Toggle');

navigationToggle.addEventListener('click', function() {
  console.log(navigation);

  if (navigation.className.endsWith('--expanded')) return navigation.className = 'Navigation';

  return navigation.className = 'Navigation Navigation--expanded';
});
