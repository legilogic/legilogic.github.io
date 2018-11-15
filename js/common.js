let burger = document.querySelector('.burger'),
    nav = document.querySelector('.mainNav'),
    header = document.querySelector('#header');

burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    if (burger.classList.contains("open")) {
        nav.classList.toggle('d-b');
        header.style.backgroundColor = 'rgba(37,43,52,0.77)';
    } else {
        nav.classList.toggle('d-b');
        header.style.backgroundColor = '#021E1F';
    }
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}