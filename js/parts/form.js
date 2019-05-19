'use strict';

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