parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
"use strict";function e(e){var t=e.getFullYear(),a=("0"+(e.getMonth()+1)).slice(-2),o=("0"+e.getDate()).slice(-2);return"".concat(t,"-").concat(a,"-").concat(o)}document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".datepicker"),a=M.Datepicker.init(t);document.getElementById("save-date").addEventListener("click",function(){var t=a.date;if(t){var o=e(t);localStorage.setItem("selectedDate",o),console.log("Selected date saved:",o)}else console.log("No date selected")})});var t=localStorage.getItem("selectedDate");console.log("Retrieved saved date:",t);var a=indexedDB.open("myDatabase",1);function o(e){var t={id:"selectedDate",value:e};a.onsuccess=function(e){e.target.result.transaction(["dates"],"readwrite").objectStore("dates").put(t),console.log("Date saved to IndexedDB:",t.value)}}function n(){a.onsuccess=function(e){e.target.result.transaction(["dates"],"readonly").objectStore("dates").get("selectedDate").onsuccess=function(e){var t=e.target.result;t?console.log("Retrieved date from IndexedDB:",t.value):console.log("No date found in IndexedDB")}}}a.onupgradeneeded=function(e){e.target.result.createObjectStore("dates",{keyPath:"id"})};
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.4f1b8b65.js.map