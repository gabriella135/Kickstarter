parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});var e=document.getElementById("form");e.addEventListener("submit",function(t){t.preventDefault(),e.reset()});var t=document.querySelectorAll(".shop__nav-link"),a=document.querySelector(".shop__cards"),n=document.querySelector("#target"),s=document.querySelector("#body"),r=document.querySelector("#hair"),o=document.querySelector("#candles");t.forEach(function(e){e.addEventListener("click",function(c){c.preventDefault(),t.forEach(function(e){e.classList.remove("shop__nav-link--target")});var d=e.getAttribute("href");"#face"===d&&(a.style.transform="translateX(156%)",n.classList.add("shop__nav-link--target")),"#body"===d&&(a.style.transform="translateX(53%)",s.classList.add("shop__nav-link--target")),"#hair"===d&&(a.style.transform="translateX(-50%)",r.classList.add("shop__nav-link--target")),"#candles"===d&&(a.style.transform="translateX(-154%)",o.classList.add("shop__nav-link--target"))})});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.755a4055.js.map