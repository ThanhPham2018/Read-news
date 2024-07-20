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
  var domainsToCheck = ["ft.com", "medium.com"];
  var freediumUrl = "https://freedium.cfd/";

  // Kiểm tra nếu URL chứa bất kỳ domain nào trong domainsToCheck và không chứa "freedium.cfd"
  var shouldReplace = domainsToCheck.some(function(domain) {
    return currentUrl.includes(domain);
  });

  if (shouldReplace && !currentUrl.includes("freedium.cfd")) {
    // Thay đổi URL
    var newUrl = currentUrl.replace("https://", freediumUrl);
    window.location = newUrl;
  }
})();
