// =====================================
// DONATION IMPACT SLIDER
// =====================================

const impactSlider =
document.getElementById("impactSlider");

const impactText =
document.getElementById("impactText");

if (impactSlider && impactText) {

const impacts = {

1: `Provides a full term of scholastic books,
pens and school lunches for 2 vulnerable children.`,

2: `Funds an entire community-level medical outreach
tent supplying free diagnostics and treatment.`,

3: `Directly finances repair materials or structural
components for a rural clean-water well system.`

};

impactText.innerHTML = impacts[1];

impactSlider.addEventListener("input", () => {

impactText.innerHTML =
impacts[impactSlider.value];

});

}

// =====================================
// ANIMATED COUNTERS
// =====================================

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

const counter = entry.target;

const target =
Number(counter.dataset.target);

let count = 0;

const increment =
Math.max(target / 100, 1);

const updateCounter = () => {

count += increment;

if (count < target) {

counter.innerText =
Math.floor(count);

requestAnimationFrame(updateCounter);

} else {

counter.innerText =
target + "+";

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

},{
threshold:0.5
});

counters.forEach(counter => {

counterObserver.observe(counter);

});

// =====================================
// SMOOTH SCROLLING
// =====================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// =====================================
// FLOATING DONATE BUTTON
// =====================================

const floatingDonate =
document.getElementById(
"floatingDonate"
);

window.addEventListener(
"scroll",
() => {

if(!floatingDonate) return;

if(window.innerWidth < 992){

if(window.scrollY > 500){

floatingDonate.style.display =
"block";

}else{

floatingDonate.style.display =
"none";

}

}

}
);

// =====================================
// REVEAL ON SCROLL
// =====================================

const reveals =
document.querySelectorAll(
".reveal"
);

const revealObserver =
new IntersectionObserver(
(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add(
"active"
);

}

});

},
{
threshold:0.15
}
);

reveals.forEach(section => {

revealObserver.observe(section);

});

// =====================================
// MOBILE MENU
// =====================================

const mobileBtn =
document.getElementById(
"mobileMenuBtn"
);

const mobileMenu =
document.getElementById(
"mobileMenu"
);

if(mobileBtn && mobileMenu){

mobileBtn.addEventListener(
"click",
() => {

mobileMenu.classList.toggle(
"active"
);

}
);

}

// =====================================
// CLOSE MOBILE MENU WHEN LINK CLICKED
// =====================================

document
.querySelectorAll(".mobile-menu a")
.forEach(link => {

link.addEventListener(
"click",
() => {

mobileMenu.classList.remove(
"active"
);

}
);

});
