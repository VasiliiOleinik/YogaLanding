/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });


    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }

    });
}

module.exports = calc;

/***/ }),

/***/ "./js/parts/form.js":
/*!**************************!*\
  !*** ./js/parts/form.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function form() {
    // ОТПРАВКА ФОРМЫ В ОБЫЧНОМ ФОРМАТЕ: НАЧАЛО
    // let message = {
    //     loading: "Загрузка",
    //     success: "Спасибо! Скоро мы с Вами свяжемся",
    //     failure: "Что-то пошло не так :("
    // };

    // let form = document.querySelector(".main-form"),
    //     input = form.getElementsByTagName("input"),
    //     statusMessage = document.createElement("div");

    // statusMessage.classList.add("status");

    // form.addEventListener("submit", event => {
    //     event.preventDefault();
    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     //request.open('POS', 'server.php'); НУжно использовать пост, но на локальном файле 405 ошибка будет
    //     request.open('GET', 'server.php');
    //     request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    //     let formData = new FormData(form);
    //     request.send(formData);

    //     request.addEventListener('readystatechange', () => {
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    //     for (let i = 0; i < input.length; i++) {
    //         input[i].value = '';
    //     }

    // });
    // ОТПРАВКА ФОРМЫ В ОБЫЧНОМ ФОРМАТЕ: КОНЕЦ


    // ОТПРАВКА ФОРМЫ В ФОРМАТЕ JSON
    let message = {
        loading: "Загрузка",
        success: "Спасибо! Скоро мы с Вами свяжемся",
        failure: "Что-то пошло не так :("
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);

        //     let request = new XMLHttpRequest();
        //     request.open('POST', 'server.php');
        //        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        //     let formData = new FormData(form);

        //     let obj = {};
        //     formData.forEach(function (value, key) {
        //         obj[key] = value;
        //     });

        //     let json = JSON.stringify(obj);

        //     request.send(json);

        //     request.addEventListener('readystatechange', () => {
        //         if (request.readyState < 4) {
        //             statusMessage.innerHTML = message.loading;
        //         } else if (request.readyState === 4 && request.status == 200) {
        //             statusMessage.innerHTML = message.success;
        //         } else {
        //             statusMessage.innerHTML = message.failure;
        //         }
        //     });

        //     for (let i = 0; i < input.length; i++) {
        //         input[i].value = '';
        //     }

        // 

        // PROMISE
        let formData = new FormData(form);

        function postData(data) {

            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        resolve()
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 3) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                }
                request.send(data);
            });

        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => {
                statusMessage.innerHTML = '';
            })
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput)
    });
}

module.exports = form;

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function modal() {
    var more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        tabsMoreBtn = document.querySelectorAll(".description-btn");

    more.addEventListener("click", () => {
        showModal();
    });

    close.addEventListener("click", () => {
        hideModal();
    });

    tabsMoreBtn.forEach(function (item) {
        item.addEventListener("click", () => {
            showModal();
        });
    });

    function showModal() {
        overlay.style.display = "block";
        overlay.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    };

    function hideModal() {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "auto";
    };
}

module.exports = modal;

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function slider() {
    let slideIndex = 1, // текущий слайд
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll(".dot");

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener("click", () => {
        plusSlides(-1);
    });
    next.addEventListener("click", () => {
        plusSlides(1);
    });

    dotsWrap.addEventListener("click", function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
}

module.exports = slider;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function tabs() {
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        // Скрываются все табКоненты кроме первого
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    };
    hideTabContent(1);

    // Показать какой-то таб контент
    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    };

    info.addEventListener("click", event => {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function timer() {
    let deadLine = "2019-05-31"; // Конечная дата

    function getTimeRemaining(endtime) {
        let dateDifference = Date.parse(endtime) - Date.parse(new Date()), // Разница между датами
            seconds = Math.floor((dateDifference / 1000) % 60), // Секунды
            minutes = Math.floor((dateDifference / 1000 / 60) % 60), // Минуты
            hours = Math.floor(dateDifference / (1000 * 60 * 60)), // Часы
            days = Math.floor((dateDifference / 1000) * 60 * 60 * 24); // Дни

        return {
            total: dateDifference,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            days: days
        };
    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            // Проверка на единицы. Если цифра одна то добавлять 0 перед ней V1
            // if ((t.seconds % 100) < 10) {
            //     seconds.textContent = "0" + t.seconds;
            // } else {
            //     seconds.textContent = t.seconds;
            // }
            // if ((t.minutes % 100) < 10) {
            //     minutes.textContent = "0" + t.minutes;
            // } else {
            //     minutes.textContent = t.minutes;
            // }
            // if ((t.hours % 100) < 10) {
            //     hours.textContent = "0" + t.hours;
            // } else {
            //     hours.textContent = t.hours;
            // }

            // Проверка на единицы. Если цифра одна то добавлять 0 перед ней V2
            function addZero(num) {
                if (num <= 9) {
                    return "0" + num;
                } else return num;
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            // Если время вышло или введена прошедшая дата
            if (t.total <= 0) {
                let timeAction = document.querySelector(".timer-action");
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
                timeAction.textContent = "Акция закончилась!";
            }
        }
    };

    setClock("timer", deadLine);
}

module.exports = timer;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// load = скрипт выполнится только тогда, когда загрузится полностью вся странийа
// DOMContentLoaded = срабатывает тогда когда загрузилась дом структура
window.addEventListener("DOMContentLoaded", () => {
    "use scrict";

    let calc = __webpack_require__(/*! ./parts/calc */ "./js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form */ "./js/parts/form.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs */ "./js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./js/parts/timer.js"),
        modal = __webpack_require__(/*! ./parts/modal */ "./js/parts/modal.js");


    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map