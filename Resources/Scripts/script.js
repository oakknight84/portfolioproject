
const hamburgerButton = document.querySelector('.hamburger-button');
const navbarMenuVertical = document.querySelector('.nav');

hamburgerButton.addEventListener('click', () =>  {
  hamburgerButton.classList.toggle('active');
});




hamburgerButton.addEventListener('click', () =>  {
   if (!navbarMenuVertical.classList.contains('active')) {
      navbarMenuVertical.classList.add('active')

    }
    else {
      navbarMenuVertical.classList.remove('active')
    }

});







const details = document.querySelectorAll('details');

details.forEach(detail => {
  detail.addEventListener('click', event => {
    details.forEach(d => {
      if (d !== detail) {
        d.removeAttribute('open');
      }
    });
  });
});




const navBackground = document.querySelector('.nav-background')
const header = document.querySelector('#hero');
const headerAlt = document.querySelector('.header-alt')
const navContainer = document.querySelector('.nav-container');
const ul = document.querySelector('.nav-ul')
const logo = document.querySelector('.logo-button')

const headerOptions = {
  rootMargin: "-100px 0px 0px 0px",
};

const headerObserver = new IntersectionObserver(function(
  entries,
  headerObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navBackground.classList.add('active')
      navBackground.classList.remove('inactive')
      ul.classList.add('active')
      logo.classList.add('active')
      navContainer.classList.add('active');
    } else {
      navBackground.classList.add('inactive')
      navBackground.classList.remove('active')
      navContainer.classList.remove('active');
      ul.classList.remove('active')
      logo.classList.remove('active')
    }
  });
},
headerOptions);

headerObserver.observe(header);




