// load = скрипт выполнится только тогда, когда загрузится полностью вся странийа
// DOMContentLoaded = срабатывает тогда когда загрузилась дом структура
window.addEventListener("DOMContentLoaded", () => {
    "use scrict";

    let calc = require('./parts/calc'),
        form = require('./parts/form'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        modal = require('./parts/modal');


    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});