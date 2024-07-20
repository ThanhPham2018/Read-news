// ==UserScript==
// @name         read ft
// @namespace    https://viayoo.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function () {
  // Lấy URL hiện tại
  var currentUrl = window.location.toString();

  // Kiểm tra nếu URL chứa "ft.com" và không chứa "freedium"
  if (currentUrl.includes("ft.com") && !currentUrl.includes("freedium.cfd")) {
    // Thay đổi URL
    var newUrl = currentUrl.replace("https://", "https://freedium.cfd/");
    window.location = newUrl;
  }
})();
