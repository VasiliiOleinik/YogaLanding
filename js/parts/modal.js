'use strict';

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