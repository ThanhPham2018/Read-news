// ==UserScript==
// @name         read medium
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
  var domainsToCheck = ["medium.com", ];
  var freediumUrl = "https://readmedium.com/";

  // Kiểm tra nếu URL chứa bất kỳ domain nào trong domainsToCheck và không chứa "freedium.cfd"
  var shouldReplace = domainsToCheck.some(function(domain) {
    return currentUrl.includes(domain);
  });

  if (shouldReplace && !currentUrl.includes("readmedium.com")) {
    // Thay đổi URL
    var newUrl = currentUrl.replace("https://medium.com/", freediumUrl);
    window.location = newUrl;
  }
})();
