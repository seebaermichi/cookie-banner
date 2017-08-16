# Simple cookie-banner
This is an easy to implement cookie-banner. No need to write any line of JavaScript, just add Html.

## Implementation
Add the following Html at the top of your body element:
```html
<div class="cb-cookie_banner" data-cb-component="container" data-cb-cookieName="testCookie" data-cb-href="privacy-policy.html"></div>
```
Please keep the class for basic styles like absolute position. The value for the `data-cb-component` should also always be `container`.
But you can provide a custom cookie name and a link to your privacy policy page.
Download the `cookie-banner.min.js` file.
At the end of your source code right above the closing `body` tag you should add the following:
```html
<script src="cookie-banner.min.js"></script>
```

## Customization
There are a lot more things you can customize. Please see the following examples:

### Customize Text
```html
<div class="cb-cookie_banner" data-cb-component="container" data-cb-cookieName="otherTextCookie" data-cb-href="privacy-policy.html" data-cb-preText="This is a" data-cb-highlight=" cookie banner" data-cb-postText=" and it's really easy to customize it."></div>
```
So here you can change the text of the banner by using the following attributes:
* `data-cb-preText` - default is: _We use cookies to offer our website. By using our website you agree on the usage of cookies in accordance to our_
* `data-cb-highlight` - default is: _privacy policy_
* `data-cb-postText` - default is _._

### Customize position
```html
<div class="cb-cookie_banner" data-cb-component="container" data-cb-cookieName="bottomCookie" data-cb-href="privacy-policy.html" data-cb-position="bottom"></div>
```
Here you have specified that the cookie banner will be shown at the bottom of the page. The default value for the `data-cb-position` attribute is `top`. You only have two options so far.

### Customize CSS classes
```html
<div class="cb-cookie_banner" data-cb-component="container" data-cb-cookieName="otherCssClassesCookie" data-cb-href="privacy-policy.html" data-cb-bodyClass="active-cookie" data-cb-activeClass="isActive"></div>
```
The `body` gets an additional css class when the cookie banner is active. You might want to use this to add differnt styles to other elements when cookie banner is active.
You also might want to use another css class for the active state of the banner.
The defaults for both attributes are:
* _gm-cookie_banner--active_ for `data-cb-bodyClass`
* _cb-cookie_banner--active_ for `data-cb-activeClass`

### Customize cookie properties
```html
<div class="cb-cookie_banner" data-cb-component="container" data-cb-cookieName="otherDataCookie" data-cb-href="privacy-policy.html" data-cb-cookieValue="true" data-cb-cookieExpires="86400000" data-cb-cookiePath="/sub-path"></div>
```
Here we added a cookie banner which stores a cookie with a value of `true` for one day and only in sub-folder `sub-path`.
If you leave these attributes the following properties are used:
* _accepted_ for `data-cb-cookieValue`
* _7776000000_ (3 months) for `data-cb-cookieExpires`
* _/_ for `data-cb-cookiePath`

## License
cookie-banner is released under the MIT License. See [LICENSE][1] file for details.

[1]: https://github.com/seebaermichi/cookie-banner/blob/master/LICENSE