window.addEventListener('DOMContentLoaded', function () {/* JS сработает когда  DOM дерево подгрузится РЕКОМЕНДУЕТСЯ*/
    'use strict';/* Включен строгий режим */

    //День - Ночь
    !(function () {/* создаем замыкание */

        const headerDayNight = document.querySelector('.header__day-night'),//получаем элемент Dom елемент
            html = document.querySelector('html'),
            header = document.querySelector('.header');


        headerDayNight.addEventListener('click', e => {/* навешиваем событие клик */
            e.preventDefault();/* отключаем стандартное поведение элемента */
            if (localStorage.getItem('theme') === 'dark') {/* проверяем наличиет ключа и значение */
                localStorage.removeItem('theme');/* eсли он есть удаляем */
            } else {
                localStorage.setItem('theme', 'dark');/* иначе добавляем */
            }
            addDarkClassHTML();/* вызываем функцию */
        });


        function addDarkClassHTML() {/* создали функцию */
            if (localStorage.getItem('theme') === 'dark') {/* если есть в локалсторидже ключ и значение */
                html.classList.add('dark');/* в html добавляем класс dark */
                header.classList.add('dark');/* в header добавляем класс dark */

                headerDayNight.classList.add('header__dark-night');/* добавляем новый клас */

                const dark = document.querySelector('.header__dark-night');/* получаем добавленный новый класс */
                dark.classList.remove('header__day-night');/* удаляем старый класс , чтобы не было дубляжа стилей */

            } else {/* если нету ключа и значения */
                html.removeAttribute('class');/* удаляем атрибут класса у html, если удалить просто класс то у нас останется пустой класс висеть */
                header.classList.remove('dark');

                headerDayNight.classList.add('header__day-night');/* возврашаем старый класс */
                headerDayNight.classList.remove('header__dark-night');/* удаляем добавленный новый класс */
            }
        }
        addDarkClassHTML();/* вызов функции */

    })();


    //Форма поиска

    !(function () {

        const header__search = document.querySelector('.header__search'),
            header__srch = document.querySelector('.header__srch'),
            header__menu = document.querySelector('.header__menu'),
            header__input = document.querySelector('.header__input'),
            header__search__clear = document.querySelector('.header__search-clear'),
            header_nav = document.querySelector('.header-nav'),
            header__label = document.querySelector('.header__label');

        header__search.addEventListener('click', e => {
            e.preventDefault();
            header__srch.classList.add('show');/* при клике добавляется класс */
            header_nav.classList.add('header-nav--gridTemplateColumns3');/* при клике добавляется класс */
            header__label.classList.remove('header__labelHide');/* удаляем класс для скрытия формы поиска */
            header__input.focus();/* даем фокус инпуту */

            header__srch.getAttribute('class') == 'header__srch hiden show' && header__menu.classList.add('hiden');/* если условие истино скрываем меню */

            document.addEventListener('click', e => {
                if (e.target.getAttribute('class') == 'header__input' || e.target.getAttribute('class') == 'header__search' || e.target.getAttribute('class') == 'header__search-icon' || e.target.getAttribute('class') == 'header__search-clear') {
                } else {/* если одно из условий истино ничего не делаем, иначе удаляем классы */
                    setTimeout(function () {
                        header__srch.classList.remove('show');
                        header__menu.classList.remove('hiden');
                        header_nav.classList.remove('header-nav--gridTemplateColumns3');
                        header__label.classList.remove('header__labelHide');
                    }, 500);
                    header__label.classList.add('header__labelHide');/* добавляем класс для плавного скрытия формы */
                }
            });
        });

        header__search__clear.addEventListener('click', function () {
            header__input.value = '';/* очишаем форму поиска при клике на икс */
        });

    })();


    //Header тень при скроле
    !(function () {
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            if (scrollY > 40) {
                header.classList.add('header__boxShadow');
            } else {
                header.classList.remove('header__boxShadow');
            }
        });

    })();


    //Активная ссылка header menu
    !(function () {

        const header__li__a = document.querySelectorAll('.header__li a'),
            header__a = document.querySelector('.header__li a');

        header__a.classList.add('header__li--active');/* Ссылка активна по умолчанию */

        header__li__a.forEach(elem => {
            elem.addEventListener('click', function () {

                if (!elem.classList.contains('header__li--active')) {/* если нету класса актив */

                    header__li__a.forEach(elem => {
                        elem.classList.remove('header__li--active');/* перебираем ссылки и удаляем классы */
                    });

                    this.classList.add('header__li--active');/* после добавляем класс актив на которой был клик */
                }

            });
        });

    })();

    //Бургер меню 

    !(function () {
        //Иконка
        const header__menu__icon = document.querySelector('.header__menu-icon'),
            header__burger_menu_list = document.querySelector('.header__burger-menu-list');

        header__menu__icon.addEventListener('click', e => {
            e.preventDefault();/* отменяем стандартное поведение */
            header__menu__icon.classList.toggle('header__menu-icon-close');/* при клике добавляем или удаляем класс */
            header__burger_menu_list.classList.toggle('header__burger-menu-list-show');

            document.addEventListener('click', e => {
                if (e.target.classList.contains('header__btn-close')) {/* если нажали на Х закрываем меню */
                    header__burger_menu_list.classList.remove('header__burger-menu-list-show');
                }
                if (e.target.classList.contains('header__burger-menu-link') || e.target.classList.contains('header__menu-icon')
                    || e.target.classList.contains('header__app-icon') || e.target.classList.contains('header__burger-menu-list')
                    || e.target.classList.contains('header__burger-menu-close')) {
                    /* если кликнули на перечисленные элементы ничего не происодит, иначе закрываем меню */
                } else {
                    header__burger_menu_list.classList.remove('header__burger-menu-list-show');
                }

            });

            header__menu__icon.addEventListener('blur', e => {/* при потере фокуса переворачиваем Х на меню */
                header__menu__icon.classList.remove('header__menu-icon-close');
            });
        });

    })();


    // Slider
    $(document).ready(function () {
        $('.slider').slick({
            lazyLoad: 'ondemand',/* 'ondemand' or 'progressive' */
            slidesToShow: 8,
            slidesToScroll: 6,
            infinite: false,
            rows: 2,/* задает количество рядов */
            responsive: [/* отзывчивый */
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 2,
                        infinite: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });





});
