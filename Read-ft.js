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

  // Kiểm tra nếu URL chứa "ft.com"
  if (currentUrl.includes("ft.com")) {
    // Thay đổi URL
    var newUrl = currentUrl.replace("https://", "https://freedium.cfd/");
    window.location = newUrl;
  }
})();
