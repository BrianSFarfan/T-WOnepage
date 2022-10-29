let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('ul li a');

window.onscroll = () => {

    section.forEach(sec => {
        let top = window.scrollY;
        let offser = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (tio >= offset && tio < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']')
            })
        }
    });
};