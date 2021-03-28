const p01 = document.querySelector("#p01");
const p02 = document.querySelector("#p02");
const p03 = document.querySelector("#p03");
const p04 = document.querySelector("#p04");
const p05 = document.querySelector("#p05");
const p06 = document.querySelector("#p06");
const p07 = document.querySelector("#p07");
const p08 = document.querySelector("#p08");
const p09 = document.querySelector("#p09");
const p10 = document.querySelector("#p10");
const p11 = document.querySelector("#p11");
const p12 = document.querySelector("#p12");
const p13 = document.querySelector("#p13");
const p14 = document.querySelector("#p14");
const p15 = document.querySelector("#p15");
const audio = document.querySelector("#droplets_sound");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const changeColor = function (element, color) {
  element.style.fill = color;
};

const run = async function () {
  await sleep(1500);
  audio.play();
  await sleep(200);
  changeColor(p01, "#d90000");
  audio.pause();
  await sleep(150);
  audio.play();
  await sleep(150);
  changeColor(p02, "#c900000");
  audio.pause();
  await sleep(150);
  audio.play();
  await sleep(150);
  changeColor(p03, "#c00000");
  audio.pause();
  await sleep(200);
  audio.play();
  await sleep(30);
  changeColor(p04, "#b90000");
  await sleep(300);
  changeColor(p05, "#a90000");
  await sleep(200);
  changeColor(p06, "#990000");
  await sleep(100);
  changeColor(p07, "#890000");
  await sleep(90);
  changeColor(p08, "#790000");
  await sleep(200);
  changeColor(p09, "#690000");
  await sleep(80);
  changeColor(p10, "#690000");
  await sleep(150);
  changeColor(p11, "#690000");
  await sleep(200);
  changeColor(p12, "#590000");
  await sleep(200);
  changeColor(p13, "#590000");
  await sleep(200);
  changeColor(p14, "#590000");
  await sleep(200);
  changeColor(p15, "#590000");
  audio.pause();
};

run();
