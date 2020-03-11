const NAV = document.getElementById("menu");
const BUTTON = document.getElementById("button");


NAV.addEventListener("click", (event) => {
    NAV.querySelectorAll("a").forEach(el => el.classList.remove("current"));    
    event.target.classList.add("current");
});

BUTTON.addEventListener("click", () => {
    const subject = document.getElementById("subject").value.toString();
    document.getElementById("result").innerText = subject;
    document.getElementById("message-block").classList.remove("hidden"); 

});