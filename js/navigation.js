document.addEventListener('DOMContentLoaded', function() {
    var sidenavLinks = document.querySelectorAll('.sidenav a');

    function removeActiveClasses() {
        sidenavLinks.forEach(function(link) {
            link.classList.remove('active');
            link.querySelector('.bi').classList.remove('active');
        });
    }

    sidenavLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor click behavior

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Smooth scroll to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update the URL hash without jumping to it
                history.pushState(null, null, `#${targetId}`);
                
                // Update the active link
                removeActiveClasses();
                this.classList.add('active');
                this.querySelector('.bi').classList.add('active');
            }
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