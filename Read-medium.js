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

(function() {
    const domains = ['medium.com', 'betterprogramming.pub', 'towardsdatascience.com'];
    const currentUrl = window.location.href;

    function matchDomain(url, domains) {
        return domains.some(domain => url.includes(domain));
    }

    if (matchDomain(currentUrl, domains)) {
        const newUrl = currentUrl.replace('https://', 'https://readmedium.com/en/');
        window.location.replace(newUrl);
    }
})();
