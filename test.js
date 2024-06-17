import Selector from "./Selector.js";

//querySelector 확인
const $btn = Selector.querySelector("button");
const $secondDiv = Selector.querySelector("#second-div");
const $li = Selector.querySelector(".li");

console.dir($btn);
console.dir($secondDiv);
console.dir($li);

//querySelectorAll 확인
const $divs = Selector.querySelectorAll("div");
const $lis = Selector.querySelectorAll(".li");

console.dir($divs);
console.dir($lis);
