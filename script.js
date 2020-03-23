const NAV = document.getElementById("menu");
const BUTTON = document.getElementById("button");
const BUTTON_CLOSE = document.getElementById("close-button");
const PICTURE_BORDER = document.getElementById("portfolio_images");
const PORTFOLIO_SHUFFLE = document.getElementById("portfolio_shuffle");
const VERTICAL_PHONE_DISPLAY_SWITCH = document.getElementById("iphone-vertical");
const HORIZONTAL_PHONE_DISPLAY_SWITCH = document.getElementById("iphone-horizontal");
const LEFT_ARROW = document.getElementById('slider_switch-left');
const RIGHT_ARROW = document.getElementById('slider_switch-right');

/*** Navbar ***/

if (NAV) {
    NAV.addEventListener("click", event => {
        NAV.querySelectorAll("a").forEach(el => el.classList.remove("current"));
        event.target.classList.add("current");
    });
}

/*** Quote form ***/

BUTTON.addEventListener("click", () => {
    const x = document.forms["quote-form"]["name"].value;
    if (x == "") {
        alert("Необходимо ввести имя");
        return false;
    }
    const y = document.forms["quote-form"]["email"];
    if (!y.validity.valid) {
        alert("Необходимо ввести e-mail");
        return false;
    }
    document.getElementById("subject-result").innerText = document.getElementById(
            "subject"
        ).value ?
        "Тема: " + document.getElementById("subject").value :
        "Без темы";
    document.getElementById(
            "describe-result"
        ).innerText = document.getElementById("describe").value ?
        "Описание: " + document.getElementById("describe").value :
        "Без описания";
    document.getElementById("message-block").classList.remove("hidden");
});

BUTTON_CLOSE.addEventListener("click", () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("describe").value = "";
    document.getElementById("message-block").classList.add("hidden");
});

/*** Portfolio ***/

PICTURE_BORDER.addEventListener("click", event => {
    PICTURE_BORDER.querySelectorAll("img").forEach(el =>
        el.classList.remove("current_image")
    );
    event.target.classList.add("current_image");
});

if (PORTFOLIO_SHUFFLE) {
    const container = document.getElementById("portfolio_images");

    PORTFOLIO_SHUFFLE.addEventListener("click", event => {
        PORTFOLIO_SHUFFLE.querySelectorAll("a").forEach(el =>
            el.classList.remove("current-tab")
        );
        event.target.classList.add("current-tab");
        for (let i = container.children.length; i >= 0; i--) { //moves random li from its current position to the new position 
            container.appendChild(container.children[(Math.random() * i) | 0]);
        }
    });
}

/*** Phones displays switch ***/

if (VERTICAL_PHONE_DISPLAY_SWITCH) {
    VERTICAL_PHONE_DISPLAY_SWITCH.addEventListener("click", () => {
        if (document.getElementById("vertical_display").classList.contains("hidden")) {
            document.getElementById("vertical_display").classList.remove("hidden");
        } else {
            document.getElementById("vertical_display").classList.add("hidden");
        }
    });
}

if (HORIZONTAL_PHONE_DISPLAY_SWITCH) {
    HORIZONTAL_PHONE_DISPLAY_SWITCH.addEventListener("click", () => {
        if (document.getElementById("horizontal_display").classList.contains("hidden")) {
            document.getElementById("horizontal_display").classList.remove("hidden");
        } else {
            document.getElementById("horizontal_display").classList.add("hidden");
        }
    });
}

/*** Slider ***/
const SLIDER = document.getElementById('slider');
let slides = document.querySelectorAll('.slide_item');
let current = 0;
let sliderBlocked = false;


function slider_init() {
    let offset = 0;
    let slide2 = (current === 0) ? 1 : 0;
    SLIDER.innerHTML = '';
    let elem = slides[slide2].cloneNode(true);
    elem.style.left = offset*830 - 830 + 'px';
    slides[current].style.left = offset*830 + 'px';
    offset += 1;
    slides[slide2].style.left = offset*830 + 'px';
    SLIDER.appendChild(elem);
    SLIDER.appendChild(slides[current]);
    SLIDER.appendChild(slides[slide2]);
}

function slide_left() {
    if (!sliderBlocked) {
        sliderBlocked = true;
        let slides2 = document.querySelectorAll('.slide_item');
        let offset2 = -1;
        for (let i = 0; i < slides2.length; i += 1) {
            slides2[i].style.left = offset2*830 - 830 +'px';
            offset2 += 1;
        }
        current += 1;
        if (current >= slides.length) {
            current = 0;
        }
        if (current === 1) {
            document.getElementById('slider_main').classList.add('bgBlue');
        } else {
            document.getElementById('slider_main').classList.remove('bgBlue');
        }
    }   
}

function slide_right() {
    if (!sliderBlocked) {
        sliderBlocked = true;
        let slides2 = document.querySelectorAll('.slide_item');
        let offset2 = -1;
        for (let i = 0; i < slides2.length; i += 1) {
            slides2[i].style.left = offset2*830 + 830 +'px';
            offset2 += 1;
        }
        current += 1;
        if (current >= slides.length) {
            current = 0;
        }
        if (current === 1) {
            document.getElementById('slider_main').classList.add('bgBlue');
        } else {
            document.getElementById('slider_main').classList.remove('bgBlue');
        }
    } 
}
SLIDER.addEventListener('transitionend', function () {
    slider_init();
    sliderBlocked = false;
});
document.getElementById('slider_switch-left').addEventListener('click', slide_right);
document.getElementById('slider_switch-right').addEventListener('click', slide_left);
slider_init();

