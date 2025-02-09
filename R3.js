document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('menu-hidden')) {
     menu.classList.remove('menu-hidden');
    } else {
     menu.classList.add('menu-hidden');
    }
   });


   