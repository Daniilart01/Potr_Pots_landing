parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";function e(){var e=document.getElementById("basket/menu");window.innerWidth<1279?e.href="#menu":e.href="#message-us"}function t(){var e=document.getElementById("materials__article-text"),t=window.innerWidth;e.innerHTML=t<1279?"All materials used in our pots are\n      made from<br><b>100% recycled materials</b> and are <b>100%<br>recyclable\n      at the end of life</b> (should you ever<br>choose to get rid of your\n      POTR!). All materials<br>have been sourced from within Europe to<br>\n      reduce our carbon footprint when transporting<br>the raw materials,\n      and all manufacturing is<br>carried out in the UK.":"All materials used in our pots are\n      made from 100% recycled<br> materials and are 100% recyclable\n      at the end of life (should you <br> ever choose to get rid of\n      your POTR!). All materials have been <br> sourced from within\n      Europe to reduce our carbon footprint <br> when transporting\n      the raw materials, and all manufacturing is <br> carried out\n      in the UK."}function r(e){for(var t=document.querySelector("#materials__popup-text--"+e),r=document.querySelector("#materials__popup-button--"+e),n=1;;){var a=document.querySelector("#materials__popup-button--"+n),o=document.querySelector("#materials__popup-text--"+n);if(!a)break;if(a.classList.contains("pressed")&&a===r)return a.classList.remove("pressed"),void o.classList.remove("shown");a.classList.remove("pressed"),o.classList.remove("shown"),n++}t.classList.add("shown"),r.classList.add("pressed")}function n(e){for(var t=!1,r=1;r<=5;r++){var n=document.getElementById("materials__popup-button--".concat(r));e.target===n&&(t=!0)}if(!t)for(var a=1;a<=5;a++){var o=document.querySelector("#materials__popup-text--".concat(a)),s=document.querySelector("#materials__popup-button--".concat(a));o.classList.remove("shown"),s.classList.remove("pressed")}}function a(){var e=document.getElementById("form-email"),t=document.getElementById("form-name"),r=document.getElementById("form-message");return t.value.length<3?(t.classList.add("error"),alert("The name must contain at least 3 letters."),!1):/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e.value)?!(r.value.length<10)||(r.classList.add("error"),alert("The message must contain at least 10 characters."),!1):(e.classList.add("error"),alert("Please, enter correct email."),!1)}window.onload=function(){for(var e=function(e){document.getElementById("materials__popup-button--"+e).addEventListener("click",function(){r(e)})},t=1;t<=5;t++)e(t);var n=document.querySelector(".questions__form-inputs"),o=n.querySelectorAll(".input"),s=document.querySelector(".questions__form-inputs-field-message");o.forEach(function(e){e.addEventListener("focus",function(){n.classList.remove("validated"),o.forEach(function(e){e.classList.remove("error")})})}),n.addEventListener("submit",function(e){e.preventDefault(),a()&&(n.classList.add("validated"),n.reset(),s.style.cssText="height:auto;")}),s.addEventListener("keydown",function(){var e=this;setTimeout(function(){e.style.cssText="height:auto",e.style.cssText="height:"+e.scrollHeight+"px"},1)})},document.addEventListener("click",n),window.addEventListener("load",e),window.addEventListener("load",t),window.addEventListener("resize",e),window.addEventListener("resize",t);
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.53622f73.js.map