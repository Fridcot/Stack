webpackJsonp([0],[,,function(e,t,n){"use strict";(function(e){var t=n(4);(0,t.getUsers)().then(function(n){var r="";n.forEach(function(e){r+='<tr>\n    <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n    <td>'+e.id+"</td>\n    <td>"+e.firstName+"</td>\n    <td>"+e.lastName+"</td>\n    <td>"+e.email+"</td>\n    </tr>"}),e.document.getElementById("users").innerHTML=r;var o=e.document.getElementsByClassName("deleteUser");Array.from(o,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(){return u("users")}function o(e){return i("users/"+e)}function u(e){return fetch(l+e).then(c,a)}function c(e){return e.json()}function a(e){console.log(e)}function i(e){var t=new Request(l+e,{method:"DELETE"});return fetch(t).then(c,a)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=r,t.deleteUser=o,n(0);var d=n(5),s=function(e){return e&&e.__esModule?e:{default:e}}(d),l=(0,s.default)()},function(e,t,n){"use strict";function r(){return o("useMockApi")?"http://localhost:3001/":"/"}function o(e,t){t||(t=window.location.href),e=e.replace(/[[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}],[2]);