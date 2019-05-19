// load = скрипт выполнится только тогда, когда загрузится полностью вся странийа
// DOMContentLoaded = срабатывает тогда когда загрузилась дом структура

// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener("DOMContentLoaded", () => {
    "use scrict";

    let calc = require('./parts/calc'),
        form = require('./parts/form'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        modal = require('./parts/modal'),
        promise = require('./parts/promise');


    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
    promise();
});

// Поифил для forEach, который не работает корректно в некоторых браузерах
// if ('NodeList' in window && !NodeList.prototype.forEach) {
//     console.info('polyfill for IE11');
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (var i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }