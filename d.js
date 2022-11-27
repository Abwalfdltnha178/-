function toggleDarkLight(){
document.documentElement.classList.toggle("dark-mode");
}
toggleDarkLight();
var isDarkmode = window.matchMedia("(prefers-color-scheme:dark)");
isDarkmode.addListener((evt)=>toggleDarkLight(evt.matches));
