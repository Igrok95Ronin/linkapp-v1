window.addEventListener('DOMContentLoaded', function () {/* JS сработает когда  DOM дерево подгрузится РЕКОМЕНДУЕТСЯ*/
    'use strict';/* Включен строгий режим */

    //День - Ночь
    !(function () {/* создаем замыкание */

        const headerDayNight = document.querySelector('.header__day-night');//получаем элемент Dom елемент
        const html = document.querySelector('html');


        headerDayNight.addEventListener('click', e => {/* навешиваем событие клик */
            e.preventDefault();/* отключаем стандартное поведение элемента */
            if (localStorage.getItem('theme') === 'dark') {/* проверяем наличиет ключа и значение */
                localStorage.removeItem('theme');/* усли он есть удаляем */
            } else {
                localStorage.setItem('theme', 'dark');/* иначе добавляем */
            }
            addDarkClassHTML();/* вызываем функцию */
        });


        function addDarkClassHTML() {/* создали функцию */
            if (localStorage.getItem('theme') === 'dark') {/* если есть в локалсторидже ключ и значение */
                html.classList.add('dark');/* в html добавляем класс dark */

                headerDayNight.classList.add('header__dark-night');/* добавляем новый клас */

                const dark = document.querySelector('.header__dark-night');/* получаем добавленный новый класс */
                dark.classList.remove('header__day-night');/* удаляем старый класс , чтобы не было дубляжа стилей */

            } else {/* если нету ключа и значения */
                html.removeAttribute('class');/* удаляем атрибут класса у html, если удалить просто класс то у нас останется пустой класс висеть */

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
            header__menu = document.querySelector('.header__menu');

        header__search.addEventListener('click', () => {
            header__srch.classList.add('show');

            if (header__srch.getAttribute('class') == 'header__srch hiden show') {
                header__menu.classList.add('hiden');
            }

            document.addEventListener('click', e => {
                if (e.target.getAttribute('class') == 'header__input' || e.target.getAttribute('class') == 'header__search') {
                } else {
                    header__srch.classList.remove('show');
                    header__menu.classList.remove('hiden');
                }
            });
        });




    })();











});
