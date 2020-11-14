
const navToggle = document.querySelector('.nav-toggle');

const logoToggle = document.querySelector('.logo-toggle');

const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

logoToggle.addEventListener('click', () => {
  document.body.classList.toggle('logo-change');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

const userFeed = new Instafeed({
  get: 'user',
  userId: '8987997106',
  clientId: '924f677fa3854436947ab4372ffa688d',
  accessToken: '8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9',
  resolution: 'standard_resolution',
  template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
  sortBy: 'most-recent',
  limit: 5,
  links: false
});
userFeed.run();