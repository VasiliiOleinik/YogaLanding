'use strict';

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