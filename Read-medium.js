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

if (shouldRedirect(mediumDomains, googleCacheDomain, mediumLinkSelector)) {
    const url = window.location.href;
    redirectExternalLink('readmedium.com', 'https://{domain}/{url}', url);
  }

  function shouldRedirect(mediumDomains, googleCacheDomain, mediumLinkSelector) {
    return matchDomain(mediumDomains) || 
           (!matchDomain(googleCacheDomain) && document.querySelector(mediumLinkSelector));
  }

  function redirectExternalLink(domain, extUrlTemplate, url) {
    const extUrl = extUrlTemplate.replace('{domain}', domain).replace('{url}', encodeURIComponent(url));
    window.location.href = extUrl;
  }
})();


// (function () {
//   // Lấy URL hiện tại
//   var currentUrl = window.location.toString();
//   var domainsToCheck = ["medium.com", ];
//   var freediumUrl = "https://readmedium.com/";

//   // Kiểm tra nếu URL chứa bất kỳ domain nào trong domainsToCheck và không chứa "freedium.cfd"
//   var shouldReplace = domainsToCheck.some(function(domain) {
//     return currentUrl.includes(domain);
//   });

//   if (shouldReplace && !currentUrl.includes("readmedium.com")) {
//     // Thay đổi URL
//     var newUrl = currentUrl.replace("https://medium.com/", freediumUrl);
//     window.location = newUrl;
//   }
// })();
