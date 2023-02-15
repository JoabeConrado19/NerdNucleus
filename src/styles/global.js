import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
	font-size: 100%;
	font-family: 'Roboto Mono', monospace;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
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
body{
    /* background-color: #2c2c54; */
    font-family: 'Inter', sans-serif;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh;
    

}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;

}



.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  background-color:#2c2c54;
  color: #fff;
  width: 100%;
}

.logo {
  height: 50px;
}

.nav-links {
  display: flex;
  list-style: none;
}

.navbar > h1 {
  font-size: 20px;
}

.nav-links li {
  margin-right: 40px;
  border-bottom: 2px solid transparent ;
  font-size: 18px;
  transition: ease all 0.5s;

}

.nav-links li:hover {
  border-bottom: 2px solid white ;
  
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.search-form {
  display: flex;
}

.search-form input[type="text"] {
  height: 40px;
  padding: 0 10px;
  border: none;
  border-radius: 20px 0 0 20px;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  outline: none;
}

.search-form button[type="submit"] {
  height: 40px;
  padding: 0 20px;
  border: none;
  border-radius: 0 20px 20px 0;
  background-color: #4caf50;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.preloader-container{
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
}
.c-loader {
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 200px;
  width: 200px;
}

.c-loader2 {
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;
}

#trigger{
  background-color: red;
  width: 200px;
  height: 50px;
}

@media (max-width: 871px) {
.featured-container{
  display: block;
  width: 100%;
  height: 900px;
  padding: 0;
  margin-top: -20px;
}

.big-img{
  min-width: 100vw;
 max-height: 380px;
  margin-bottom: 10px;
  padding: 0;

}

.mini-img-container-top{
  padding: 0;
  margin: 0;
}


.mini-img-container{
  min-width: 100vw;
  max-height: 500px;
  padding: 0px;
  margin: 0;
  
}

.mini-news{
  margin: 0px 0px 0px 0px;
}
  
}



@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}

@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #0a0c2e;
    overflow: hidden;
    z-index: -6;
}
.background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 19s linear infinite;
}




.background li:nth-child(0) {
    left: 25%;
    width: 240px;
    height: 240px;
    bottom: -240px;
    animation-delay: 1s;
}
.background li:nth-child(1) {
    left: 68%;
    width: 159px;
    height: 159px;
    bottom: -159px;
    animation-delay: 4s;
}
.background li:nth-child(2) {
    left: 13%;
    width: 231px;
    height: 231px;
    bottom: -231px;
    animation-delay: 4s;
}
.background li:nth-child(3) {
    left: 89%;
    width: 86px;
    height: 86px;
    bottom: -86px;
    animation-delay: 13s;
}
.background li:nth-child(4) {
    left: 82%;
    width: 266px;
    height: 266px;
    bottom: -266px;
    animation-delay: 10s;
}
.background li:nth-child(5) {
    left: 0%;
    width: 161px;
    height: 161px;
    bottom: -161px;
    animation-delay: 8s;
}
.background li:nth-child(6) {
    left: 68%;
    width: 65px;
    height: 65px;
    bottom: -65px;
    animation-delay: 30s;
}
.background li:nth-child(7) {
    left: 53%;
    width: 235px;
    height: 235px;
    bottom: -235px;
    animation-delay: 5s;
}
.background li:nth-child(8) {
    left: 39%;
    width: 162px;
    height: 162px;
    bottom: -162px;
    animation-delay: 1s;
}
.background li:nth-child(9) {
    left: 70%;
    width: 171px;
    height: 171px;
    bottom: -171px;
    animation-delay: 6s;
}
.background li:nth-child(10) {
    left: 31%;
    width: 251px;
    height: 251px;
    bottom: -251px;
    animation-delay: 14s;
}
.background li:nth-child(11) {
    left: 34%;
    width: 98px;
    height: 98px;
    bottom: -98px;
    animation-delay: 53s;
}
.background li:nth-child(12) {
    left: 5%;
    width: 222px;
    height: 222px;
    bottom: -222px;
    animation-delay: 52s;
}
.background li:nth-child(13) {
    left: 13%;
    width: 174px;
    height: 174px;
    bottom: -174px;
    animation-delay: 45s;
}
.background li:nth-child(14) {
    left: 2%;
    width: 202px;
    height: 202px;
    bottom: -202px;
    animation-delay: 2s;
}
.background li:nth-child(15) {
    left: 51%;
    width: 153px;
    height: 153px;
    bottom: -153px;
    animation-delay: 18s;
}

@media (max-width: 700px) {
  .nav-links,
  .search-form {
    display: none;
  }

  .navbar {
    height: 60px;
  }

  .logo {
    height: 40px;
  }
}

`;