'use strict';

function promise() {
    let drink = 0;

    function shoot(arrow) {
        console.log('Вы сделали выстрел...');
        // resolve = когда обещание выполнилось
        // reject = когда обещание не выполнилось
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                // Если вероятность больше 50% то вызвать функцию хедшот иначе феил
                Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
            }, 3000);
        });

        return promise;
    }

    function win() {
        console.log("Вы победили!");
        (drink == 1) ? buyBeer(): giveMoney();
    }

    function loose() {
        console.log("Вы проиграли!")
    }

    function buyBeer() {
        console.log("Вам купили пиво");
    }

    function giveMoney() {
        console.log("Вам дали деньги");
    }


    shoot({})

        .then(mark => console.log('Вы попали в цель'))
        .then(win)
        .catch(loose);
}

module.exports = promise;