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
  const mediumDomains = ['medium.com', 'betterprogramming.pub', 'towardsdatascience.com'];
  const googleCacheDomain = 'webcache.googleusercontent.com';
  const mediumLinkSelector = 'head > link[href*=".medium.com/"]';

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
