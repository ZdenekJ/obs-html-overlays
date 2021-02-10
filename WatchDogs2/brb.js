"use strict";

const windowDedsec = document.querySelector(".window--dedsec");
const windowBlume = document.querySelector(".window--blume");
const windowBrb = document.querySelector(".window--brb");

const toggleWindow = (el, showClass = "window--show") =>
  el.classList.toggle(showClass);

setTimeout(() => {
  toggleWindow(windowDedsec);
}, 1000);

setTimeout(() => {
  toggleWindow(windowBrb);
}, 2000);

setTimeout(() => {
  toggleWindow(windowBlume, "window--showQuickly");
}, 3000);
