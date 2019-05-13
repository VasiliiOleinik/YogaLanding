// load = скрипт выполнится только тогда, когда загрузится полностью вся странийа
// DOMContentLoaded = срабатывает тогда когда загрузилась дом структура
window.addEventListener("DOMContentLoaded", () => {
    "use scrict";
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    hideTabContent = a => {
        // Скрываются все табКоненты кроме первого
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    };
    hideTabContent(1);

    // Показать какой-то таб контент
    showTabContent = b => {
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

    // Таймер
    let deadLine = "2019-05-31"; // Конечная дата

    getTimeRemaining = endtime => {
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

    setClock = (id, endtime) => {
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

    // Modal

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

    showModal = () => {
        overlay.style.display = "block";
        overlay.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    };

    hideModal = () => {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "auto";
    };

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

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
           request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }

    });







});