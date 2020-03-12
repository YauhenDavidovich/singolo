const NAV = document.getElementById("menu");
const BUTTON = document.getElementById("button");
const BUTTON_CLOSE = document.getElementById("close-button");


NAV.addEventListener("click", (event) => {
    NAV.querySelectorAll("a").forEach(el => el.classList.remove("current"));
    event.target.classList.add("current");
});

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
    document.getElementById('subject-result').innerText = (document.getElementById('subject').value) ? 'Тема: ' + document.getElementById('subject').value : 'Без темы';
    document.getElementById('describe-result').innerText = (document.getElementById('describe').value) ? 'Описание: ' + document.getElementById('describe').value : 'Без описания';
    document.getElementById("message-block").classList.remove("hidden");
});

BUTTON_CLOSE.addEventListener ("click", () => {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('describe').value = "";
    document.getElementById('message-block').classList.add("hidden");
})