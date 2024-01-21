window.addEventListener("scroll", function() {
    var scroll = window.scrollY;
    document.querySelector('header').style.backgroundPosition = "center " + (-scroll * 0.5) + "px";
});
var lastScrollTop = 0;
var navbar = document.querySelector('.navBar-desktop');

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.transform = 'translateY(-100%)'; // déplace la barre de navigation vers le haut
  } else {
    navbar.style.transform = 'translateY(0)'; // déplace la barre de navigation vers le bas
  }
  lastScrollTop = scrollTop;
});

document.addEventListener('DOMContentLoaded', function() {
  var cards = document.querySelectorAll('.card1_section6, .card2_section6, .card3_section6');

  cards.forEach(function(card) {
    // Définir une bordure transparente sur la carte par défaut
    card.style.border = '10px solid transparent';
    // Ajouter une transition sur la propriété border
    card.style.transition = 'border 0.3s ease';

    card.addEventListener('mouseover', function() {
      card.style.border = '10px solid #d0b35f';
    });

    card.addEventListener('mouseout', function() {
      card.style.border = '10px solid transparent';
    });
  });
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
});