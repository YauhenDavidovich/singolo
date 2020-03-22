const NAV = document.getElementById("menu");
const BUTTON = document.getElementById("button");
const BUTTON_CLOSE = document.getElementById("close-button");
const PICTURE_BORDER = document.getElementById("portfolio_images");
const PORTFOLIO_SHUFFLE = document.getElementById("portfolio_shuffle");
const VERTICAL_PHONE_DISPLAY_SWITCH = document.getElementById("iphone-vertical");
const HORIZONTAL_PHONE_DISPLAY_SWITCH = document.getElementById("iphone-horizontal");
const LEFT_ARROW = document.getElementById('slider_switch-left');
const RIGHT_ARROW = document.getElementById('slider_switch-right');
const SLIDER = document.getElementById('slider');
const SLIDE1 = document.getElementById('slider1');
const SLIDE2 = document.getElementById('slider2');

if (NAV) {
    NAV.addEventListener("click", event => {
        NAV.querySelectorAll("a").forEach(el => el.classList.remove("current"));
        event.target.classList.add("current");
    });
}

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


let items = document.querySelectorAll('.slide .slide_item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('slide_active', direction);
  })
}

function showItem(direction) {
  items[currentItem].classList.add('slide_next', direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('slide_next', direction);
		this.classList.add('slide_active');
		isEnabled = true;
  })
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

LEFT_ARROW.addEventListener('click', () => {
    if(SLIDER.classList.contains('slide_next')) {
      SLIDER.classList.remove('slide_next')
    } else {
      SLIDER.classList.add('slide_next')
    }
    if (isEnabled) {
      previousItem(currentItem);
      }
  })
  
  RIGHT_ARROW.addEventListener('click', () => {
    if (SLIDER.classList.contains('slide_next')) {
      SLIDER.classList.remove('slide_next')
    } else {
      SLIDER.classList.add('slide_next')
    }
    if (isEnabled) {
      nextItem(currentItem);
      }
  })
