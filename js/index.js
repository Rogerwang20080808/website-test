const contactEl = document.querySelectorAll(".email");
const langEl = document.querySelector(".dropdown-menu");
const link = document.querySelectorAll(".dropdown-menu a");
const homeEl = document.querySelector(".navbar-nav .nav-item .home");
const studyEl = document.querySelector(".navbar-nav .nav-item .study");
const sourcesEl = document.querySelector(".navbar-nav .nav-item .sources");
const gameEl = document.querySelector(".navbar-nav .nav-item .game");
const languageEl = document.querySelector(".navbar-nav .nav-item .language");
const learnEl = document.querySelector(".learn");

var data = {
    "english":{
        "contact":"Contact us:",
        "home":"Home",
        "study":"Study",
        "game":"Game",
        "language":"English",
        "sources":"Sources",
        "learn":"寓学于乐，寓乐于学......"
    },

    "simp-c":{
        "contact":"联系我们:",
        "home":"主页",
        "study":"学习",
        "game":"游戏",
        "language":"简体中文",
        "sources":"资源",
        "learn":"寓学于乐，寓乐于学......"
    },

    "trad-c":{
        "contact":"聯繫我們:",
        "home":"主頁",
        "study":"學習",
        "game":"遊戲",
        "language":"繁體中文",
        "sources":"資源",
        "learn":"寓學於樂，寓樂於學......"
    }
};

var languageValue;

if(sessionStorage.getItem("languageValue") == null){
  languageValue = "english";
}else{
  languageValue = sessionStorage.getItem("languageValue");
}
exchangeLang();

function exchangeLang(){
    link.forEach(el => {
        contactEl.forEach((e) => {
            e.textContent = data[languageValue].contact;
        });

        homeEl.textContent = data[languageValue].home;
        studyEl.textContent = data[languageValue].study;
        gameEl.textContent = data[languageValue].game;
        sourcesEl.textContent = data[languageValue].sources;
        languageEl.textContent = data[languageValue].language;
        learnEl.textContent = data[languageValue].learn;
    });
}

link.forEach(el => {
    el.addEventListener('click', () => {
      langEl.querySelector('.active').classList.remove('active');
      el.classList.add('active');
      languageValue = el.getAttribute('language');
      sessionStorage.setItem("languageValue", languageValue);
      exchangeLang();
    });
});