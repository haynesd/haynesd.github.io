// navigation.js

document.addEventListener('DOMContentLoaded', function() {
    var sidenavLinks = document.querySelectorAll('.sidenav a');

    function removeActiveClasses() {
        sidenavLinks.forEach(function(link) {
            link.classList.remove('active');
            link.querySelector('.bi').classList.remove('active');
        });
    }

    sidenavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            removeActiveClasses();
            this.classList.add('active');
            this.querySelector('.bi').classList.add('active');
        });
    });

    function setActiveLink() {
        var hash = window.location.hash;
        var activeLink = document.querySelector('.sidenav a[href="' + hash + '"]');
        if (activeLink) {
            removeActiveClasses();
            activeLink.classList.add('active');
            activeLink.querySelector('.bi').classList.add('active');
        }
    }

    setActiveLink();

    window.addEventListener('hashchange', setActiveLink);
});
