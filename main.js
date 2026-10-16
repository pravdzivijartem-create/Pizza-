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