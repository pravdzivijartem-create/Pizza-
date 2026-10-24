const main = document.querySelector('.main');

window.addEventListener('wheel', function () {
    main.classList.add('blurred');


    // скільки пікселів прокрутили
    const scrollY = window.scrollY;

    if (scrollY > 0) {
        // якщо прокрутили більше 100px — блюр
        main.classList.add('blurred');
    } else {
        // якщо на самому верху — без блюру
        main.classList.remove('blurred');
    }

});

const btns = document.querySelectorAll('.btn22');

btns.forEach(function (btn22) {
    btn22.addEventListener('click', function () {

        // прибираємо active з усіх
        btns.forEach(b => b.classList.remove('active'));

        // додаємо active на натиснуту
        btn22.classList.add('active');
    });
});

let name = document.querySelectorAll('.btnor');

name.forEach(function (btnor) {
    btnor.addEventListener('click', function () {

        // прибираємо active з усіх
        name.forEach(b => b.classList.remove('active'));

        // додаємо active на натиснуту
        btnor.classList.add('active');
    });
});