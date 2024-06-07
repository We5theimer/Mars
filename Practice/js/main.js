// let bg = document.querySelectorAll('.header__parallax');
// for (let i = 0; i < bg.length; i++) {
//   window.addEventListener('mousemove', function (e) {
//     let x = e.clientX / window.innerWidth;
//     let y = e.clientY / window.innerHeight;
//     bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
//   });
// }
// Hamburger
// $(".menu-open, .menu a").click(function () {
//     $(".menu-collapse").toggleClass("d-none").css("order", "1");
//     $(".nav_menu").toggleClass("menu-opened");
// });

//Parallax
// var w = window.screen.availWidth;
// if (w > 1000) {
//     let header__parallax = document.querySelector('.header__parallax')
//     window.addEventListener('mousemove', function (e) {
//         let x = e.clientX / this.window.innerWidth;
//         header__parallax.style.transform = 'translate(-' + x * 100 + 'px)';
//     });
// };

//Modal
const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);

    modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;

    const closeModal = event => {
        const target = event.target;

        if (
            target === modalElem ||
            (btnClose && target.closest(btnClose)) ||
            event.code === 'Escape'
        ) {

            modalElem.style.opacity = 0;

            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
            }, time);

            window.removeEventListener('keydown', closeModal);
        }
    }

    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        window.addEventListener('keydown', closeModal)
    };

    buttonElems.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalElem.addEventListener('click', closeModal);
};

modalController({
    modal: '.modal1',
    btnOpen: '.header__menu-btn',
    btnClose: '.modal__close',
});
