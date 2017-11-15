export const fonts = `
@font-face {
  font-family: 'Source Sans Pro';
  src: url('../fonts/source-sans-pro/SourceSansPro-Bold.woff2') format('woff2'),
      url('../fonts/source-sans-pro/SourceSansPro-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Source Sans Pro';
  src: url('../fonts/source-sans-pro/SourceSansPro-SemiBold.woff2') format('woff2'),
      url('../fonts/source-sans-pro/SourceSansPro-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Source Sans Pro';
  src: url('../fonts/source-sans-pro/SourceSansPro-SemiBoldItalic.woff2') format('woff2'),
      url('../fonts/source-sans-pro/SourceSansPro-SemiBoldItalic.woff') format('woff');
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: 'Source Sans Pro';
  src: url('../fonts/source-sans-pro/SourceSansPro-Regular.woff2') format('woff2'),
      url('../fonts/source-sans-pro/SourceSansPro-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Source Sans Pro';
  src: url('../fonts/source-sans-pro/SourceSansPro-Italic.woff2') format('woff2'),
      url('../fonts/source-sans-pro/SourceSansPro-Italic.woff') format('woff');
  font-weight: 400;
  font-style: italic;
}
@font-face {
  font-family: 'Russo One';
  src: url('../fonts/russo-one/RussoOne-Regular.woff2') format('woff2'),
      url('../fonts/russo-one/RussoOne-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
`

export const reset = `
/* http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
display: block;
}
ol, ul {
list-style: none;
margin-bottom: 1em;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
`

export const common = `
*, *:before, *:after {
  box-sizing: inherit;
}

html {
  font-size: calc(.75rem + 1vw);
}

body {
  box-sizing: border-box;
  color: #414042;
  font-family: 'Source Sans Pro', 'Verdana', sans-serif;
  font-weight: 400;
  line-height: 1.25;
  word-spacing: 0px;
}

h1,
h2,
h3,
h4 {
  color: #178254;
  font-family: 'Russo One', 'Arial Black', serif;
  font-size: 2.25em;
  font-weight: 400;
  line-height: 1;
  margin: 1.5em 0 .5em;
}

h2 {
  font-size: 2em;
}

h3,
h4 {
  font-family: 'Source Sans Pro', 'Verdana', sans-serif;
  font-weight: 700;
}

h3 {
  font-size: 1.5em;
}

h4 {
  font-size: 1.25em;
}

p {
  margin-bottom: 1em;
}

@media screen and (min-width: 25em) {
  body {
    line-height: 1.30;
  }
}

@media screen and (min-width: 37.5em) {
  body {
    line-height: 1.35;
  }
}

@media screen and (min-width: 50em) {
  body {
    line-height: 1.4;
  }
}

`
