const cookieBanner = (function() {
  const cookieBanner = document.querySelector('[data-cb-component="container"]')

  const preText = cookieBanner.getAttribute('data-cb-preText') || 'We use cookies to offer our website. By using our website you agree on the usage of cookies in accordance to our'
  const highlight = cookieBanner.getAttribute('data-cb-highlight') || ' privacy policy'
  const postText = cookieBanner.getAttribute('data-cb-postText') || '.'

  const position = cookieBanner.getAttribute('data-cb-position') || 'top'

  const bodyClass = cookieBanner.getAttribute('data-cb-bodyClass') || 'gm-cookie_banner--active'
  const activeClass = cookieBanner.getAttribute('data-cb-activeClass') || 'cb-cookie_banner--active'

  const cookieName = cookieBanner.getAttribute('data-cb-cookieName')
  const cookieValue = cookieBanner.getAttribute('data-cb-cookieValue') || 'accepted'
  const cookieExpires = parseInt(cookieBanner.getAttribute('data-cb-cookieExpires'), 10) || 7776000000
  const cookiePath = cookieBanner.getAttribute('data-cb-cookiePath') || '/'

  const linkDataAttr = 'data-cb-component="link"'
  const closeButtonDataAttr = 'data-cb-component="close-button"'

  const getBasicStyle = function() {
    return `
<style>
    .cb-cookie_banner {
      display: none;
      position: absolute;
      left: 0;
      width: 100%;
      z-index: 10000;
      ${position}: 0;
    }
    
    .cb-cookie_banner.${activeClass} {
        display: block;
    }
    
    .cb-cookie_highlight {
        color: #f00;
    }
</style>
    `
  }

  const getContent = function() {
    return `
<a href="${cookieBanner.getAttribute('data-cb-href')}" class="cb-cookie_privacyLink" ${linkDataAttr}>${preText}<span class="cb-cookie_highlight">${highlight}</span>${postText}</a>
<button type="button" class="cb-cookie_closeButton" ${closeButtonDataAttr}>×</button>`
  }

  const hasCookie = function() {
    return document.cookie.indexOf(cookieName) > -1
  }

  const setBasicStyle = function() {
    document.head.insertAdjacentHTML('beforeend', getBasicStyle())
  }

  const removeBanner = function() {
    cookieBanner.remove()
    document.body.classList.remove(bodyClass)
  }

  const setCookie = function() {
    const expireDate = new Date(new Date().getTime() + cookieExpires)
    document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)};expires=${expireDate.toGMTString()};path=${cookiePath};`
  }

  const storeCookie = function() {
    setCookie()
  }

  const setLinkAction = function() {
    const cookieLink = document.querySelector(`[${linkDataAttr}]`)
    cookieLink.addEventListener('mousedown', storeCookie, false)
  }

  const setCloseButtonAction = function() {
    const closeButton = document.querySelector(`[${closeButtonDataAttr}]`)

    closeButton.addEventListener('click', () => {
      storeCookie()
      removeBanner()
    }, false)
  }

  const setBanner = function() {
    cookieBanner.insertAdjacentHTML('beforeend', getContent())

    document.body.classList.add(bodyClass)
    cookieBanner.classList.add(activeClass)

    setLinkAction()
    setCloseButtonAction()
  }

  const init = function() {
    if (!hasCookie()) {
      setBasicStyle()
      setBanner()
    }
  }

  return {
    init: init
  }
})()

window.addEventListener('DOMContentLoaded', cookieBanner.init, false)