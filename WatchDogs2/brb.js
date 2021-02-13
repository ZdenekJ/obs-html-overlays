"use strict";

const windowDedsec = document.querySelector(".window--dedsec");
const windowBlume = document.querySelector(".window--blume");
const windowBrb = document.querySelector(".window--brb");
const windowUploading = document.querySelector(".window--uploading");
const loadingEl = document.querySelector(".loading");
const percentEl = document.querySelector(".percent");
const progressBarEl = document.querySelector(".progressBar");
const uploadingTo = 13;

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

const uploadingWindow = () => {
  loadingEl.textContent = "";
  percentEl.textContent = "";
  progressBarEl.textContent = "»".repeat(25);
  let percent = 0;
  let loadingCharPos = 0;
  const loadingChars = ["|", "/", "─", "\\"];
  const progresBarChars = ["█", "░", "▒", "▓"];

  const changeProgressBar = (percent) => {
    const filledPos = Math.floor((percent - 1) / 4);
    const positionInArray = percent % 4;
    const progresStart =
      "█".repeat(filledPos) + progresBarChars[positionInArray];

    progressBarEl.textContent = progresStart.padEnd(25, "»");
  };

  const countPercent = () => {
    let temp = parseFloat(percent) + 0.1;
    if (Number.isInteger(temp)) changeProgressBar(temp);
    if (temp >= uploadingTo) {
      clearInterval(counting);
      clearInterval(progressChange);
      loadingEl.textContent = "█";
    }
    percent = temp.toFixed(1);
    percentEl.textContent = percent;
  };
  const progress = () => {
    loadingCharPos = loadingCharPos == loadingChars.length ? 0 : loadingCharPos;
    loadingEl.textContent = loadingChars[loadingCharPos];
    loadingCharPos++;
  };
  toggleWindow(windowUploading);
  let counting = setInterval(countPercent, 100);
  let progressChange = setInterval(progress, 40);
  percentEl.textContent = "percent";
  loadingEl.textContent = "|";
};

setTimeout(() => {
  uploadingWindow();
}, 30);
