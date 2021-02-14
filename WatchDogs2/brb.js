"use strict";

const windowDedsec = document.querySelector(".window--dedsec");
const windowBlume = document.querySelector(".window--blume");
const windowBrb = document.querySelector(".window--brb");
const windowUploading = document.querySelector(".window--uploading");
const loadingEl = document.querySelector(".loading");
const percentEl = document.querySelector(".percent");
const progressBarEl = document.querySelector(".progressBar");
const uploadingTo = 99;
const windowDedsecContent = windowDedsec.querySelector("window__content");
let windowDedsecLines;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const keyStrokeDelay = (min = 50, max = 150) =>
  Math.floor(Math.random() * (max - min) + min);

const toggleWindow = (el, showClass = "window--show") =>
  el.classList.toggle(showClass);

const writeLine = async (lineEl) => {
  let x;
  if (lineEl.classList.contains("instant")) {
    lineEl.textContent = lineEl.dataset.text;
    x = await sleep(keyStrokeDelay());
  } else {
    for (var i = 0; i < lineEl.dataset.text.length; i++) {
      lineEl.textContent = lineEl.textContent + lineEl.dataset.text[i];
      x = await sleep(keyStrokeDelay());
    }
  }
  return x;
};

setTimeout(() => {
  (async () => {
    windowDedsecLines = windowDedsec.querySelectorAll("p");
    windowDedsecLines.forEach((el) => {
      el.dataset.text = el.textContent;
      el.textContent = "";
    });
    toggleWindow(windowDedsec);
    // windowDedsecLines.forEach(async (el) => {
    //   writeLine(el);
    //   await sleep(keyStrokeDelay());
    // });
    for (var i = 0; i < windowDedsecLines.length; i++) {
      let x = await writeLine(windowDedsecLines[i]);
      windowDedsecContent.scrollTop = windowDedsecContent.scrollHeight;
      // await sleep(keyStrokeDelay());
    }
    // writeLine(windowDedsecLines[0]);
  })();
}, 1000);

setTimeout(() => {
  toggleWindow(windowBrb);
}, 2000);
5;

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
