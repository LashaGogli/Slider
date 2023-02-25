let previous = document.querySelector("#previous");
let next = document.querySelector("#next");

let pic1 = document.querySelector(".pic1");
let pic2 = document.querySelector(".pic2");
let pic3 = document.querySelector(".pic3");


count = 1;
next.addEventListener("click", function () {
    count++;
    if (count > 3) {
        count = 3;

    }

    if (count == 2) {
        pic2.style.width = "100%";
        pic2.style.transition = "0.5s";
        pic1.style.width = "0";
        pic1.style.transition = "0.5s";

    } else if (count == 3) {
        pic3.style.width = "100%";
        pic3.style.transition = "0.5s";
        pic2.style.width = "0";
        pic2.style.transition = "0.5s";

    }
    // else if (count == 1) {
    //     pic1.style.width = "100%";
    //     pic1.style.transition = "0.5s";
    //     pic3.style.width = "0";
    //     pic3.style.transition = "0.5s";

    // }


})

previous.addEventListener("click", function () {
    count--;
    if (count < 1) {
        count = 1;

    }
    if (count == 2) {
        pic2.style.width = "100%";
        pic2.style.transition = "0.5s";
        pic3.style.width = "0";
        pic3.style.transition = "0.5s";

    } else if (count == 1) {
        pic1.style.width = "100%";
        pic1.style.transition = "0.5s";
        pic2.style.width = "0";
        pic2.style.transition = "0.5s";

    }
    // else if (count == 1) {
    //     pic1.style.width = "100%";
    //     pic1.style.transition = "0.5s";
    //     pic3.style.width = "0";
    //     pic3.style.transition = "0.5s";

    // }


})
