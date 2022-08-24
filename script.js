"use strict";

function toHome() {
  var home = document.getElementById("Home-el");
  console.log(home);
  home.scrollIntoView({ behavior: "smooth" });
}

function toAbout() {
  var about = document.getElementById("about-el");
  console.log(about);
  about.scrollIntoView({ behavior: "smooth" });
}

 function toService() {
    var service = document.getElementById('service-El')
    console.log(service)
    service.scrollIntoView({ behavior: "smooth"})
 }

 function toPortfolio() {
    var portfolio = document.getElementById('Portfolio-El')
    console.log(portfolio)
    portfolio.scrollIntoView({ behavior: "smooth"})
 }

function toResume() {
  var resume = document.getElementById('resume-el')
  console.log(resume)
  resume.scrollIntoView({ behavior: "smooth"})
}