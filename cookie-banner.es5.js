'use strict';

var cookieBanner = function () {
  var cookieBanner = document.querySelector('[data-cb-component="container"]');

  var preText = cookieBanner.getAttribute('data-cb-preText') || 'We use cookies to offer our website. By using our website you agree on the usage of cookies in accordance to our';
  var highlight = cookieBanner.getAttribute('data-cb-highlight') || ' privacy policy';
  var postText = cookieBanner.getAttribute('data-cb-postText') || '.';

  var position = cookieBanner.getAttribute('data-cb-position') || 'top';

  var bodyClass = cookieBanner.getAttribute('data-cb-bodyClass') || 'gm-cookie_banner--active';
  var activeClass = cookieBanner.getAttribute('data-cb-activeClass') || 'cb-cookie_banner--active';

  var cookieName = cookieBanner.getAttribute('data-cb-cookieName');
  var cookieValue = cookieBanner.getAttribute('data-cb-cookieValue') || 'accepted';
  var cookieExpires = parseInt(cookieBanner.getAttribute('data-cb-cookieExpires'), 10) || 7776000000;
  var cookiePath = cookieBanner.getAttribute('data-cb-cookiePath') || '/';

  var linkDataAttr = 'data-cb-component="link"';
  var closeButtonDataAttr = 'data-cb-component="close-button"';

  var getBasicStyle = function getBasicStyle() {
    return '\n<style>\n    .cb-cookie_banner {\n      display: none;\n      position: absolute;\n      left: 0;\n      width: 100%;\n      z-index: 10000;\n      ' + position + ': 0;\n    }\n    \n    .cb-cookie_banner.' + activeClass + ' {\n        display: block;\n    }\n    \n    .cb-cookie_highlight {\n        color: #f00;\n    }\n</style>\n    ';
  };

  var getContent = function getContent() {
    return '\n<a href="' + cookieBanner.getAttribute('data-cb-href') + '" class="cb-cookie_privacyLink" ' + linkDataAttr + '>' + preText + '<span class="cb-cookie_highlight">' + highlight + '</span>' + postText + '</a>\n<button type="button" class="cb-cookie_closeButton" ' + closeButtonDataAttr + '>\xD7</button>';
  };

  var hasCookie = function hasCookie() {
    return document.cookie.indexOf(cookieName) > -1;
  };

  var setBasicStyle = function setBasicStyle() {
    document.head.insertAdjacentHTML('beforeend', getBasicStyle());
  };

  var removeBanner = function removeBanner() {
    cookieBanner.remove();
    document.body.classList.remove(bodyClass);
  };

  var setCookie = function setCookie() {
    var expireDate = new Date(new Date().getTime() + cookieExpires);
    document.cookie = cookieName + '=' + encodeURIComponent(cookieValue) + ';expires=' + expireDate.toGMTString() + ';path=' + cookiePath + ';';
  };

  var storeCookie = function storeCookie() {
    setCookie();
  };

  var setLinkAction = function setLinkAction() {
    var cookieLink = document.querySelector('[' + linkDataAttr + ']');
    cookieLink.addEventListener('mousedown', storeCookie, false);
  };

  var setCloseButtonAction = function setCloseButtonAction() {
    var closeButton = document.querySelector('[' + closeButtonDataAttr + ']');

    closeButton.addEventListener('click', function () {
      storeCookie();
      removeBanner();
    }, false);
  };

  var setBanner = function setBanner() {
    cookieBanner.insertAdjacentHTML('beforeend', getContent());

    document.body.classList.add(bodyClass);
    cookieBanner.classList.add(activeClass);

    setLinkAction();
    setCloseButtonAction();
  };

  var init = function init() {
    if (!hasCookie()) {
      setBasicStyle();
      setBanner();
    }
  };

  return {
    init: init
  };
}();

window.addEventListener('DOMContentLoaded', cookieBanner.init, false);