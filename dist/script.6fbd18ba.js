parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L4bL":[function(require,module,exports) {
"use strict";var e=Math.trunc(20*Math.random())+1,t=20,o=0,r=function(e){document.querySelector(".message").textContent=e};function n(){var n=Number(document.querySelector(".guess").value);n?n===e?(r("🥳 Correct Number!"),confetti({spread:200,particleCount:300}),document.querySelector(".number").textContent=e,document.querySelector("body").style.backgroundColor="#60b347",document.querySelector(".number").style.width="30rem",t>o&&(o=t,document.querySelector(".highscore").textContent=o)):n!==e&&(t>1?(r(n>e?"Too High Guess!":"Too Low Guess!"),t-=1,document.querySelector(".score").textContent=t):(r("You Lost The Game!"),document.querySelector(".score").textContent=0)):r("No Number!")}document.querySelector(".check").addEventListener("click",function(){n()}),document.querySelector(".guess").addEventListener("keypress",function(e){13===e.keyCode&&(e.preventDefault(),n())}),document.querySelector(".again").addEventListener("click",function(){t=20,e=Math.trunc(20*Math.random())+1,document.querySelector(".number").textContent="?",document.querySelector(".guess").value="",document.querySelector("body").style.backgroundColor="#222",r("Start guessing..."),document.querySelector(".score").textContent=t,document.querySelector(".number").style.width="15rem"});
},{}]},{},["L4bL"], null)
//# sourceMappingURL=/script.6fbd18ba.js.map